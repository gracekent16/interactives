#!/usr/bin/env python3
"""Append the graded deliverable prompts to _course-source.md.

Discussion prompts live in FORUM resources and assignment instructions live in
questestinterop assessments. Neither is reachable from the manifest item tree,
so they get pulled separately and appended once.
"""
import html
import re
from pathlib import Path

EXPORT = Path(__file__).parent / "course-export"
OUT = Path(__file__).parent / "interactives" / "_course-source.md"

FORUMS = ["res00039", "res00041", "res00040", "res00042", "res00044", "res00043"]
ASSIGNMENTS = ["res00032", "res00027", "res00028", "res00024", "res00025",
               "res00030", "res00020", "res00026", "res00023", "res00029"]


def flatten(raw):
    s = html.unescape(html.unescape(raw or ""))
    s = re.sub(r"<[^>]+>", " ", s)
    s = html.unescape(s).replace("\u00a0", " ")
    return re.sub(r"\s+", " ", s).strip()


def bodies(res_id, limit=1):
    """First `limit` substantial TEXT blocks, deduped, in document order."""
    path = EXPORT / f"{res_id}.dat"
    if not path.exists():
        return []
    d = path.read_text(encoding="utf-8", errors="replace")
    seen, out = set(), []
    blocks = r"<TEXT>(.*?)</TEXT>|<mat_formattedtext[^>]*>(.*?)</mat_formattedtext>"
    for m in re.finditer(blocks, d, re.S):
        x = flatten(m.group(1) or m.group(2))
        if len(x) > 60 and x not in seen:
            seen.add(x)
            out.append(x)
            if len(out) >= limit:
                break
    return out


def title_of(res_id, pattern):
    d = (EXPORT / f"{res_id}.dat").read_text(encoding="utf-8", errors="replace")
    m = re.search(pattern, d)
    return html.unescape(m.group(1)) if m else res_id


lines = ["", "## Graded deliverables, full prompts", "",
         "Discussion prompts and assignment instructions as written in the course.",
         "Point values appear here for design reference only and never on a student page.",
         ""]

CONTENT_TITLE = r'<TITLE value="([^"]*)"'
ASMT_TITLE = r'<assessment title="([^"]*)"'

for heading, group, pattern in [
    ("### Discussion prompts", FORUMS, CONTENT_TITLE),
    ("### Assignment instructions", ASSIGNMENTS, ASMT_TITLE),
]:
    lines.append(heading)
    lines.append("")
    for r in group:
        lines.append("#### " + title_of(r, pattern))
        lines.append("`" + r + "`")
        lines.append("")
        lines.extend(b + "\n" for b in bodies(r, limit=2))

text = OUT.read_text(encoding="utf-8").rstrip() + "\n" + "\n".join(lines) + "\n"
OUT.write_text(re.sub(r"\n{3,}", "\n\n", text), encoding="utf-8")
print(f"appended graded prompts to {OUT}")
