/*META
{
  "pageTitle": "The Vocabulary of Clinical Judgment",
  "title": "The Vocabulary of Clinical Judgment",
  "lede": "Fill the grid from Chapter 11, then use the same words to tell a novice decision from an expert one.",
  "pills": ["CSLO C, D"],
  "setup": "Chapter 11 is the week's anchor on nursing judgment, and the midterm draws on the same contrast between novice thinking and expert thinking. The words have to be available without a list in front of you.",
  "noscript": "This check asks you to complete a crossword of Chapter 11 terms, choose the action that fits expert thinking rather than novice thinking, and write one sentence on how your own judgment has moved.",
  "basedOn": {
    "title": "Black (2024), Chapter 11, Developing Nursing Judgment Through Critical Thinking",
    "note": "Novice and expert thinking, the nursing process, and clinical judgment"
  }
}
META*/

window.__NS_JS__ = {
  key: "__NS__",
  steps: [
    {
      type: "crossword",
      rows: 9,
      cols: 10,
      title: "The words the chapter keeps using",
      help: "Read a clue, then type the answer. Use Reveal a letter if a word stalls.",
      hint: "Start with 1 across. It is five letters and sits in the top row.",
      words: [
        {
          n: 1, r: 0, c: 0, dir: "across", answer: "NANDA",
          clue: "Association that develops the standardized language for nursing diagnoses."
        },
        {
          n: 2, r: 0, c: 2, dir: "down", answer: "NOVICE",
          clue: "Nurse who focuses on doing the procedure correctly, one step at a time."
        },
        {
          n: 3, r: 5, c: 2, dir: "across", answer: "EXPERT",
          clue: "Nurse who grasps what matters in the situation without walking back through the rules."
        },
        {
          n: 4, r: 5, c: 4, dir: "down", answer: "PLAN",
          clue: "Phase of the nursing process in which you set goals with the patient."
        },
        {
          n: 5, r: 7, c: 2, dir: "across", answer: "EVALUATE",
          clue: "Phase that asks whether the goal was met, partly met, or unmet."
        }
      ],
      explain: "Chapter 11 hangs on these. NANDA is the shared language for the diagnosis you identify after assessment. Novice thinking stays on the steps of the procedure. Expert thinking sees the situation. Plan is where the goal is set, in the patient's words as well as yours, with an action and terms for met or unmet. Evaluate is where you look at the patient's progress against that goal and decide what to do next. The process then moves again. It is not a form you finish once."
    },
    {
      type: "choice",
      title: "Which decision is expert thinking?",
      help: "A patient's blood pressure is dropping after a new medication. Four nurses respond. Choose the response that matches expert thinking in this chapter.",
      hint: "Novice thinking stays on the procedure. Expert thinking sees what matters and knows the limit of its own expertise.",
      retryHint: "Speed is not the same as judgment. Look for the nurse who sees the situation and the edge of their own skill.",
      options: [
        {
          text: "She recognizes the drop as the important change, holds the next dose, and calls the provider because this is past what she should manage alone.",
          ok: true,
          fb: "That is clinical judgment as the chapter defines it: an informed decision, plus a clear view of the limit of her expertise. The nursing practice act and the unit's policy are why the call happens."
        },
        {
          text: "She rechecks the blood pressure three times, carefully, and does not look at anything else until the procedure is perfect.",
          ok: false,
          fb: "Careful technique matters, and stopping there is novice thinking. The chapter says the novice focuses on performing the procedure correctly, one step at a time, and misses the situation around it."
        },
        {
          text: "She gives the next dose on time because the order has not changed and the medication record is the rule.",
          ok: false,
          fb: "Following the record with no eye on the patient is the rule without judgment. Dependent actions still require you to see when the situation has changed."
        },
        {
          text: "She changes the dose herself so the patient does not have to wait for a provider.",
          ok: false,
          fb: "Seeing the problem is not a license to practice past your authority. The chapter treats knowing the limit of your expertise as part of the judgment, not as hesitation."
        }
      ],
      explain: "Clinical judgment, in this chapter, is an informed opinion based on knowledge and experience, and it includes knowing when you are at the edge of that expertise. Independent actions are yours to take. Dependent actions need an order. Interdependent actions you share with the team. The expert nurse in this item does all three correctly: she sees the change, she holds what she can hold, and she brings in the provider for the rest."
    },
    {
      type: "write",
      title: "One sentence for the mid-term journal",
      label: "Where your thinking has moved since you started the practicum, using novice and expert as the two ends",
      placeholder: "I still check the steps on a new drug, and I now notice the blood pressure before I notice the medication record.",
      tie: "The mid-term journal asks for movement on Benner's stages and for how you are using evidence in practice. This sentence is practice for that reflection.",
      saved: "Saved on this device.",
      doneTitle: "Check complete",
      doneMeta: "You can use the chapter's words to tell a procedure-bound decision from a judgment."
    }
  ]
};
