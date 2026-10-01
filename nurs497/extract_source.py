#!/usr/bin/env python3
"""Dump the live NURS 497 week content out of the export into one markdown file.

Run once. The interactives build reads the markdown, not the export.
"""
import html
import re
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

EXPORT = Path(__file__).parent / "course-export"
OUT = Path(__file__).parent / "interactives" / "_course-source.md"

# Live sections only. The "[Insert Title of Module and Date]" weeks are the
# empty UDC template shell and are skipped.
SECTIONS = [
    ("Start Here", "itm00015"),
    ("Week 1", "itm00016"),
    ("Week 2", "itm00017"),
    ("Week 3", "itm00018"),
    ("Week 4", "itm00019"),
    ("Week 5", "itm00020"),
    ("Week 6", "itm00021"),
    ("Week 7", "itm00022"),
    ("Week 8", "itm00023"),
    ("Discussions and graded items", "itm00208"),
    ("Assignments folder", "itm00024"),
    ("Refresher", "itm00027"),
]

BLOCK = re.compile(r"</(p|div|li|h[1-6]|tr|table|ul|ol|blockquote)>", re.I)
LI = re.compile(r"<li[^>]*>", re.I)
BR = re.compile(r"<br\s*/?>", re.I)
TAG = re.compile(r"<[^>]+>")
WS = re.compile(r"[ \t]+")
BLANKS = re.compile(r"\n{3,}")


def to_text(raw):
    """Unescape an Ultra body and flatten it to readable text with links kept."""
    s = html.unescape(html.unescape(raw or ""))
    s = re.sub(r"<(script|style)[^>]*>.*?</\1>", "", s, flags=re.I | re.S)
    # Keep hrefs that point somewhere real, drop Blackboard's internal stubs.
    def keep_link(m):
        href = m.group(1)
        if href.startswith("http") and "EmbeddedFile" not in href:
            return f" [link: {href}] "
        return " "
    s = re.sub(r'<a\b[^>]*href="([^"]*)"[^>]*>', keep_link, s, flags=re.I)
    s = re.sub(r'<iframe\b[^>]*src="([^"]*)"[^>]*>', r" [embed: \1] ", s, flags=re.I)
    s = LI.sub("\n- ", s)
    s = BR.sub("\n", s)
    s = BLOCK.sub("\n", s)
    s = TAG.sub(" ", s)
    s = html.unescape(s)
    s = s.replace("\u00a0", " ").replace("\u200b", "")
    s = WS.sub(" ", s)
    s = "\n".join(line.strip() for line in s.split("\n"))
    return BLANKS.sub("\n\n", s).strip()


def read_res(res_id):
    """Return (title, body_text) for a resource, or None when it has no text."""
    path = EXPORT / f"{res_id}.dat"
    if not path.exists():
        return None
    try:
        root = ET.parse(path).getroot()
    except ET.ParseError:
        return None
    title = ""
    node = root.find("./TITLE")
    if node is not None:
        title = node.get("value") or ""
    chunks = []
    for tag in ("./BODY/TEXT", "./DESCRIPTION/TEXT", "./INSTRUCTIONS/TEXT",
                "./ASSESSMENT/DESCRIPTION/TEXT", "./MESSAGETEXT/TEXT"):
        for el in root.findall(tag):
            text = to_text(el.text)
            if text:
                chunks.append(text)
    for el in root.iter():
        if el.tag in ("DESCRIPTION", "INSTRUCTIONS") and el.get("value"):
            text = to_text(el.get("value"))
            if text:
                chunks.append(text)
    seen, body = set(), []
    for c in chunks:
        if c not in seen:
            seen.add(c)
            body.append(c)
    return title, "\n\n".join(body)


def main():
    manifest = ET.parse(EXPORT / "imsmanifest.xml").getroot()
    ns = {"ims": manifest.tag.split("}")[0].strip("{")} if "}" in manifest.tag else {}

    def findall(el, tag):
        return el.findall(f"ims:{tag}", ns) if ns else el.findall(tag)

    items = {}
    titles = {}
    for org in manifest.iter():
        if org.tag.split("}")[-1] != "item":
            continue
        iid = org.get("identifier")
        items[iid] = org
        t = None
        for child in org:
            if child.tag.split("}")[-1] == "title":
                t = (child.text or "").strip()
                break
        titles[iid] = t or ""

    out = ["# NURS 497 Nursing Capstone - course source",
           "",
           "Extracted from ExportFile_NURS497-QM-MASTER_v827_20260930023611.zip.",
           "Live dated weeks only. The `[Insert Title of Module and Date]` weeks are an",
           "empty template shell and were skipped.",
           ""]

    def walk(iid, depth):
        el = items.get(iid)
        if el is None:
            return
        res_id = el.get("identifierref")
        title = titles.get(iid, "")
        got = read_res(res_id) if res_id else None
        heading = title
        if got and got[0] and got[0] != "ultraDocumentBody" and not heading:
            heading = got[0]
        if heading and heading not in ("--TOP--", "ROOT"):
            out.append(f"{'#' * min(depth, 6)} {heading}")
            out.append(f"`{res_id}`")
            out.append("")
        if got and got[1]:
            out.append(got[1])
            out.append("")
        for child in el:
            if child.tag.split("}")[-1] == "item":
                walk(child.get("identifier"), depth + 1)

    for label, iid in SECTIONS:
        out.append(f"## {label}: {titles.get(iid, '')}".rstrip(": "))
        out.append("")
        el = items.get(iid)
        res_id = el.get("identifierref") if el is not None else None
        got = read_res(res_id) if res_id else None
        if got and got[1]:
            out.append(got[1])
            out.append("")
        if el is not None:
            for child in el:
                if child.tag.split("}")[-1] == "item":
                    walk(child.get("identifier"), 3)
        out.append("")

    OUT.parent.mkdir(parents=True, exist_ok=True)
    text = BLANKS.sub("\n\n", "\n".join(out))
    OUT.write_text(text, encoding="utf-8")
    print(f"wrote {OUT} ({len(text)} chars)")


if __name__ == "__main__":
    sys.exit(main())
