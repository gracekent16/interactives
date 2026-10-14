/*META
{
  "pageTitle": "Which Dimension Just Failed",
  "title": "Which Dimension Just Failed",
  "lede": "Six things went wrong on one unit this week. Name which dimension of quality each one broke.",
  "pills": ["CSLO E"],
  "setup": "Outcome E asks you to create a project that solves a clinical problem. You cannot aim a project until you can say which kind of quality failed. These six dimensions are the vocabulary for that aim.",
  "noscript": "This check asks you to route six unit failures to the quality dimension each one breaks, choose which failure to move first when safety and timing are both involved, and name the dimension your own project is trying to change.",
  "basedOn": {
    "title": "The Six Dimensions of Healthcare Quality",
    "note": "Safe, timely, effective, efficient, equitable, and patient-centered care"
  }
}
META*/

window.__NS_JS__ = {
  key: "__NS__",
  steps: [
    {
      type: "sort",
      title: "Route each failure",
      help: "Tap a case, then tap the dimension it belongs to. Tap a placed case to take it back.",
      hint: "Ask what kind of promise broke. Right care, wrong moment, wrong person left out, and wasted work are different failures.",
      retryHint: "Two of these look like effort problems. Read them again for harm, delay, waste, or who was left out.",
      poolLabel: "What happened on the unit",
      bins: [
        { id: "safe", label: "Safe", sub: "Avoids harm" },
        { id: "time", label: "Timely", sub: "Reduces harmful delay" },
        { id: "eff", label: "Effective", sub: "The care that works, for this problem" },
        { id: "efi", label: "Efficient", sub: "Does not waste time, supplies, or effort" },
        { id: "eq", label: "Equitable", sub: "Quality does not vary by who the patient is" },
        { id: "pc", label: "Patient-centered", sub: "Guided by the patient's own goals" }
      ],
      items: [
        { id: "c1", text: "The bed alarm was off. The patient got up alone and fell.", bin: "safe" },
        { id: "c2", text: "The antibiotic was the right drug. It was given four hours after it was ordered.", bin: "time" },
        { id: "c3", text: "The antibiotic was given on time. It was the wrong drug for the organism.", bin: "eff" },
        { id: "c4", text: "Two nurses documented the same assessment in two different systems.", bin: "efi" },
        { id: "c5", text: "The consent and the discharge sheet were offered only in English. The patient reads Spanish.", bin: "eq" },
        { id: "c6", text: "The plan was explained clearly. No one asked what the patient wanted to be able to do at home.", bin: "pc" }
      ],
      missHint: "The English-only consent is not a timing problem. Ask who received a lower quality of the same care.",
      explain: "The six dimensions give a project its target. Safe means free from preventable harm. Timely means the right care without a harmful wait. Effective means the care matches the problem. Efficient means the work is not duplicated or wasted. Equitable means quality does not drop because of language, race, income, or neighborhood. Patient-centered means the plan follows the person's own goals, not only the unit's routine. A capstone that says \"improve care\" has not chosen one of these yet."
    },
    {
      type: "choice",
      title: "Two dimensions failed at once. Which one do you move first?",
      help: "A patient who does not read English received the right fall precautions, on paper, two hours late, and then fell. Choose the dimension you would name as the project's first aim.",
      hint: "You can care about more than one dimension. The aim is the one that tells you whether someone was harmed.",
      retryHint: "Delay and language both matter here. Start from the harm that already happened.",
      options: [
        {
          text: "Safe. The fall already happened, so the aim is to stop the next one, and the late, English-only precautions are how you will get there.",
          ok: true,
          fb: "Safety is the aim because harm already occurred. Timing and language are the reasons the precautions failed, and they belong in the intervention. They are not a reason to rename the aim."
        },
        {
          text: "Timely. If the precautions had arrived sooner, nothing else on this list would matter.",
          ok: false,
          fb: "The delay contributed. The outcome you would measure first is still whether patients fall, which is safety. A faster wrong packet would still have missed this patient."
        },
        {
          text: "Efficient. Two nurses should not have to repeat the same precautions.",
          ok: false,
          fb: "Nothing in this case is about wasted work. Efficiency is a real dimension. It is not the one that failed here."
        },
        {
          text: "Patient-centered, because any fall project should begin from satisfaction scores.",
          ok: false,
          fb: "Asking what the patient needs is part of good precautions. A satisfaction score will not tell you whether the next patient falls."
        }
      ]
    },
    {
      type: "write",
      title: "Name the dimension your project is for",
      label: "One sentence: the clinical problem you are considering, and which of the six dimensions it breaks",
      placeholder: "On my unit, patients... This is a safety problem because...",
      tie: "Outcome E is a project that solves a clinical health issue. Naming the dimension now keeps the service learning goal and the quality improvement plan aimed at the same failure.",
      saved: "Saved on this device.",
      doneTitle: "Check complete",
      doneMeta: "You can name the kind of quality a problem breaks, which is the aim a project has to start from."
    }
  ]
};
