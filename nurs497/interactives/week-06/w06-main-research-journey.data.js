/*META
{
  "pageTitle": "Your Research Journey to 2030",
  "title": "Your Research Journey to 2030",
  "lede": "Lay a five-year research path on a timeline and see which steps collapse when the preparation is missing.",
  "pills": ["CSLO A-F"],
  "setup": "Discussion #4 asks for one research recommendation from The Future of Nursing 2020-2030, how you would use it in practice or education, and the steps you will take to prepare. The order of those steps is the part that makes the narrative believable.",
  "noscript": "This activity asks you to order a research path from 2026 to 2030, reject a plan that skips preparation, match a unit problem to a research priority in the report, and draft the opening of the Discussion #4 narrative."
}
META*/

window.__NS_JS__ = {
  key: "__NS__",
  steps: [
    {
      type: "order",
      layout: "timeline",
      title: "Put the path in the only order that holds",
      help: "Tap each step to place it. Earliest goes first. Tap a placed step to take it back.",
      hint: "You cannot share a finding you have not helped produce, and you cannot produce one on a topic you have not learned to read.",
      retryHint: "Preparation sits between the choice of topic and the study. Anything else is a speech, not a plan.",
      poolLabel: "Steps in a research journey",
      slotLabels: ["First", "", "", "", "By 2030"],
      eras: ["2026", "2027", "2028", "2029", "2030"],
      items: [
        { id: "a", text: "Choose one research priority the report actually names" },
        { id: "b", text: "Find a mentor and read the studies already done on that priority" },
        { id: "c", text: "Learn the method well enough to shape a question a team could study" },
        { id: "d", text: "Join the work of carrying a study out" },
        { id: "e", text: "Use what you learned to change practice or what you teach" }
      ],
      answer: ["a", "b", "c", "d", "e"],
      missHint: "The report's agenda is a starting point, not a result. You do not begin by disseminating.",
      explain: "Chapter 11 of the report closes on a research agenda: the impact of nursing interventions, including work across sectors, on social determinants of health, environmental health, health equity, and nurses' own well-being. Recommendation 9 also says the people who will study those questions need preparation in population health, social determinants, and equity before they are equipped to do it. Discussion #4 scores the same sequence in different words. Name the recommendation, say how it would change practice or education, and explain how you will prepare. The impact sentence is the last step, not the first."
    },
    {
      type: "choice",
      title: "Which plan has no preparation in it?",
      help: "Four classmates drafted a path. Choose the one that will not survive the third part of the discussion.",
      hint: "The third prompt is the steps you will take to prepare yourself. A plan with none of those steps fails that prompt even if the topic is good.",
      retryHint: "Look for the draft that arrives at a finding without ever saying how the writer became able to produce one.",
      options: [
        {
          text: "In 2027 I will publish original findings on health equity. The topic is important, so the preparation is implied.",
          ok: true,
          fb: "This is the one that fails. Importance does not substitute for a mentor, a literature base, or a method. The discussion asks you to explain the preparation, and this draft has none."
        },
        {
          text: "This year I will choose nurse well-being as the priority, ask my preceptor to point me to two studies, and only then decide what I could help study.",
          ok: false,
          fb: "That draft has a priority and a preparation step before any claim of a finding. It is the shape the timeline just built."
        },
        {
          text: "I will spend the next two years learning to read equity research with a mentor, and I will treat publication as something that comes after I have joined a study.",
          ok: false,
          fb: "Publication is at the end, where dissemination belongs. This plan respects the order."
        },
        {
          text: "I will use the report's agenda to pick one priority, then map the skills I still need before I offer to help on a project.",
          ok: false,
          fb: "Naming the gap in your own preparation is the third prompt, done honestly. It is not the empty plan."
        }
      ],
      explain: "A narrative that jumps from a worthy topic to \"I will publish\" has skipped the only part of the prompt that is about you. The report is explicit that this evidence base still has to be built, and that building it takes preparation. Your five-year story is believable when the early years are study, mentorship, and method, and the later years are the work itself."
    },
    {
      type: "match",
      title: "Match the unit problem to the report's agenda",
      help: "Tap a problem on the left, then tap the research priority it belongs to.",
      hint: "Use the priorities Chapter 11 of the report actually names. A local frustration still has to land on one of them.",
      retryHint: "Air quality is not a staffing problem, and burnout is not a disaster plan. Sort by the obstacle, not by the unit.",
      leftLabel: "What you keep seeing",
      rightLabel: "The priority the report names",
      left: [
        { id: "ride", text: "Patients leave with a prescription and no way to get to a pharmacy." },
        { id: "burn", text: "Nurses on the unit are leaving after months of moral distress, and the vacancies make the next month worse." },
        { id: "air", text: "Asthma readmissions rise in the weeks the neighborhood air is worst." },
        { id: "heat", text: "The heat emergency plan names every department except nursing, so no one knows the nurses' role." }
      ],
      right: [
        { id: "m1", for: "ride", text: "Social determinants of health: conditions outside the hospital that decide whether the plan works" },
        { id: "m2", for: "burn", text: "Nurses' health and well-being, which the report treats as part of the equity agenda" },
        { id: "m3", for: "air", text: "Environmental health, including the exposures that drive illness in a place" },
        { id: "m4", for: "heat", text: "Disaster preparedness and public health emergency response" }
      ],
      explain: "These four are in the report's own agenda, not a list of interesting clinical topics. Social determinants are the conditions that decide whether a discharge plan can be followed. Nurses' well-being is Recommendation 3, because a workforce that is not well cannot carry an equity agenda. Environmental health is named beside equity in Recommendation 9. Disaster and public health emergency response is Recommendation 8, and the research need under it is the gaps in nurses' preparation for those roles. A discussion that picks a topic the report never names has not used the reading."
    },
    {
      type: "write",
      title: "Open the narrative",
      label: "The opening of your Discussion #4 post: one priority from the report, the impact you want by 2030, and the first preparation step",
      placeholder: "The recommendation I will pursue is... By 2030 I want it to change... The first step I will take to prepare is...",
      tie: "Discussion #4, Lifelong Learning, asks for the recommendation, the impact on practice or education, and the preparation steps, in 200 to 300 words. This is the opening, not the post.",
      saved: "Saved on this device.",
      doneTitle: "Practice complete",
      doneMeta: "You can put a research priority, a preparation step, and an impact in the order the report and the discussion both require."
    }
  ]
};
