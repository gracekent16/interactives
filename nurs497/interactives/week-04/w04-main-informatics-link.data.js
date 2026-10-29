/*META
{
  "pageTitle": "What the Tool Is For",
  "title": "What the Tool Is For",
  "lede": "Match each informatics or telehealth tool to the outcome it can actually change, then place the alert where it can still prevent the error.",
  "pills": ["MLO 4.1-4.3"],
  "setup": "Module 4 asks you to show how nursing research, clinical decision support, and telehealth change a patient outcome. The assignment turns your Module 3 intervention into a workflow: where the data moves, where the alert fires, and how you will know the outcome moved.",
  "foot": "This is ungraded practice.",
  "noscript": "This activity asks you to match informatics and telehealth tools to the outcomes they change, choose when a decision-support alert has to fire, and draft one operational improvement for the Module 4 discussion."
}
META*/

window.__NS_JS__ = {
  key: "__NS__",
  steps: [
    {
      type: "match",
      title: "Match the tool to the outcome",
      help: "Tap a tool, then tap what it changes. Tap a paired card to release it.",
      hint: "Informatics brings nursing, computer science, and information science together to manage data. Telehealth is care when the patient and the nurse are not in the same room. Research is the reason a tool should exist.",
      retryHint: "A tool earns its place by the outcome it changes, not by how new it is.",
      leftLabel: "Tool",
      rightLabel: "What it changes",
      left: [
        { id: "cds", text: "A decision-support alert for nurse-to-patient assignment" },
        { id: "tele", text: "A scheduled video visit for a patient who cannot travel" },
        { id: "study", text: "A research finding that says early assignment review cuts missed care" },
        { id: "temp", text: "A documentation template that makes the new safety step the easy step to chart" }
      ],
      right: [
        { id: "r1", for: "cds", text: "Stops an unsafe assignment before the shift starts" },
        { id: "r2", for: "tele", text: "Reaches a patient who would otherwise miss the follow-up" },
        { id: "r3", for: "study", text: "Gives the reason to build the alert instead of hoping staff remember" },
        { id: "r4", for: "temp", text: "Collects the data you will use to see whether the outcome moved" }
      ],
      explain: "MLO 4.1 is the research foundation. MLO 4.2 is the decision-support system that uses it. MLO 4.3 is telehealth and informatics aimed at an outcome. The workflow map in the assignment is these links drawn in order: data in, alert at the decision, template capturing the result."
    },
    {
      type: "choice",
      title: "When does the alert still help?",
      help: "Your Module 3 aim is an antibiotic within one hour. The EHR can fire an alert at three moments. Choose the moment that can still prevent the miss.",
      hint: "Decision support has to arrive before the decision is over. An alert after the harm is a report.",
      retryHint: "Ask whether the nurse can still change the order when the alert appears.",
      options: [
        {
          text: "When the order is signed, before the hour has passed, with the recommended antibiotic named.",
          ok: true,
          fb: "The decision is still open. The alert supports it instead of describing a miss that already happened."
        },
        {
          text: "The next morning, in a report of every antibiotic that was late yesterday.",
          ok: false,
          fb: "That report can feed a later review. It cannot get last night's dose given on time."
        },
        {
          text: "After the nurse documents that the patient deteriorated.",
          ok: false,
          fb: "The outcome has already moved the wrong way. Support has to come earlier in the workflow."
        },
        {
          text: "Only if a manager runs a special query at the end of the month.",
          ok: false,
          fb: "A monthly query is not decision support at the moment of care. The assignment wants the alert, the order set, or the template inside the workflow."
        }
      ],
      explain: "The discussion asks how the tool supports clinical decision-making, and what one operational change would make it work better. Firing earlier is that kind of change. A late report is information without a chance to act."
    },
    {
      type: "choice",
      title: "What will you measure with the workflow?",
      help: "Choose the data the informatics workflow should collect.",
      hint: "The assignment asks how informatics will collect real-time data on the Module 3 outcome, not how many people logged in.",
      retryHint: "If the number would not tell you whether the antibiotic was on time, it is the wrong measure.",
      options: [
        {
          text: "Time from the sepsis order to the first antibiotic, pulled from the order and the administration record.",
          ok: true,
          fb: "That is the Module 3 aim, captured by the systems that already hold the order and the dose."
        },
        {
          text: "How many nurses completed the annual EHR training.",
          ok: false,
          fb: "Training completion does not tell you whether this patient's antibiotic was on time."
        },
        {
          text: "How many telehealth visits the clinic billed last year.",
          ok: false,
          fb: "Volume is not the outcome. Telehealth matters here only if it changes access or the plan of care."
        },
        {
          text: "Staff satisfaction with the color of the alert.",
          ok: false,
          fb: "Preference is not the clinical outcome the workflow was built to track."
        }
      ],
      explain: "Research gives you the reason for the tool. Informatics gives you the measurement. Without the time stamp, you cannot say the intervention worked."
    },
    {
      type: "write",
      title: "Name one improvement",
      label: "Two or three sentences for Module 4 Discussion: one tool in your mentor's setting, how it supports a decision, and one change that would make it work better",
      placeholder: "The tool is... It supports the decision by... One change is...",
      tie: "Module 4 Discussion (MLO 4.3) asks for the tool, the decision it supports, and one operational improvement. The assignment asks for the workflow map and the measure. This is practice, not that paper.",
      saved: "Saved on this device.",
      doneTitle: "Practice complete",
      doneMeta: "You can tie a tool to the outcome it changes and say where in the workflow the support has to arrive."
    }
  ]
};
