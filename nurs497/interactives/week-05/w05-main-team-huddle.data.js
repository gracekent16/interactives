/*META
{
  "pageTitle": "The Huddle Pushes Back",
  "title": "The Huddle Pushes Back",
  "lede": "Answer three people who do not share the same stake in your new workflow, using the teamwork tools this module assigns.",
  "pills": ["MLO 5.1-5.3"],
  "setup": "Module 5 is where the workflow meets the team. A service-learning activity only works if the other disciplines adopt it. TeamSTEPPS gives you leadership, situation monitoring, mutual support, and tools such as SBAR, a huddle, and CUS.",
  "cast": [
    { "initials": "AG", "name": "Alicia Grant", "role": "Charge nurse" },
    { "initials": "LO", "name": "Luis Ortega", "role": "Physician" },
    { "initials": "PS", "name": "Priya Shah", "role": "Patient care technician" }
  ],
  "foot": "This is ungraded practice.",
  "noscript": "This activity asks you to answer a charge nurse, a physician, and a patient care technician about a new workflow, choose SBAR, a huddle, or CUS for the conflict in front of you, and draft the conflict plus one strategy for the Module 5 discussion."
}
META*/

window.__NS_JS__ = {
  key: "__NS__",
  steps: [
    {
      type: "choice",
      who: { initials: "AG", name: "Alicia Grant", role: "Charge nurse", line: "I have four admissions and no time for a new antibiotic workflow. What do you need from me, in a form I can use on this shift?", tone: "teal" },
      title: "Answer the charge nurse",
      help: "Choose the response that gives her a tool, not a speech.",
      hint: "SBAR is the brief she can hear during a shift: situation, background, assessment, recommendation.",
      retryHint: "She asked for something she can use on this shift. A history of the whole project is not that.",
      options: [
        {
          text: "Situation: antibiotics are late. Background: the order waits on the note. Assessment: patients miss the hour. Recommendation: a two-minute huddle at the start of the shift to name who grabs the first dose.",
          ok: true,
          fb: "That is SBAR. She can act on the recommendation without sitting through the project."
        },
        {
          text: "I will email the full literature review and we can discuss it next month.",
          ok: false,
          fb: "The review matters in the paper. It is not how a charge nurse adopts a workflow on a busy shift."
        },
        {
          text: "Everyone just needs to communicate better.",
          ok: false,
          fb: "That names no tool. TeamSTEPPS is specific: a structure for the message, not a wish that people talk."
        },
        {
          text: "This is a physician problem. Nursing has done its part.",
          ok: false,
          fb: "The assignment is interdisciplinary. Handing the work to one role is how the workflow stalls."
        }
      ],
      explain: "MLO 5.2 is communication inside the team. SBAR is one of the tools the assignment names for training staff and clearing a barrier. The charge nurse's stake is the shift in front of her."
    },
    {
      type: "choice",
      who: { initials: "LO", name: "Luis Ortega", role: "Physician", line: "I already write the antibiotic order. I do not see why nursing is changing the sequence.", tone: "pink" },
      title: "Answer the physician",
      help: "Choose the move that treats his objection as a team conflict, not as defiance.",
      hint: "A huddle puts the people who share the outcome in one short conversation. CUS is for when safety is being brushed aside.",
      retryHint: "He has a stake in the order. Cutting him out is not collaboration.",
      options: [
        {
          text: "Call a five-minute huddle with him and the charge nurse. Show the one step that happens after his order and ask what he needs to see.",
          ok: true,
          fb: "A huddle is the TeamSTEPPS move for a shared plan. You are not asking him to surrender the order. You are showing the step his order depends on."
        },
        {
          text: "Tell him the sequence is already decided and attendance is mandatory.",
          ok: false,
          fb: "Authority without a conversation is how interdisciplinary work becomes a memo nobody follows."
        },
        {
          text: "Drop the workflow so the relationship stays comfortable.",
          ok: false,
          fb: "Avoiding the conflict saves the moment and loses the patient outcome. Conflict management is part of MLO 5.3."
        },
        {
          text: "Argue the point in the chart by writing a long note he may not read.",
          ok: false,
          fb: "A note is not a team conversation. The module's tools are for talking with the people who share the work."
        }
      ],
      explain: "Collaboration in this module means the other discipline can see their part of the work. The service-learning write-up has to record the breakdown you observed and the strategy you used, not only that a meeting occurred."
    },
    {
      type: "choice",
      who: { initials: "PS", name: "Priya Shah", role: "Patient care technician", line: "I have been telling people the call light is on for twenty minutes and nobody stops. I am not saying it again.", tone: "amber" },
      title: "Answer the technician",
      help: "The safety concern is being dropped. Choose the line that makes it sayable.",
      hint: "CUS gives a script when someone is concerned, uncomfortable, and the issue is safety. TeamSTEPPS calls this mutual support.",
      retryHint: "She has already tried a plain request. The next move has to make the safety issue harder to pass by.",
      options: [
        {
          text: "Use CUS with her: I am concerned, I am uncomfortable, this is a safety issue, and name who will answer the light.",
          ok: true,
          fb: "CUS is the script for a safety concern that is being dismissed. It also names the next action, which is what mutual support looks like."
        },
        {
          text: "Tell her call lights are not her job and to stay in her lane.",
          ok: false,
          fb: "That shuts down the person who saw the risk. Mutual support is one of the TeamSTEPPS skills this module assigns."
        },
        {
          text: "Promise to mention it at the annual retreat.",
          ok: false,
          fb: "A retreat is too late for a light that is on now. The tool has to work on the shift."
        },
        {
          text: "Ask her to write an incident report and not raise it in the huddle.",
          ok: false,
          fb: "A report can matter later. Telling her to stay quiet removes the concern from the team that can act."
        }
      ],
      explain: "The assignment lists CUS, written there as CUSS, among the tools for communication barriers. In TeamSTEPPS the script is CUS: concerned, uncomfortable, safety. Use it when a concern is being passed over, and write down what the team did next."
    },
    {
      type: "write",
      title: "Name the conflict and the strategy",
      label: "Two or three sentences for Module 5 Discussion: the team conflict, and one change-leadership or conflict-management strategy a nurse could use",
      placeholder: "The conflict was... The strategy I would use is... because...",
      tie: "Module 5 Discussion (MLO 5.3) asks for the conflict and one strategy. The service-learning assignment asks you to document the activity, the breakdown, and what the team adopted. This is practice, not that paper.",
      saved: "Saved on this device.",
      doneTitle: "Practice complete",
      doneMeta: "You can match a teamwork tool to the person in front of you instead of asking the whole team to communicate better."
    }
  ]
};
