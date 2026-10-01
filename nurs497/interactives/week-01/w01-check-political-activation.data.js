/*META
{
  "pageTitle": "Which Organization Carries This Fight",
  "title": "Which Organization Carries This Fight",
  "lede": "Four goals land in one break room conversation. Decide which professional organization is built to carry each one.",
  "pills": ["CSLO B"],
  "role": "Senior BSN student asked to brief two colleagues before a staff meeting",
  "setup": "The break room at Cedar Branch Regional has become an argument about whether joining a nursing organization changes anything. You read the chapter this week, so the argument has landed on you.",
  "cast": [
    { "initials": "PR", "name": "Priya Raghavan, RN", "role": "Staff nurse, night shift" },
    { "initials": "CJ", "name": "Curtis Jean-Louis, RN", "role": "Charge nurse" }
  ],
  "noscript": "This check asks you to match four professional nursing organizations to the goal each is positioned to advance, then judge a statement comparing how the organizations are made up.",
  "basedOn": {
    "title": "Black (2024), Chapter 15, Political Activation in Nursing",
    "note": "The chapter's treatment of professional nursing organizations and collective influence"
  }
}
META*/

window.__NS_JS__ = {
  key: "__NS__",
  steps: [
    {
      type: "match",
      title: "Send each nurse to the right table",
      help: "Tap a goal on the left, then tap the organization on the right that is built to carry it.",
      hint: "Read each organization by two things at once: who it enrolls and what it exists to change.",
      retryHint: "One of these organizations has no individual nurses in it at all. Find that one first.",
      leftLabel: "What the nurse wants to change",
      rightLabel: "The organization built for it",
      left: [
        {
          id: "ethics",
          text: "Curtis wants ethics and scope of practice language a state board will recognize the next time his unit disputes an assignment."
        },
        {
          id: "pipeline",
          text: "Priya wants to build a mentoring pipeline for Black nursing students in the city and plug it into a chapter already doing that work."
        },
        {
          id: "spanish",
          text: "A new grad wants a network of nurses working on Hispanic community health, because Spanish-speaking families are the fastest growing group on the unit."
        },
        {
          id: "global",
          text: "You want to know how nursing's position reaches the World Health Assembly, where no individual nurse holds a seat."
        }
      ],
      right: [
        {
          id: "r1",
          for: "ethics",
          text: "American Nurses Association (ANA), which enrolls registered nurses through state and constituent associations and issues the profession's code of ethics and policy statements"
        },
        {
          id: "r2",
          for: "pipeline",
          text: "National Black Nurses Association (NBNA), a member of the National Coalition of Ethnic Minority Nurse Associations, organized through local chapters of nurses and nursing students"
        },
        {
          id: "r3",
          for: "spanish",
          text: "National Association of Hispanic Nurses (NAHN), also an NCEMNA member, with its own mission, board, and president"
        },
        {
          id: "r4",
          for: "global",
          text: "International Council of Nurses (ICN), a federation whose members are national nurses associations rather than individual nurses"
        }
      ],
      explain: "Each organization is defined by who it enrolls and what it was founded to change. The ANA sets the profession's ethical and policy language for US nurses. NCEMNA member organizations such as the NBNA and the NAHN are independent associations that formed around community health concerns the larger body was not carrying, each with its own mission and elected president. The ICN operates one level up, representing nursing to global bodies through national associations."
    },
    {
      type: "choice",
      title: "Answer the question everyone asks",
      help: "Read Priya's question, then choose the response that holds up.",
      hint: "Your discussion post has to compare membership, not just mission. Start there.",
      retryHint: "Two of these treat the organizations as versions of one another. They are not.",
      who: {
        initials: "PR",
        name: "Priya Raghavan",
        line: "I am writing this comparison tonight. Are these three basically the same thing at different sizes?"
      },
      options: [
        {
          text: "No. The ANA and the NBNA enroll individual nurses, while the ICN is a federation whose members are national associations, so nursing reaches global policy through organizations rather than person by person.",
          ok: true,
          fb: "This is the comparison that carries a post. Membership structure explains why the ICN speaks at the World Health Assembly and why your individual dues to the ANA still reach federal policy through a state association."
        },
        {
          text: "Yes. All three enroll individual nurses. The ICN simply charges more because the membership is international.",
          ok: false,
          fb: "The ICN does not enroll individual nurses. Its members are national nurses associations, which is the single structural difference your comparison most needs to name."
        },
        {
          text: "No. The NBNA is a committee inside the ANA that handles minority nursing concerns.",
          ok: false,
          fb: "NCEMNA member organizations are independent, each with its own mission, board, and elected president. Treating one as a subcommittee of another would lose you the comparison the discussion asks for."
        },
        {
          text: "Yes, and because the ANA already speaks for all United States nurses, the others largely duplicate its mission.",
          ok: false,
          fb: "These organizations formed because specific community health and workforce concerns were not being carried. Their missions name populations and priorities the ANA's does not, which is why the discussion asks you to compare missions rather than rank them."
        }
      ]
    },
    {
      type: "write",
      title: "Put it in one sentence",
      label: "The sharpest difference you would put in your Discussion #1 comparison",
      placeholder: "The clearest difference between these organizations is...",
      tie: "Discussion #1 on Professional Organization Leadership asks you to compare mission, membership, and president. This is one sentence of that, not the post.",
      saved: "Saved on this device.",
      doneTitle: "Check complete",
      doneMeta: "You can now tell these organizations apart by who joins them and what they exist to change."
    }
  ]
};
