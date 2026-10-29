/*META
{
  "pageTitle": "Where Are You on the Way to Expert?",
  "title": "Where Are You on the Way to Expert?",
  "lede": "Put Benner's stages in the order nurses actually grow, then separate a workplace problem from a personal stage and name the issue you will follow all term.",
  "pills": ["MLO 1.1-1.3"],
  "setup": "Module 1 starts the capstone with a mentor and a real unit problem. The workplace challenges are shortages, burnout, and retention. Your own growth is a different question: where you are between a rule-governed novice and an intuitive expert.",
  "foot": "This is ungraded practice.",
  "noscript": "This activity asks you to order Benner's five stages from novice to expert, tell a rule-bound practice from expert judgment, separate a workforce challenge from a personal stage, and draft the unit issue and one learning goal for the Module 1 assignment."
}
META*/

window.__NS_JS__ = {
  key: "__NS__",
  steps: [
    {
      type: "order",
      layout: "chain",
      title: "Order the trajectory",
      help: "Tap each stage to place it, earliest in a nurse's growth first. Tap a placed stage to take it back.",
      hint: "The Benner videos describe five stages, from a nurse who needs the rule for every step to one who sees what matters without working back through the rules.",
      retryHint: "Competent comes after the nurse can plan a day, and before the nurse reads the whole situation at once.",
      poolLabel: "Benner's stages",
      items: [
        { id: "n", text: "Novice: every step needs the rule, because the situation is still new" },
        { id: "a", text: "Advanced beginner: a few real cases have been seen, and cues are still needed" },
        { id: "c", text: "Competent: the day has a plan, and the nurse feels responsible for that plan" },
        { id: "p", text: "Proficient: the situation is read as a whole, not as a list of tasks" },
        { id: "e", text: "Expert: what matters is seen without working back through the rules" }
      ],
      answer: ["n", "a", "c", "p", "e"],
      missHint: "The videos start with the rule-governed novice. Expert is the far end, not the middle.",
      explain: "Benner's trajectory is the map the Module 1 assignment asks you to use. Novice practice is governed by rules. Expert practice is an intuitive read of what matters. The stages between are how a nurse gets from one to the other. Naming your current stage is the self-assessment, not a complaint about the unit."
    },
    {
      type: "choice",
      title: "Which stage is this nurse in?",
      help: "A new graduate on your mentor's unit checks the procedure card before every medication and will not give the dose if the card and the order disagree. Choose the stage.",
      hint: "Ask whether this nurse is reading the situation, or still needs the rule in hand.",
      retryHint: "Wanting to be safe is not the same stage as seeing the case without the card.",
      options: [
        {
          text: "Novice. The card is doing the thinking the situation has not yet taught.",
          ok: true,
          fb: "The rule is still in charge. That is the beginning of the trajectory the videos describe, and it is a stage, not a failing."
        },
        {
          text: "Expert. Refusing a dose that disagrees with the order is expert judgment.",
          ok: false,
          fb: "Stopping for the card is the rule at work. Expert practice is the nurse who already sees what matters without going back through the card."
        },
        {
          text: "Proficient. Using a card means the whole situation is already in view.",
          ok: false,
          fb: "Proficient practice reads the situation as a whole. A nurse who cannot proceed without the card is still early on the trajectory."
        },
        {
          text: "This is a workplace shortage, not a stage.",
          ok: false,
          fb: "Staffing is a workplace challenge from the State of the World's Nursing report. This scene is about one nurse's stage."
        }
      ],
      explain: "MLO 1.2 asks you to trace the trajectory and justify your own stage. A mentor can help you see the stage. The mentor does not turn a novice into an expert by agreeing that the card was unnecessary."
    },
    {
      type: "choice",
      title: "What kind of problem is this?",
      help: "Your mentor's unit lost four nurses this quarter, the remainders are working short, and new graduates are leaving within a year. Choose what Module 1 would have you call it.",
      hint: "The WHO report is about shortages, burnout, and retention. Benner's stages are about one nurse's growth. Both can be true. They are not the same problem.",
      retryHint: "A stage describes a person. A shortage describes the workplace the person entered.",
      options: [
        {
          text: "A workplace challenge. Shortage, burnout, and retention are the conditions new nurses are entering.",
          ok: true,
          fb: "That is the State of the World's Nursing frame. It belongs in the picture of today's workplace, and it is not a Benner stage."
        },
        {
          text: "An expert-stage problem. Experts would not have let the nurses leave.",
          ok: false,
          fb: "Leaving a short-staffed unit is a retention problem. Calling it an expert failure skips the workplace evidence."
        },
        {
          text: "A novice problem. New graduates caused the shortage by being new.",
          ok: false,
          fb: "Being new is a stage. The shortage is a condition of the workplace. The report does not treat newness as the cause."
        },
        {
          text: "A professional-identity problem only. The fix is a motivational video.",
          ok: false,
          fb: "Identity is shaped by mentoring and by the work itself. A video does not answer a staffing shortage."
        }
      ],
      explain: "MLO 1.1 is the workplace: shortages, burnout, and retention. MLO 1.2 is your stage. The assignment wants a unit-level issue from the first, and a stage plus learning goals from the second. Mixing them makes the capstone problem too vague to follow."
    },
    {
      type: "write",
      title: "Name the issue and one goal",
      label: "For the Module 1 assignment: the unit issue you and your mentor would follow, the Benner stage you are in now, and one learning goal the mentor relationship would help you meet",
      placeholder: "The unit issue is... I am at the ... stage because... One goal for this term is...",
      tie: "Module 1 Authentic Assignment asks for the unit issue, your stage on Benner's trajectory, and measurable learning goals aimed at that problem. This is a start, not the paper.",
      saved: "Saved on this device.",
      doneTitle: "Practice complete",
      doneMeta: "You can separate today's workplace problem from your own stage, and you can name both for the mentor relationship."
    }
  ]
};
