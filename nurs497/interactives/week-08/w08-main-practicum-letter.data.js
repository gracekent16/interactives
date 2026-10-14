/*META
{
  "pageTitle": "What the Practicum Taught You",
  "title": "What the Practicum Taught You",
  "lede": "Match what you did this term to the KSVME cornerstone it shows, then notice which course outcome still has no evidence behind it.",
  "pills": ["CSLO A-F"],
  "setup": "The letter to your preceptor and the final journal are the close of the practicum. Both are stronger when a moment from the hours is tied to a cornerstone and to a course outcome. A list of tasks does not do that work.",
  "noscript": "This activity asks you to match practicum moments to Webber's KSVME cornerstones, identify the course outcome those moments leave without evidence, and draft a paragraph of the letter to your preceptor."
}
META*/

window.__NS_JS__ = {
  key: "__NS__",
  steps: [
    {
      type: "match",
      title: "Which cornerstone does this moment show?",
      help: "Tap a moment on the left, then tap the cornerstone on the right.",
      hint: "Knowledge is what you studied. Skills are what you can now do. Values are what you refused to trade away. Meanings are what the work changed about how you see yourself. Experience is the hours with your preceptor.",
      retryHint: "The journal entry about who you are becoming is not the same cornerstone as the hours themselves.",
      leftLabel: "A moment from the practicum",
      rightLabel: "KSVME cornerstone",
      left: [
        { id: "k", text: "You reread the fall protocol and your annotated articles before you proposed the change." },
        { id: "s", text: "You led the bedside huddle and did the teach-back with the patient, not beside them." },
        { id: "v", text: "You would not skip the interpreter to save ten minutes, because speed was not the value you were willing to trade." },
        { id: "m", text: "You wrote that the hours changed how you see yourself: a nurse who improves a process, not only a nurse who finishes a shift." },
        { id: "e", text: "Six weeks on the unit with your preceptor, including the weekly conferences about your goals." }
      ],
      right: [
        { id: "rk", for: "k", text: "Knowledge: the evidence and the protocol you brought to the decision" },
        { id: "rs", for: "s", text: "Skills: a practice you can now carry, not only describe" },
        { id: "rv", for: "v", text: "Values: a principle you held when it cost you time" },
        { id: "rm", for: "m", text: "Meanings: what the work changed about your professional identity" },
        { id: "re", for: "e", text: "Experience: the precepted time in which the other four were practiced" }
      ],
      explain: "Webber's framework, the one this course uses for the capstone, treats knowledge, skills, values, meanings, and experience as five cornerstones rather than five words for the same reflection. Assignment #2 asked you to show how they apply in the project. The final journal is where you show them in the hours. Experience is not a synonym for all of it. It is the precepted time. The other four are what you can point to inside that time."
    },
    {
      type: "choice",
      title: "Which outcome still has no evidence?",
      help: "The moments you just sorted support some course outcomes and miss one. Choose the gap.",
      hint: "Walk the outcomes. Mentor relationship, organizational influences, KSVME, evidence, the project, the portfolio. Which of those never appeared?",
      retryHint: "The conferences with your preceptor already cover the mentor relationship. Look for the outcome that is a product, not a relationship.",
      options: [
        {
          text: "Outcome F, the professional portfolio. Nothing in these moments is the cover letter, the goals, the resume, or the organizations section.",
          ok: true,
          fb: "The hours can evidence A through E and still leave F empty, because the portfolio is a product you build, not a shift you work. The letter should not pretend the hours were the portfolio."
        },
        {
          text: "Outcome A, the mentor relationship. The hours do not count unless you write the preceptor's name in the letter.",
          ok: false,
          fb: "The weekly conferences and the six weeks with your preceptor are the mentor relationship. That outcome has evidence. It does not need the letter to exist, though the letter is how you thank them for it."
        },
        {
          text: "Outcome D, evidence-based practice. Reading the articles was homework, so it cannot count.",
          ok: false,
          fb: "You used the articles to propose a change in practice. That is outcome D with evidence behind it, which is different from reading that never touches the unit."
        },
        {
          text: "Outcome E, the project. A huddle is too small to count as a project.",
          ok: false,
          fb: "Leading the teach-back huddle is a piece of the project in practice. Outcome E has something behind it. The gap is the portfolio, which none of these moments produced."
        }
      ],
      explain: "A through E can be shown from the practicum: the preceptor relationship, a value you defended in the organization of care, the cornerstones, the articles you used, and the project you tested. F is the portfolio for career planning. If that file is thin, the practicum did not fail. The portfolio is a separate product, and the closing week is when you can still tell those two pieces apart."
    },
    {
      type: "write",
      title: "A paragraph of the letter",
      label: "A paragraph to your preceptor: one moment, the cornerstone it shows, and what you can do now that you could not do in week one",
      placeholder: "Thank you for the weeks on the unit. When I led the teach-back, that was a skill I did not have in week one, because...",
      tie: "The letter of appreciation to your preceptor and the final journal are both due at the close of the practicum. This paragraph is a start, not the letter.",
      saved: "Saved on this device.",
      doneTitle: "Practice complete",
      doneMeta: "You can point a practicum moment at a cornerstone and see which course outcome still needs evidence."
    }
  ]
};
