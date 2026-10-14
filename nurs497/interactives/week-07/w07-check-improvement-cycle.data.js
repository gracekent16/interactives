/*META
{
  "pageTitle": "Run the Improvement Cycle",
  "title": "Run the Improvement Cycle",
  "lede": "Put an improvement cycle in working order, then decide what a disappointing first test means.",
  "pills": ["CSLO E"],
  "setup": "Quality problems live in processes and systems, not in a single nurse who \"should have been more careful.\" The cycle is how you change a process, on a small scale, and find out whether the change worked before you spread it.",
  "noscript": "This check asks you to order an improvement cycle from naming the process through acting on the result, choose what to do when the first test disappoints, and write the process and the measure for your capstone.",
  "basedOn": {
    "title": "Stratis Health (2023), QI Basics: Introduction to Quality Improvement, Processes and Systems",
    "note": "Change the process, test it on a small scale, and study the measure before you spread it"
  }
}
META*/

window.__NS_JS__ = {
  key: "__NS__",
  steps: [
    {
      type: "order",
      layout: "chain",
      title: "Order the cycle",
      help: "Tap a step to place it. The first step comes first. Tap a placed step to take it back.",
      hint: "You cannot study a result you have not produced, and you should not spread a change you have not studied.",
      retryHint: "Naming the process comes before planning the change. Acting on the result comes last, and then the cycle runs again.",
      poolLabel: "Steps in one improvement cycle",
      items: [
        { id: "name", text: "Name the process: the series of steps, not the person you wish had tried harder" },
        { id: "plan", text: "Plan one small change to that process, and the measure you will watch" },
        { id: "do", text: "Do the change on a small scale" },
        { id: "study", text: "Study the measure against what you expected" },
        { id: "act", text: "Act: adopt the change, adapt it, or abandon it, then run the cycle again" }
      ],
      answer: ["name", "plan", "do", "study", "act"],
      missHint: "Spreading the change is not a step in this list. You only earn that after the measure says the small test worked.",
      explain: "A process is a series of steps. A system is the set of processes that touch each other, so a change in one step moves the others. Reminding one nurse to be more careful leaves the process untouched, and the same failure returns on the next shift. The cycle tests one change on a small scale, compares the measure with what you predicted, and only then adopts, adapts, or abandons it. Your capstone's implementation and measurement sections are this cycle, written out."
    },
    {
      type: "choice",
      title: "The first test disappointed you. Now what?",
      help: "Return visits went up, not down, after a one-week test on one shift. Choose the next move.",
      hint: "Study is a step, not a verdict on the staff. Read the result before you spread anything.",
      retryHint: "Abandoning the measure to protect the change skips the only step that tells you the truth.",
      options: [
        {
          text: "Study the result against what you predicted, then adapt the change or abandon it. Do not spread it.",
          ok: true,
          fb: "A disappointing test is information. The cycle's next move is to act on that information, which includes dropping a change that made things worse."
        },
        {
          text: "Conclude the nurses on that shift did not care, and retrain them before you look at the process.",
          ok: false,
          fb: "That puts the failure in a person. The video's point is that the failure is in the process. Retraining without studying the steps repeats the week you just had."
        },
        {
          text: "Spread the change to every unit. The plan was already written, and one bad week is noise.",
          ok: false,
          fb: "Spreading a change that increased return visits multiplies the harm. The small test existed so you would not do that."
        },
        {
          text: "Drop the measure and keep the change, so the project still has an intervention to present.",
          ok: false,
          fb: "The measure is how you know whether to keep the change. Presenting an intervention you stopped measuring hides the result from you and from the people who will grade the project."
        }
      ],
      explain: "Act has three honest options: adopt, adapt, or abandon. A capstone that can only adopt has skipped Study. The final project wants the rationale and the measurement together, so a reader can see what would have made you change course."
    },
    {
      type: "write",
      title: "Name your process and your measure",
      label: "One sentence for the capstone: the process you will change, the small test, and the measure",
      placeholder: "The process is discharge teaching for new anticoagulants. On one shift for one week I will... I will watch...",
      tie: "The Final Quality Improvement Capstone Project asks for the implementation plan and the methods used to measure outcomes. This sentence is the cycle in miniature, not the project.",
      saved: "Saved on this device.",
      doneTitle: "Check complete",
      doneMeta: "You can put a process change in test order and say what a bad result should make you do."
    }
  ]
};
