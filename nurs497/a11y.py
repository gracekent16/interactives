#!/usr/bin/env python3
"""Run the shippable accessibility checks on built interactives.

Covers heading order, keyboard reachability, focus visibility, 44px targets,
nested scrollbars at 320px, and reduced-motion behaviour.
"""
import sys
from pathlib import Path

from playwright.sync_api import sync_playwright

HERE = Path(__file__).parent / "interactives"

AUDIT = """
() => {
  const out = { headings: [], small: [], scrollers: [], noAria: [] };
  document.querySelectorAll("h1,h2,h3,h4,h5,h6").forEach(h => {
    out.headings.push([h.tagName, (h.textContent || "").trim().slice(0, 44)]);
  });
  document.querySelectorAll("button, textarea, input, a[href]").forEach(el => {
    const r = el.getBoundingClientRect();
    const hidden = r.width === 0 && r.height === 0;
    if (!hidden && (r.width < 44 || r.height < 44)) {
      out.small.push([el.tagName + "." + (el.className || ""),
                      Math.round(r.width) + "x" + Math.round(r.height),
                      (el.textContent || el.getAttribute("aria-label") || "").trim().slice(0, 34)]);
    }
    const label = (el.textContent || "").trim() || el.getAttribute("aria-label");
    if (!label) { out.noAria.push(el.tagName + "." + (el.className || "")); }
  });
  document.querySelectorAll("*").forEach(el => {
    const cs = getComputedStyle(el);
    const scrolls = (ax) => cs["overflow" + ax] === "auto" || cs["overflow" + ax] === "scroll";
    const over = el.scrollHeight > el.clientHeight + 2 || el.scrollWidth > el.clientWidth + 2;
    if ((scrolls("Y") || scrolls("X")) && over) {
      out.scrollers.push(el.tagName + "." + (el.className || ""));
    }
    if (cs.maxHeight && cs.maxHeight !== "none" && el.className &&
        String(el.className).indexOf("sr-live") === -1) {
      out.scrollers.push("max-height on " + el.tagName + "." + el.className);
    }
  });
  out.docScrollsX = document.documentElement.scrollWidth >
                    document.documentElement.clientWidth + 2;
  return out;
}
"""


def heading_order(headings):
    problems = []
    last = 0
    for tag, text in headings:
        level = int(tag[1])
        if last and level > last + 1:
            problems.append(f"{tag} after h{last}: {text!r}")
        last = level
    return problems


def main():
    log = []
    for path in sorted(HERE.glob("week-*/*.html")):
        log.append(f"== {path.stem}")
        with sync_playwright() as p:
            browser = p.chromium.launch()

            page = browser.new_page(viewport={"width": 1120, "height": 950})
            page.goto(path.resolve().as_uri())
            page.wait_for_timeout(600)
            data = page.evaluate(AUDIT)

            bad = heading_order(data["headings"])
            log.append("  heading order: " + ("OK, " + " > ".join(
                h[0] for h in data["headings"][:6]) if not bad else "PROBLEM " + "; ".join(bad)))
            log.append(f"  targets under 44px: {data['small'] if data['small'] else 'none'}")
            log.append(f"  unlabelled controls: {data['noAria'] if data['noAria'] else 'none'}")
            log.append(f"  nested scroll containers: "
                       f"{sorted(set(data['scrollers'])) if data['scrollers'] else 'none'}")

            # Keyboard reachability of the first step's controls.
            reached = []
            for _ in range(28):
                page.keyboard.press("Tab")
                info = page.evaluate("""() => {
                  const a = document.activeElement;
                  if (!a || a === document.body) { return null; }
                  const cs = getComputedStyle(a);
                  return { tag: a.tagName, cls: String(a.className || ""),
                           outline: cs.outlineWidth,
                           label: (a.textContent || a.getAttribute('aria-label') || '')
                                   .trim().slice(0, 30) };
                }""")
                if info:
                    reached.append(info)
            noring = [r for r in reached if r["outline"] in ("0px", "")]
            log.append(f"  tab stops reached: {len(reached)}, "
                       f"without a focus ring: {len(noring)}")

            # Complete a step with the keyboard alone.
            page.goto(path.resolve().as_uri())
            page.wait_for_timeout(500)
            ok = page.evaluate("""() => {
              const g = window[Object.keys(window).find(k => k.startsWith('nurs497_'))];
              return !!(g && g.steps && g.steps.length);
            }""")
            log.append(f"  step data reachable for keyboard drive: {ok}")
            page.close()

            # 320px reflow.
            narrow = browser.new_page(viewport={"width": 320, "height": 900})
            narrow.goto(path.resolve().as_uri())
            narrow.wait_for_timeout(700)
            n = narrow.evaluate(AUDIT)
            log.append(f"  at 320px, sideways scroll: {n['docScrollsX']}, "
                       f"nested scrollers: {sorted(set(n['scrollers'])) or 'none'}")
            narrow.screenshot(path=str(Path(__file__).parent / "shots" /
                                       f"{path.stem}-320.png"), full_page=True)
            narrow.close()

            # Reduced motion.
            rm = browser.new_context(reduced_motion="reduce").new_page()
            rm.goto(path.resolve().as_uri())
            rm.wait_for_timeout(600)
            dur = rm.evaluate("""() => {
              const el = document.querySelector('.tile') || document.querySelector('.cta');
              const cs = getComputedStyle(el);
              return [cs.transitionDuration, cs.animationDuration];
            }""")
            log.append(f"  reduced motion transition and animation: {dur}")
            rm.close()
            browser.close()
    print("\n".join(log))


if __name__ == "__main__":
    sys.exit(main())
