/*META
{
  "pageTitle": "Before You Name a Model",
  "title": "Before You Name a Model",
  "lede": "Discussion #3 asks you to use an evidence-based practice model on your capstone. Chapter 10 is the science you already have for that paragraph.",
  "pills": ["CSLO D"],
  "setup": "Chapter 10 distinguishes kinds of reasoning, kinds of research, and the question frame you use before you pick up someone else's model. Get those straight, then the model you describe in the discussion has something to attach to.",
  "noscript": "This check asks you to match research ideas from Chapter 10 to the situations they describe, choose what a BSN-prepared nurse does with a published study, and draft the sentence that connects a PICOT question to your capstone.",
  "basedOn": {
    "title": "Black (2024), Chapter 10, The Science of Nursing and Evidence-Based Practice",
    "note": "Inductive and deductive reasoning, the research process, PICOT, and the BSN role in research"
  }
}
META*/

window.__NS_JS__ = {
  key: "__NS__",
  steps: [
    {
      type: "match",
      title: "Match the move to the idea Chapter 10 names",
      help: "Tap a move on the left, then tap the idea on the right that it is an example of.",
      hint: "Ask whether the thinking starts from one case or from a general rule, and whether you are solving today's problem or building a finding others could use.",
      retryHint: "Two of these start from a single patient. Only one of those is research.",
      leftLabel: "What the nurse is doing",
      rightLabel: "What Chapter 10 calls it",
      left: [
        { id: "ind", text: "After three patients on the diuretic get dizzy, she wonders whether the teaching, not the drug, is the pattern, and she goes looking for studies." },
        { id: "ded", text: "She starts from the guideline that teach-back improves recall, and she uses it with the patient in front of her." },
        { id: "ps", text: "She reprints the discharge sheet in larger type today so this one patient can read it before the transport arrives." },
        { id: "rq", text: "She writes a question in PICOT form before she searches, so the articles have a population, an intervention, a comparison, an outcome, and a time." }
      ],
      right: [
        { id: "r1", for: "ind", text: "Inductive reasoning: from particular cases toward a generalization that can lead to further research" },
        { id: "r2", for: "ded", text: "Deductive reasoning: from a general premise to a specific case" },
        { id: "r3", for: "ps", text: "Problem solving for one patient, which is not yet research" },
        { id: "r4", for: "rq", text: "A PICOT question, the frame Chapter 10 gives you for an evidence search" }
      ],
      explain: "Inductive reasoning starts with particular experiences and moves toward a generalization. Deductive reasoning starts from a premise and applies it to a case. Both are thinking. Neither one is automatically a study. Problem solving fixes today's situation for one patient. Research is a systematic investigation, planned and analyzed so the finding can be used again. PICOT is how Chapter 10 tells you to frame the question before you search: population, intervention, comparison, outcome, time. A discussion of models still needs a question, or the model has nothing to organize."
    },
    {
      type: "choice",
      title: "What is yours to do with a study, at this degree?",
      help: "Chapter 10 assigns different research roles to different preparation. Choose the work that belongs to a BSN-prepared nurse.",
      hint: "The chapter is specific. Reading and judging a study is a different job from designing the next one.",
      retryHint: "Leading an original program of research is on the page. It is not the BSN line.",
      options: [
        {
          text: "Read the study, interpret it, and decide whether it is strong enough to support practice on your unit. Share the useful finding with the team. Point at problems that still need a study.",
          ok: true,
          fb: "That is the BSN role in the chapter: read, interpret, and evaluate research for practice, identify problems that need investigation, help carry out a study, and pass useful findings to colleagues."
        },
        {
          text: "Design and lead an original program of research. The BSN is the degree that owns that work.",
          ok: false,
          fb: "The chapter places original research programs with doctoral preparation. Claiming that role in the discussion overstates what this degree prepared you to do."
        },
        {
          text: "Repeat the study exactly on your unit, on your own, because replication is the BSN assignment.",
          ok: false,
          fb: "Replication of studies already done is the master's role in this chapter. A BSN nurse may help implement a study. Leading the replication is a different preparation."
        },
        {
          text: "Set the study aside if the setting was not your exact unit. Only local opinion should change practice.",
          ok: false,
          fb: "The chapter's warning is the opposite. Practice deteriorates into routine when nurses stop looking for evidence of what works. A setting difference is a reason to appraise applicability, not a reason to ignore the study."
        }
      ],
      explain: "Evidence-based practice, as Chapter 10 defines it, is a way to keep practice from hardening into tradition. The steps of a study still sit underneath any model you adopt: a researchable problem, a review of the literature, a question, a design, the study itself, conclusions, implications for practice, and dissemination. You do not have to lead all of those steps to use them. You do have to know which ones you are qualified to do."
    },
    {
      type: "write",
      title: "One sentence the model paragraph can use",
      label: "Your capstone question in PICOT form, and what you would do with a study that answered it",
      placeholder: "In older adults with heart failure, does teach-back compared with usual teaching reduce 7-day readmission? If I found a solid study, I would...",
      tie: "Discussion #3 asks you to describe two evidence-based practice models and analyze how each could be used with your capstone. Chapter 10 gives you the question and the BSN role. Use this sentence in the application half of the post.",
      saved: "Saved on this device.",
      doneTitle: "Check complete",
      doneMeta: "You can frame a PICOT question and say what a BSN-prepared nurse does with the evidence that comes back."
    }
  ]
};
