/*META
{
  "pageTitle": "What the Safety Plan Leaves Out",
  "title": "What the Safety Plan Leaves Out",
  "lede": "Read one unit's safety effort the way a root-cause analysis would, and mark what does not yet protect anyone.",
  "pills": ["MLO 3.1-3.3"],
  "setup": "Module 3 asks you to judge safety and quality efforts in your mentor's setting, name the barriers that keep them from working, and scope a quality-improvement project with a problem, causes, and a measurable aim.",
  "foot": "This is ungraded practice.",
  "noscript": "This activity asks you to find the weak point in a workplace-safety effort, sort contributing factors into people, process, technology, and policy, choose an aim that could be measured, and draft a problem statement for the Module 3 assignment."
}
META*/

window.__NS_JS__ = {
  key: "__NS__",
  steps: [
    {
      type: "choice",
      title: "Which effort actually reduces the hazard?",
      help: "Nurses on the night shift have been threatened in the parking lot twice this month. The unit posted a sign that says Be aware of your surroundings. Choose the response that matches the hazard.",
      hint: "OSHA's healthcare workplace-violence guidance treats violence as a hazard to control, not as a reminder to try harder.",
      retryHint: "A sign can announce a danger. Ask whether anyone is safer because of it.",
      options: [
        {
          text: "Escort staff to their cars after dark and put a working alarm where the threats happened.",
          ok: true,
          fb: "The hazard is an assault risk in a specific place and time. The response changes that exposure. That is a strategy, not a slogan."
        },
        {
          text: "Leave the sign up and remind staff at huddle to be careful.",
          ok: false,
          fb: "The sign and the reminder repeat the same advice. They do not change the parking lot."
        },
        {
          text: "Tell night staff that violence is part of the job in this neighborhood.",
          ok: false,
          fb: "Calling violence normal is how a hazard stays uncontrolled. The module's workplace-safety readings treat it as preventable."
        },
        {
          text: "Move the quality board to the break room so more people see the fall data.",
          ok: false,
          fb: "Fall data may matter on this unit. They are not the hazard in this scene."
        }
      ],
      explain: "MLO 3.2 asks you to analyze workplace safety strategies and how well they mitigate hazards. A strategy that does not change the exposure has not mitigated anything. The discussion also asks what organizational barriers keep a real strategy from working."
    },
    {
      type: "sort",
      title: "Sort the causes, not the blame",
      help: "The same unit also has late antibiotics. Tap each contributing factor, then tap the cause group it belongs in.",
      hint: "The assignment's root-cause tools, a fishbone or the 5 Whys, separate systemic, operational, and technology factors. A person hurrying is not the whole cause.",
      retryHint: "If a policy or a missing alert would still produce the delay with a different nurse, it is not a people cause.",
      poolLabel: "What staff named in the review",
      bins: [
        { id: "people", label: "People", sub: "What a person did or did not know" },
        { id: "process", label: "Process", sub: "How the work is sequenced" },
        { id: "tech", label: "Technology", sub: "What the record or alert does" },
        { id: "policy", label: "Policy", sub: "The rule that makes the gap likely" }
      ],
      items: [
        { id: "c1", text: "The new nurse did not know which antibiotic was first-line", bin: "people" },
        { id: "c2", text: "The order sits in a queue until the note is signed, so the clock starts late", bin: "process" },
        { id: "c3", text: "The alert fires only after the dose is already late", bin: "tech" },
        { id: "c4", text: "Night pharmacy closes, and no policy covers how the first dose is obtained", bin: "policy" }
      ],
      missHint: "A closed pharmacy is a rule about how the building runs. It is not a knowledge gap in one nurse.",
      explain: "A root-cause analysis is how MLO 3.1 and MLO 3.3 get specific. Client safety and quality fail in more than one place at once. The proposal has to say which causes the intervention will touch, including the technology you already audited."
    },
    {
      type: "choice",
      title: "Which aim can the project survive?",
      help: "Choose the aim you would put in the quality-improvement proposal.",
      hint: "The assignment asks for measurable aims: expected patient safety and clinical quality outcomes. A mood is not an outcome.",
      retryHint: "If you could not fail the aim, it is not an aim.",
      options: [
        {
          text: "Within eight weeks, 90 percent of sepsis antibiotics on this unit start within one hour of the order.",
          ok: true,
          fb: "You could miss 90 percent. The people, the action, the number, and the time are all named."
        },
        {
          text: "Improve safety culture so nurses feel supported.",
          ok: false,
          fb: "Support matters. This sentence cannot be unmet, so it cannot steer the project."
        },
        {
          text: "Remind staff about sepsis at the next staff meeting.",
          ok: false,
          fb: "A meeting is an activity. An aim is the outcome you would measure after the activity."
        },
        {
          text: "Have zero problems with antibiotics going forward.",
          ok: false,
          fb: "Zero and going forward hide the real gap. The proposal needs a count and a date."
        }
      ],
      explain: "The proposal's measurable aim is what tells you later whether clients were safer. Quality-improvement resources in this module are about that cycle, not about announcing that safety matters."
    },
    {
      type: "write",
      title: "Draft the problem and the aim",
      label: "Two or three sentences for the Module 3 proposal: the safety gap, one root cause, and one measurable aim",
      placeholder: "The gap on the unit is... One cause is... The aim is...",
      tie: "Module 3 Authentic Assignment asks for a problem statement, the root-cause findings, measurable aims, and an evidence-based intervention. This is the opening, not the full proposal.",
      saved: "Saved on this device.",
      doneTitle: "Practice complete",
      doneMeta: "You can tell a slogan from a strategy, sort a cause to the place it belongs, and write an aim the project could miss."
    }
  ]
};
