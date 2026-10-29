/*META
{
  "pageTitle": "Does the Technology Decide Anything?",
  "title": "Does the Technology Decide Anything?",
  "lede": "Sort the tools in a mentor's practice by whether they change a clinical decision, then test a study and a chart the way the tech audit will.",
  "pills": ["MLO 2.1-2.3"],
  "setup": "Module 2 asks you to evaluate one healthcare technology in your mentor's practice and to audit whether the unit's record or decision-support tools help with the problem you named in Module 1. A tool can be busy and still not guide a decision.",
  "foot": "This is ungraded practice.",
  "noscript": "This activity asks you to sort healthcare technologies into those that guide a clinical decision and those that only store a record, judge whether a study is recent and applicable enough to use, choose how an EHR either hides or supports that decision, and draft one sentence for the Module 2 discussion."
}
META*/

window.__NS_JS__ = {
  key: "__NS__",
  steps: [
    {
      type: "sort",
      title: "What does the tool do to the decision?",
      help: "Tap a tool, then tap the column it belongs in. Tap a placed tool to take it back.",
      hint: "AHRQ's digital healthcare work treats EHRs, clinical decision support, and telehealth as tools that can change quality and safety. A stored note is not the same thing as a prompt that changes the next action.",
      retryHint: "Ask what the nurse does differently because the tool spoke. If the answer is nothing, it is a record.",
      poolLabel: "Tools in a mentor's practice",
      bins: [
        { id: "decide", label: "Guides the decision", sub: "The next action changes" },
        { id: "record", label: "Stores the record", sub: "The work is saved, not steered" }
      ],
      items: [
        { id: "a", text: "A sepsis alert that fires before the antibiotic window closes and names the order to consider", bin: "decide" },
        { id: "b", text: "A barcode scan that stops the wrong medication at the bedside", bin: "decide" },
        { id: "c", text: "A telehealth visit where the mentor sees the wound and changes the dressing plan", bin: "decide" },
        { id: "d", text: "A free-text note that saves the story and never prompts the next action", bin: "record" },
        { id: "e", text: "A scanned consent that sits in the chart and does not change the order", bin: "record" },
        { id: "f", text: "A flowsheet that records vital signs and does not flag a dangerous trend", bin: "record" }
      ],
      missHint: "Telehealth belongs with the decision when the visit changes the plan. A flowsheet that only stores numbers does not.",
      explain: "Digital Healthcare Research describes EHRs, clinical decision support, and telehealth as ways technology changes care. The audit in the Module 2 assignment asks the same question of your unit: does the tool contribute to the problem, or can it be used for the solution? A record that never changes the next action cannot be the technology you claim is guiding practice."
    },
    {
      type: "choice",
      title: "Which study can inform the decision?",
      help: "Your unit issue is late antibiotics for sepsis. Four papers are on the table. Choose the one that can go in the annotated bibliography.",
      hint: "The assignment asks for peer-reviewed research from the last 5 years, and for methodology, findings, and whether the study applies to your unit.",
      retryHint: "Recent is not enough. The patients and the decision have to resemble yours.",
      options: [
        {
          text: "A 2024 peer-reviewed study of emergency nurses, testing an alert that cut the time to the first antibiotic.",
          ok: true,
          fb: "It is inside the five-year window, the method is a test of an alert, and the decision is the one your unit is missing. That is applicability, not just a topic match."
        },
        {
          text: "A 2016 review of sepsis bundles. The findings are famous, and the methods are solid.",
          ok: false,
          fb: "The findings may still matter, but the assignment limits the bibliography to the last 5 years. A 2016 review does not meet that bar."
        },
        {
          text: "A 2025 peer-reviewed study of antibiotic timing in veterinary surgery.",
          ok: false,
          fb: "It is recent and peer-reviewed. The patients and the decision are not yours, so it cannot inform this unit's practice."
        },
        {
          text: "A 2023 hospital blog post describing one unit's poster campaign.",
          ok: false,
          fb: "A blog post is not peer-reviewed research. The bibliography has to be able to show methodology and findings."
        }
      ],
      explain: "Evidence-based practice, in the professional-development reading and in Black chapters 8 through 11, is the use of research to guide a real decision. The bibliography is where you show that move: method, findings, and whether the study applies here."
    },
    {
      type: "choice",
      title: "Audit the record you actually have",
      help: "The unit already has an EHR. Choose the audit sentence that tells the truth about it.",
      hint: "The assignment asks whether current EHR or decision-support tools contribute to the problem or can be used for the solution.",
      retryHint: "Owning an EHR is not the same as the EHR guiding the late antibiotic.",
      options: [
        {
          text: "The alert exists, but it fires after the note is signed, so the record documents the delay and does not prevent it. Move the alert to before the order.",
          ok: true,
          fb: "That sentence does the audit. It says how the tool contributes to the problem and how it could be used for the solution."
        },
        {
          text: "The unit has an EHR, so technology is already supporting evidence-based practice.",
          ok: false,
          fb: "Having the system is not an evaluation. The discussion asks how the tool facilitates the mentor's decision, and this sentence never reaches a decision."
        },
        {
          text: "Nurses should be more careful and check the policy manual.",
          ok: false,
          fb: "That advice leaves the technology out. Module 2 is about how the tool shapes the decision, not about trying harder."
        },
        {
          text: "Replace the EHR this month with a newer vendor.",
          ok: false,
          fb: "A new vendor is not an audit of the tool you have. The assignment asks you to analyze the current system."
        }
      ],
      explain: "The technology audit is one page on the system your mentor actually uses. Name whether it contributes to the unit problem or can be turned toward the solution. That is the evaluation the discussion asks for."
    },
    {
      type: "write",
      title: "Draft the evaluation",
      label: "Two or three sentences for Module 2 Discussion: one technology in your mentor's practice, and how it changes or fails to change a clinical decision",
      placeholder: "The tool my mentor uses is... It facilitates the decision when... It does not, when...",
      tie: "Module 2 Discussion (MLO 2.2) asks for this evaluation. The Authentic Assignment also wants the bibliography and the one-page audit. This is practice, not the submission.",
      saved: "Saved on this device.",
      doneTitle: "Practice complete",
      doneMeta: "You can tell a tool that guides a decision from one that only stores the record, and you can say so about your mentor's practice."
    }
  ]
};
