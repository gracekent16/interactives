/*META
{
  "pageTitle": "Who Can Move This?",
  "title": "Who Can Move This?",
  "lede": "Choose where the power over your unit's issue actually sits, then pick the advocacy move that reaches that place.",
  "pills": ["MLO 7.1-7.3"],
  "setup": "Module 7 asks you to take the unit issue into the political landscape: which reform or power structure shapes it, and what nurses can do to influence it. A board, a legislature, and a unit policy are not the same door.",
  "foot": "This is ungraded practice.",
  "noscript": "This activity asks you to choose whether power over a unit issue sits with a board, a legislature, or unit policy, pick an advocacy move that matches that door, and draft one strategy for the Module 7 discussion."
}
META*/

window.__NS_JS__ = {
  key: "__NS__",
  steps: [
    {
      type: "choice",
      title: "Where does the power sit?",
      help: "Your unit's late antibiotics are shaped by something outside the shift. Choose the seat of power you will follow. Each choice is a real door. Later steps use the one you pick.",
      hint: "Nurses on boards, legislative advocacy, and the policy inside an organization are different ways nurses enter a political process. Pick the door your issue actually uses.",
      retryHint: "There is no single correct door. Pick the one that can change the rule you care about.",
      options: [
        {
          id: "board",
          text: "A health-system board. The staffing model is a governance decision.",
          ok: true,
          fb: "Boards set the frame administrators then carry out. The Nurses on Boards Coalition exists because that seat has been hard for nurses to hold."
        },
        {
          id: "bill",
          text: "The legislature. A staffing bill is moving in your state.",
          ok: true,
          fb: "Legislation is the process the policy videos describe: nurses can enter it, and bedside stories are part of how a bill changes."
        },
        {
          id: "unit",
          text: "The organization's own policy. The night-pharmacy rule was written inside the hospital.",
          ok: true,
          fb: "Not every political fact is a statute. Internal policy is still a power structure, and nurses influence it through governance, not only through a vote."
        }
      ],
      onPick: function (o, S) { S.seat = o.id || "unit"; },
      explain: "MLO 7.1 is recognizing that nursing practice is political. The door you named decides which strategy is real. A board testimony does not rewrite a statute, and a bill does not fix a pharmacy policy by itself."
    },
    {
      type: "choice",
      title: "Which move reaches that door?",
      help: "Choose the strategy that matches the seat of power you just named.",
      hint: "MLO 7.2 is a strategy to influence the process, not a hope that leaders will notice.",
      retryHint: "Match the move to the door. A mismatched audience cannot change the rule.",
      build: function (S) {
        var seat = S.seat || "unit";
        if (seat === "board") {
          return {
            options: [
              { text: "Seek a nurse seat, or a nurse briefing, on the committee that adopts the staffing model, and bring the unit's outcome data.", ok: true, fb: "A board changes governance when nurses are in the room with evidence, which is the point of nurses on boards." },
              { text: "Post a flyer in the break room asking coworkers to be safer.", ok: false, fb: "A flyer does not reach the board that adopts the model." },
              { text: "Wait for the next election and vote only.", ok: false, fb: "Voting matters for a legislature. This door is a board agenda." },
              { text: "Ask the night shift to work faster until the board notices.", ok: false, fb: "Effort on the shift does not change a governance decision." }
            ]
          };
        }
        if (seat === "bill") {
          return {
            options: [
              { text: "Prepare a short account of the late antibiotics and the missed ratio, and take it to the hearing or to your legislator's office with a nursing organization.", ok: true, fb: "That is the advocacy path the legislation videos describe: a concrete practice story, aimed at the people writing the bill." },
              { text: "Rewrite the hospital's pharmacy policy and call that the statute.", ok: false, fb: "An internal policy is a different door. It does not amend the bill." },
              { text: "Send an unsigned comment with no practice example.", ok: false, fb: "The videos stress that nurses change legislation when the practice consequence is visible." },
              { text: "Tell the team politics is optional for bedside nurses.", ok: false, fb: "The module's materials argue the opposite. Practice is already inside the political process." }
            ]
          };
        }
        return {
          options: [
            { text: "Take the outcome data to the committee that owns the pharmacy policy and propose the wording change.", ok: true, fb: "Internal policy moves when the people who own it see the clinical consequence and a specific change." },
            { text: "Announce the new rule on social media before the committee meets.", ok: false, fb: "Public pressure can matter. It skips the body that actually writes this policy." },
            { text: "File a bill in the legislature to reopen the night pharmacy.", ok: false, fb: "A statute is the wrong size for a hospital rule you can take to a committee." },
            { text: "Leave the policy as it is and document harder.", ok: false, fb: "More documentation does not influence the process that created the gap." }
          ]
        };
      },
      explain: "MLO 7.2 is the strategy matched to the process. The assignment's advocacy plan has to name the strategies nurses can use, and the pitch deck has to show the power structure those strategies are aimed at."
    },
    {
      type: "choice",
      title: "What belongs on the pitch?",
      help: "The assignment asks for an executive advocacy deck. Choose the slide that belongs in it.",
      hint: "The deck covers policy context, power dynamics, an action plan, and the clinical and financial case. A slogan is not a slide.",
      retryHint: "If a leader could not tell what to do after the slide, it is not the action plan.",
      options: [
        {
          text: "One slide that names who holds the decision, the change you want from them, and the patient outcome that moves if they say yes.",
          ok: true,
          fb: "That slide holds the power structure, the ask, and the clinical case. A leader can answer it."
        },
        {
          text: "A slide that says Nurses are the heart of health care, with a stock photo.",
          ok: false,
          fb: "The deck is an argument to a decision maker. A slogan does not name the power or the ask."
        },
        {
          text: "Eight slides of definitions copied from a textbook.",
          ok: false,
          fb: "Definitions do not appraise the reform that touches your unit."
        },
        {
          text: "A slide of your personal career goals.",
          ok: false,
          fb: "Career goals belong in Module 8. This deck is about the policy and the unit issue."
        }
      ],
      explain: "MLO 7.3 is the impact of reform and power structures on practice. The pitch is how you show that impact to your preceptor and peers, with an action plan rather than a complaint."
    },
    {
      type: "write",
      title: "Draft the strategy",
      label: "Two or three sentences for Module 7 Discussion: the reform or power structure, and one strategy nurses can use to influence it",
      placeholder: "The issue is shaped by... Nurses can influence it by...",
      tie: "Module 7 Discussion (MLO 7.3) asks for the issue and one evidence-based strategy. The assignment turns that into the advocacy plan and the pitch deck. This is practice, not the deck.",
      saved: "Saved on this device.",
      doneTitle: "Practice complete",
      doneMeta: "You can name where the power sits and choose a move that actually reaches it."
    }
  ]
};
