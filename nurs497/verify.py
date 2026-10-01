#!/usr/bin/env python3
"""Walk every built interactive step by step and report what the engine does.

Reads each page's own step data to know the correct answers, tries a wrong answer
first where one exists so the wrong-answer feedback gets exercised, then the right
one, and screenshots each stage.
"""
import json
import re
import sys
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).parent
HERE = ROOT / "interactives"
SHOTS = ROOT / "shots"

DRIVE = """
(payload) => {
  const { kind, targets } = payload;
  const norm = s => (s || "").replace(/\\s+/g, " ").trim();
  const key = s => norm(s).slice(0, 45);
  const tiles = () => Array.from(document.querySelectorAll(".stage button"));
  // Matrix cells carry their label on aria-label, not in text content.
  const label = b => norm(b.textContent) + " " + norm(b.getAttribute("aria-label"));
  const byText = frag => tiles().find(b => label(b).indexOf(key(frag)) >= 0);
  const clicked = [];
  for (const pair of targets) {
    const a = byText(pair[0]);
    if (!a) { return { ok: false, missing: pair[0] }; }
    a.click();
    clicked.push(key(a.textContent));
    if (pair.length > 1) {
      const b = byText(pair[1]);
      if (!b) { return { ok: false, missing: pair[1] }; }
      b.click();
      clicked.push(key(b.textContent));
    }
  }
  return { ok: true, clicked, kind };
}
"""


def step_plan(step):
    """Return (wrong_targets, right_targets) as lists of tile-text tuples."""
    t = step.get("type")
    if t == "match":
        right = [(l["text"], next(r["text"] for r in step["right"] if r["for"] == l["id"]))
                 for l in step["left"]]
        wrong = None
        if len(step["left"]) > 1:
            # Swap the first two pairs so the pairing is complete but incorrect.
            wrong = [(right[0][0], right[1][1]), (right[1][0], right[0][1])] + right[2:]
        return wrong, right
    if t == "sort" and step.get("layout") == "matrix":
        # Matrix cells are bins labelled "Row | Col"; item bin is "rowId|colId".
        rows = {r["id"]: r["label"] for r in step["rows"]}
        cols = {c["id"]: c["label"] for c in step["cols"]}
        def cell(key):
            r, c = key.split("|")
            return rows[r] + " | " + cols[c]
        right = [(i["text"], cell(i["bin"])) for i in step["items"]]
        others = [k for k in
                  (r + "|" + c for r in rows for c in cols)
                  if k != step["items"][0]["bin"]]
        wrong = [(step["items"][0]["text"], cell(others[0]))] + right[1:]
        return wrong, right
    if t == "sort":
        bins = {b["id"]: b["label"] for b in step["bins"]}
        right = [(i["text"], bins[i["bin"]]) for i in step["items"]]
        others = [b for b in bins if b != step["items"][0]["bin"]]
        wrong = [(step["items"][0]["text"], bins[others[0]])] + right[1:] if others else None
        return wrong, right
    if t == "order":
        items = {i["id"]: i["text"] for i in step["items"]}
        right = [(items[i],) for i in step["answer"]]
        rev = list(reversed(step["answer"]))
        wrong = [(items[i],) for i in rev] if rev != step["answer"] else None
        return wrong, right
    if t in ("choice", "pick"):
        ok = [o["text"] for o in step["options"] if o.get("ok")]
        bad = [o["text"] for o in step["options"] if not o.get("ok")]
        if t == "pick":
            return None, [(step["options"][0]["text"],)]
        return ([(bad[0],)] if bad else None), [(ok[0],)]
    return None, None


def read_steps(html_path):
    """Pull the steps array out of a built page by running it in the browser."""
    return None  # steps are read in-page instead


def main():
    SHOTS.mkdir(exist_ok=True)
    log = []
    targets = sorted(HERE.glob("week-*/*.html"))
    with sync_playwright() as p:
        browser = p.chromium.launch()
        for path in targets:
            name = path.stem
            log.append(f"== {name}")
            page = browser.new_page(viewport={"width": 1120, "height": 950})
            errors = []
            page.on("pageerror", lambda e: errors.append("pageerror: " + str(e)))
            page.on("console",
                    lambda m: errors.append("console: " + m.text) if m.type == "error" else None)
            page.goto(path.as_uri())
            page.wait_for_timeout(600)

            glob_name = page.evaluate(
                "() => Object.keys(window).find(k => k.startsWith('nurs497_'))")
            steps = page.evaluate(
                "(g) => window[g].steps.map(s => JSON.parse(JSON.stringify(s, (k, v) =>"
                " typeof v === 'function' ? undefined : v)))", glob_name)
            log.append(f"  {len(steps)} steps, global {glob_name}")

            for idx, step in enumerate(steps):
                heading = page.query_selector(".stage h2, .stage h3")
                shown = heading.inner_text().strip() if heading else "(none)"
                prog = page.query_selector(".prog-text")
                log.append(f"  step {idx + 1} [{step.get('type')}] shown: {shown!r} "
                           f"progress: {prog.inner_text().strip()!r}")
                page.screenshot(path=str(SHOTS / f"{name}-{idx + 1:02d}.png"), full_page=True)

                if step.get("type") == "write":
                    page.fill("textarea", "Practice note typed during verification.")
                    page.wait_for_timeout(200)
                    page.click(".stage button:has-text('Save')")
                    page.wait_for_timeout(300)
                    log.append(f"    save feedback: {bar(page)!r}")
                    page.screenshot(path=str(SHOTS / f"{name}-{idx + 1:02d}b.png"), full_page=True)
                    break

                if step.get("type") == "sim":
                    drive_sim(page, log)
                else:
                    wrong, right = step_plan(step)
                    if wrong:
                        res = page.evaluate(DRIVE, {"kind": step["type"], "targets": wrong})
                        if not res.get("ok"):
                            log.append(f"    WRONG-PASS tile not found: {res.get('missing')!r}")
                        click_cta(page)
                        log.append(f"    wrong answer says: {bar(page)!r}")
                        page.screenshot(path=str(SHOTS / f"{name}-{idx + 1:02d}w.png"),
                                        full_page=True)
                        click_cta(page)  # Try again
                        page.wait_for_timeout(300)
                    res = page.evaluate(DRIVE, {"kind": step["type"], "targets": right})
                    if not res.get("ok"):
                        log.append(f"    RIGHT-PASS tile not found: {res.get('missing')!r}")
                    click_cta(page)
                    log.append(f"    right answer says: {bar(page)!r}")

                cta = page.query_selector(".cta")
                label = cta.inner_text().strip() if cta else ""
                if label != "Continue":
                    log.append(f"    STUCK: cta reads {label!r} instead of Continue")
                    break
                cta.click()
                page.wait_for_timeout(450)

            log.append("  " + ("JS ERRORS: " + " | ".join(errors[:4]) if errors
                               else "no JS errors"))
            page.close()
        browser.close()
    print("\n".join(log))


def bar(page):
    el = page.query_selector(".bar-msg")
    return el.inner_text().strip().replace("\n", " ")[:200] if el else ""


def click_cta(page):
    cta = page.query_selector(".cta")
    if cta and not cta.is_disabled():
        cta.click()
        page.wait_for_timeout(450)


def drive_sim(page, log):
    """Hit the sim's published allocation using its own reveal, then check."""
    before = page.query_selector(".meter-num")
    log.append(f"    meter before: {before.inner_text().strip().replace(chr(10), ' ')!r}"
               if before else "    no meter")
    for row in page.query_selector_all(".stage .alloc .alloc-row")[:2]:
        row.query_selector_all(".alloc-btn")[1].click()
        page.wait_for_timeout(120)
    mid = page.query_selector(".meter-num")
    log.append(f"    meter after two taps: {mid.inner_text().strip().replace(chr(10), ' ')!r}"
               if mid else "    no meter")
    click_cta(page)
    log.append(f"    partial plan says: {bar(page)!r}")
    click_cta(page)
    page.wait_for_timeout(300)
    targets = [2, 5, 3, 3, 1.5]
    rows = page.query_selector_all(".stage .alloc .alloc-row")
    for row, want in zip(rows, targets):
        minus, plus = row.query_selector_all(".alloc-btn")[:2]
        while not minus.is_disabled():
            minus.click()
        for _ in range(int(round(want / 0.5))):
            plus.click()
    page.wait_for_timeout(200)
    log.append("    set every category by hand")
    show = page.query_selector(".bar .ghost")
    log.append(f"    Show answer offered: {bool(show and show.is_visible())}")
    after = page.query_selector(".meter-num")
    log.append(f"    meter at plan: {after.inner_text().strip().replace(chr(10), ' ')!r}"
               if after else "    no meter")
    click_cta(page)
    log.append(f"    full plan says: {bar(page)!r}")


if __name__ == "__main__":
    sys.exit(main())
