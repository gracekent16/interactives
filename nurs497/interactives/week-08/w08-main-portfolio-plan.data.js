/*META
{
  "pageTitle": "What Goes in the Portfolio, and When",
  "title": "What Goes in the Portfolio, and When",
  "lede": "Place the pieces of your growth in the order a career plan can use, then match each one to the section of the e-portfolio that should hold it.",
  "pills": ["MLO 8.1-8.3"],
  "setup": "Module 8 turns the term into a portfolio and a forward plan. Section 1 holds the baseline and the first goals. Section 2 holds the evidence that you moved. The career plan says what you will do next, with a timeline.",
  "foot": "This is ungraded practice.",
  "noscript": "This activity asks you to order a career plan from the present goal to a later role, match portfolio evidence to the section that should hold it, and draft one short-term goal and one long-term goal for the capstone plan."
}
META*/

window.__NS_JS__ = {
  key: "__NS__",
  steps: [
    {
      type: "order",
      layout: "timeline",
      title: "Order the plan",
      help: "Tap each milestone to place it, earliest first. Tap a placed milestone to take it back.",
      hint: "The career-plan video and the capstone instructions both want short-term goals, long-term goals, and the steps between them. A role you cannot yet qualify for does not come first.",
      retryHint: "The certification has to come before the job that requires it.",
      poolLabel: "Milestones for one nurse's plan",
      slotLabels: ["Now", "", "", "Further out"],
      items: [
        { id: "now", text: "Name two goals from this term's mentor work that are not finished yet" },
        { id: "cert", text: "Complete the certification the next role requires" },
        { id: "role", text: "Apply for a charge or educator role that uses that certification" },
        { id: "learn", text: "Keep a yearly learning plan after the role, so the growth does not stop at the job title" }
      ],
      answer: ["now", "cert", "role", "learn"],
      missHint: "Lifelong learning is the part that continues after the new role. It is not the first box.",
      explain: "MLO 8.1 is the goals, tied to lifelong learning. MLO 8.3 is the written plan: timeline, milestones, and actions such as a certification, graduate study, or a leadership role. The order is what makes the plan a plan rather than a wish list."
    },
    {
      type: "match",
      title: "Put the evidence in the right section",
      help: "Tap a piece of work, then tap the portfolio section that should hold it.",
      hint: "The capstone splits the portfolio into a baseline, the evidence of growth, and the credentials. The narrative explains how the evidence met the original goals.",
      retryHint: "The Module 1 self-assessment is the baseline. It is not the proof that you already led the team.",
      leftLabel: "Piece of work",
      rightLabel: "Where it goes",
      left: [
        { id: "base", text: "The Module 1 stage assessment and the first mentor goals" },
        { id: "svc", text: "The Module 5 account of how you worked across disciplines" },
        { id: "gov", text: "The Module 6 account of authority, dynamics, and emotional intelligence" },
        { id: "cv", text: "The current resume or CV" }
      ],
      right: [
        { id: "r1", for: "base", text: "Section 1. Baseline identity and goal setting" },
        { id: "r2", for: "svc", text: "Section 2. Evidence that the original goals were tested in practice" },
        { id: "r3", for: "gov", text: "Section 2. Evidence of how you handled authority and the team" },
        { id: "r4", for: "cv", text: "Section 3. Professional credentials" }
      ],
      explain: "MLO 8.2 is the synthesis. The one-page narrative in Section 2 is where you say how the practicum evidence moved you on Benner's trajectory and toward the goals in Section 1. A portfolio that is only a resume has not done that."
    },
    {
      type: "choice",
      title: "Which goal can go in the plan?",
      help: "Choose the goal that belongs in the career development plan.",
      hint: "The plan asks for specific, measurable short-term and long-term goals, plus the actions that would get you there.",
      retryHint: "A goal you could not fail is not measurable.",
      options: [
        {
          text: "Within 18 months, finish the certification and precept one new graduate, using the mentor pattern from this term.",
          ok: true,
          fb: "The time, the action, and the evidence are named. It also continues the mentor relationship instead of dropping it."
        },
        {
          text: "Be a great leader someday.",
          ok: false,
          fb: "Someday and great cannot be checked. The plan needs a time and an action."
        },
        {
          text: "Keep doing what I am doing and see what happens.",
          ok: false,
          fb: "That is not a plan. Lifelong learning in this module is a strategy, not a drift."
        },
        {
          text: "Put the whole capstone paper in Section 3 and skip the narrative.",
          ok: false,
          fb: "Section 3 is credentials. The narrative is how Section 2 shows growth against Section 1."
        }
      ],
      explain: "The discussion asks for one insight from your mentor that changed how you handle communication, conflict, or governance. The career plan is where that insight becomes a next step, not only a memory."
    },
    {
      type: "write",
      title: "Draft two goals",
      label: "A short-term goal and a long-term goal for the career development plan, each with a time and an action",
      placeholder: "Within the next year I will... Within five years I will...",
      tie: "The Module 8 Capstone Project asks for the e-portfolio in three sections and a separate career plan with measurable goals, a timeline, and a way to keep learning. This is a start, not the portfolio.",
      saved: "Saved on this device.",
      doneTitle: "Practice complete",
      doneMeta: "You can put the term's evidence in the section that should hold it, and you can write a next step that has a time on it."
    }
  ]
};
