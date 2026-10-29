/*META
{
  "pageTitle": "Who Owns It, and Who Can Change It?",
  "title": "Who Owns It, and Who Can Change It?",
  "lede": "Place each demand on the grid of accountability and authority, then choose how emotional intelligence changes a hard conversation.",
  "pills": ["MLO 6.1-6.3"],
  "setup": "Module 6 separates two things that get blurred on a unit. Accountability is owning the outcome of your practice. Authority is the power to change the rule, the budget, or the policy. Emotional intelligence is how you stay useful when the conversation is hard.",
  "foot": "This is ungraded practice.",
  "noscript": "This activity asks you to place unit demands on a grid of accountability and authority, choose how to deliver difficult news, judge a policy's effect on the unit, and draft the accountability-versus-authority distinction for the Module 6 assignment."
}
META*/

window.__NS_JS__ = {
  key: "__NS__",
  steps: [
    {
      type: "sort",
      layout: "matrix",
      title: "Who owns the outcome, and who can change the rule?",
      help: "Tap a demand, then tap the cell where it belongs. Tap a placed demand to take it back.",
      hint: "The assignment asks you to differentiate your nursing accountability from organizational authority. A nurse can own an outcome and still be unable to change the budget.",
      retryHint: "If the person must answer for the care, that is accountability. If the person can change the rule or the money, that is authority.",
      poolLabel: "Demands around the same workflow",
      rows: [
        { id: "acct", label: "Accountability" },
        { id: "auth", label: "Authority" }
      ],
      cols: [
        { id: "bed", label: "Held in the nurse's own practice" },
        { id: "org", label: "Held by someone who sets the rule" }
      ],
      items: [
        { id: "i1", text: "You gave the late antibiotic and have to answer for the assessment you skipped", bin: "acct|bed" },
        { id: "i2", text: "You refuse an assignment you judge unsafe, and you own that refusal", bin: "acct|bed" },
        { id: "i3", text: "The nurse manager rewrites the night-pharmacy policy", bin: "auth|org" },
        { id: "i4", text: "The budget office approves or denies a sitter position", bin: "auth|org" },
        { id: "i5", text: "You document the political barrier honestly in your appraisal, including what you could not change", bin: "acct|bed" },
        { id: "i6", text: "Joint Commission can cite the hospital if the standard is missed", bin: "auth|org" }
      ],
      missHint: "A citation from outside the unit is authority over the organization. It is not the bedside nurse's personal accountability.",
      explain: "MLO 6.2 is this split. Piloting a workflow with the team, which Module 5 asked for, is not the same as embedding it. Embedding needs someone with authority over policy and budget, and it still leaves you accountable for the care you give."
    },
    {
      type: "choice",
      title: "How do you deliver the hard news?",
      help: "You have to tell a patient's daughter that the antibiotic was late and the team is changing the process. Choose the approach that uses emotional intelligence.",
      hint: "The readings treat emotional intelligence as a work competence, including when nurses deliver bad news. Self-awareness comes before the speech.",
      retryHint: "A polished sentence that hides what happened is not the competence the readings describe.",
      options: [
        {
          text: "Notice your own urge to defend the unit, say what happened in plain language, and stay for her questions.",
          ok: true,
          fb: "That is self-awareness plus the message. Emotional intelligence here is a practice skill, not a mood."
        },
        {
          text: "Lead with the new policy so she focuses on the future and not the delay.",
          ok: false,
          fb: "Skipping the news to protect the unit avoids the competence the reading is about."
        },
        {
          text: "Have the technician deliver it so you can stay on the medication pass.",
          ok: false,
          fb: "Handing off the conversation avoids both the accountability and the skill."
        },
        {
          text: "Wait until you feel nothing, then read the incident report aloud.",
          ok: false,
          fb: "Emotional intelligence is not the absence of feeling. It is knowing the feeling and still delivering the news clearly."
        }
      ],
      explain: "MLO 6.1 is emotional intelligence in practice. The Goleman video and the bad-news reading put self-awareness and empathy inside the work, especially when the news is hard. The political appraisal still has to be accurate after the conversation."
    },
    {
      type: "choice",
      title: "Does this policy help the unit or get in the way?",
      help: "A state staffing rule requires a published nurse-to-patient ratio. Your unit's late antibiotics get worse every time the ratio is missed. Choose the appraisal.",
      hint: "MLO 6.3 asks you to appraise a policy, regulation, or mandate: what it was meant to do, who shaped it, and whether it helps or hinders care here.",
      retryHint: "A rule can be well intended and still fail on your unit. Say which one you are looking at.",
      options: [
        {
          text: "The rule was meant to protect patients from unsafe assignments. On this unit it is missed at night, and the miss lines up with the late antibiotics. That is a barrier, not proof the rule was pointless.",
          ok: true,
          fb: "You named the intended impact and the actual effect on the workflow. That is an appraisal."
        },
        {
          text: "Any state rule is politics, so it has nothing to do with bedside care.",
          ok: false,
          fb: "The discussion asks how the political influence supports or hinders the unit. Dismissing it skips the appraisal."
        },
        {
          text: "The rule fixes the antibiotic delay by itself.",
          ok: false,
          fb: "A ratio on paper does not give the dose. You still have to say what happens on the shift when the ratio is missed."
        },
        {
          text: "Nurses should ignore regulations that complicate the shift.",
          ok: false,
          fb: "Ignoring the mandate is not an appraisal of how it helps or hinders care."
        }
      ],
      explain: "The discussion asks for one policy, the political forces around it, and the effect on workflow and outcomes. The assignment asks the same question of the internal governance and the external mandates that will decide whether your project lasts."
    },
    {
      type: "write",
      title: "Write the distinction",
      label: "Three or four sentences for the Module 6 assignment: one thing you are accountable for, one decision that belongs to someone with authority, and whether a policy helps or hinders",
      placeholder: "I am accountable for... Authority over the rule sits with... The policy...",
      tie: "Module 6 Authentic Assignment asks you to map accountability against authority and to appraise the political drivers around your project. This is practice, not the paper.",
      saved: "Saved on this device.",
      doneTitle: "Practice complete",
      doneMeta: "You can tell the outcome you own from the rule someone else can change, and you can say how a policy lands on the unit."
    }
  ]
};
