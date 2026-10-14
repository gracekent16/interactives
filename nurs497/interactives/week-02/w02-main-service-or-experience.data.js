/*META
{
  "pageTitle": "Service or Experience",
  "title": "Service or Experience",
  "lede": "Sort real practicum activities into service learning or experiential learning, then turn a vague hope into a goal you could actually defend.",
  "pills": ["CSLO A, E"],
  "setup": "Discussion #2 asks you to compare service learning and experiential learning, and your Time and Attendance Log already treats them as different hours. The difference is who the activity is for, and whether a goal connects it back to the course.",
  "noscript": "This activity asks you to sort practicum activities into service learning or experiential learning, repair a vague goal so it is specific, measurable, and time-bound, choose the pair of strategies that would carry a service learning project, and draft the comparison paragraph for Discussion #2."
}
META*/

window.__NS_JS__ = {
  key: "__NS__",
  steps: [
    {
      type: "sort",
      title: "Put each activity in the category the course already uses",
      help: "Tap a card, then tap the column it belongs in. Tap a placed card to send it back.",
      hint: "Service learning serves a community partner and comes back to a course goal. Experiential learning builds your own competence. Both can be worth doing. They are not the same hours.",
      retryHint: "Ask who would be worse off if you cancelled it, and whether a course outcome is attached.",
      poolLabel: "Activities from a capstone practicum",
      bins: [
        { id: "sl", label: "Service learning", sub: "A community need, plus a learning goal" },
        { id: "ex", label: "Experiential learning", sub: "The point is your own competence" }
      ],
      items: [
        {
          id: "a1",
          text: "Blood pressure screening at the Center for Nutrition, Diet, and Health, planned with the site, with a reflection tied to a course outcome",
          bin: "sl"
        },
        {
          id: "a2",
          text: "A hydration station for older adults at the Institute of Gerontology, designed because the center asked for it, then written up against your project goal",
          bin: "sl"
        },
        {
          id: "a3",
          text: "A Saturday health fair you staffed for a neighborhood partner, with a written goal and a short reflection on what the residents told you they needed",
          bin: "sl"
        },
        {
          id: "a4",
          text: "Shadowing your preceptor through medication passes so you can learn the unit routine",
          bin: "ex"
        },
        {
          id: "a5",
          text: "Practicing teach-back on a classmate in the skills lab until the steps are yours",
          bin: "ex"
        },
        {
          id: "a6",
          text: "Watching a discharge on your own unit so you can see where patients get lost",
          bin: "ex"
        }
      ],
      missHint: "A preceptor shift can be excellent learning and still not be service learning. Look for the community partner.",
      explain: "Your practicum log splits these on purpose. Precepted practice is experiential: the beneficiary is your competence, under a nurse expert, which is the mentor relationship in outcome A. Service learning adds a second beneficiary, a community partner such as a CAUSES center, and a goal you can evaluate. Hours at a site with no partner and no learning goal are volunteer time, and they do not become service learning because they felt useful."
    },
    {
      type: "choice",
      title: "Repair the goal",
      help: "A classmate wrote this goal for the screening: \"Help the community be healthier.\" Choose the revision that is ready for Discussion #2.",
      hint: "A SMART goal names the people, the action, the number, and the date. Vague warmth will not survive the rubric.",
      retryHint: "Three of these still let you claim success no matter what happens. Find the one you could fail.",
      options: [
        {
          text: "By the end of the six-week practicum, 20 older adults at the Institute of Gerontology will demonstrate correct home blood pressure measurement on a return demonstration.",
          ok: true,
          fb: "You could fail this, which is what makes it a goal. It names the people, the place, the action, the number, and the time, and the return demonstration is how you would know."
        },
        {
          text: "Improve community wellness through education and empowerment over the course of the practicum.",
          ok: false,
          fb: "This still has no people, no number, and no way to tell whether it happened. Adding the words education and empowerment does not make a hope measurable."
        },
        {
          text: "Offer blood pressure screening to anyone who wants it, and hope attendance is strong.",
          ok: false,
          fb: "Hope is not a measure. The discussion asks for a goal you could check, not a description of the event."
        },
        {
          text: "Teach older adults about blood pressure sometime this term if the site has room.",
          ok: false,
          fb: "The action is closer, and the time and the condition are still optional. A goal that depends on \"if the site has room\" cannot be evaluated."
        }
      ],
      explain: "Discussion #2 asks you to describe a service learning activity in SMART terms: specific, measurable, attainable, relevant, and time-bound. A goal needs an action and terms under which you would call it met or unmet. \"Help the community be healthier\" can never be unmet, so it cannot guide the project."
    },
    {
      type: "choice",
      title: "Choose the strategies that would actually carry it",
      help: "The discussion also asks for two evidence-based strategies. Choose the pair you would stand behind.",
      hint: "A strategy is evidence-based when it comes from a source you could cite and when the site has a say in it.",
      retryHint: "Look for the pair that starts from the partner's need and ends in something you can evaluate.",
      options: [
        {
          text: "Adapt a published screening method with the site staff, and build in a reflection that checks the goal you just wrote.",
          ok: true,
          fb: "That pair does both jobs. The method has a source behind it, the site shapes it, and the reflection is how you know the learning happened rather than assuming the hours were enough."
        },
        {
          text: "Design a new flyer the night before, and count how many people take one.",
          ok: false,
          fb: "A flyer you invented last night has no evidence behind it, and a headcount does not tell you whether anyone learned the skill in the goal."
        },
        {
          text: "Repeat the activity you did in a previous course, and skip the site meeting because you already know what they need.",
          ok: false,
          fb: "Service learning starts from the partner's current need. Reusing last year's plan without the site is how projects miss the people they are for."
        },
        {
          text: "Ask classmates to vote on a topic, then write the reflection after the event from memory.",
          ok: false,
          fb: "A class vote is not a community assessment, and a reflection written only from memory is hard to tie back to a goal you could measure."
        }
      ],
      explain: "The two strategies the post needs are a method you can cite and a check that the goal was met. The service learning presentation later in the course grades the same pair under assessment, implementation, and evaluation. Attendance alone never answers whether health or learning changed."
    },
    {
      type: "write",
      title: "Draft the comparison",
      label: "Two or three sentences for Discussion #2: one service learning activity, one experiential learning activity, and what makes them different",
      placeholder: "Screening at the Institute of Gerontology is service learning because... Shadowing my preceptor is experiential learning because...",
      tie: "Discussion #2 on Service Learning asks for this comparison, a SMART goal, and two evidence-based strategies. This is a start, not the post.",
      saved: "Saved on this device.",
      doneTitle: "Practice complete",
      doneMeta: "You can now tell service learning from experiential learning and write a goal the discussion can grade."
    }
  ]
};
