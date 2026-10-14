/*META
{
  "pageTitle": "Choose Your Practicum Ground",
  "title": "Choose Your Practicum Ground",
  "lede": "Map where nurses actually practice and what each role takes, then name the setting and the nurse expert you want for your own capstone.",
  "pills": ["CSLO A, B"],
  "setup": "This course asks you to choose a nurse expert to precept you in an area of interest, and that choice is only as good as your picture of what nurses do and where. Work through where the profession's roles actually sit, then name your own ground.",
  "foot": "This is ungraded practice.",
  "noscript": "This activity asks you to place nursing roles on a grid of hospital and non-hospital settings against the preparation each requires, match the four advanced practice roles to their scope and education, judge what a telehealth role adds, decide where a preceptor relationship crosses a professional boundary, and draft the plan section of your initial journal."
}
META*/

window.__NS_JS__ = {
  key: "__NS__",
  steps: [
    {
      type: "sort",
      layout: "matrix",
      title: "Put each role where it actually sits",
      help: "Tap a role, then tap the cell where it belongs. Tap a placed role to take it back.",
      hint: "Two questions decide every cell. Does the work happen inside a hospital, and could a nurse start it the week after passing the NCLEX?",
      retryHint: "Chapter 1 says some settings are not immediately open to new nurses because they need added educational preparation or work experience. Find the roles that fits.",
      poolLabel: "Roles held by registered nurses",
      rows: [
        { id: "hosp", label: "In a hospital" },
        { id: "out", label: "Outside a hospital" }
      ],
      cols: [
        { id: "open", label: "Open to a new BSN graduate" },
        { id: "more", label: "Needs added education or experience" }
      ],
      items: [
        { id: "r1", text: "Staff nurse on a medical-surgical inpatient unit", bin: "hosp|open" },
        { id: "r2", text: "Night shift nurse on a hospital rehabilitation floor", bin: "hosp|open" },
        { id: "r3", text: "Certified registered nurse anesthetist in the surgical suite", bin: "hosp|more" },
        { id: "r4", text: "Nurse manager accountable for a unit budget and staffing plan", bin: "hosp|more" },
        { id: "r5", text: "Home health nurse visiting patients in the two weeks after discharge", bin: "out|open" },
        { id: "r6", text: "Public health nurse on a community immunization team", bin: "out|open" },
        { id: "r7", text: "Family nurse practitioner running a primary care panel at a community health center", bin: "out|more" },
        { id: "r8", text: "Nurse entrepreneur who built a service around a gap she identified in home care", bin: "out|more" }
      ],
      missHint: "Ask what each role requires before a nurse can hold it, not how hard the work is.",
      explain: "Hospitals still employ about 63 percent of registered nurses, with ambulatory care near 11 percent and public and community health, home health, and extended care making up most of the rest. That left column is where your classmates will start. The right column divides two ways: advanced practice roles need a master's or doctoral degree, while management and entrepreneurship need work experience and a different kind of knowledge. Both count as added preparation, and both are worth knowing about now because they shape where this degree can take you."
    },
    {
      type: "match",
      title: "Sort out the advanced practice roles",
      help: "Tap a role on the left, then tap the description on the right that fits it.",
      hint: "All four are advanced practice registered nurses and all four are prepared at the graduate level. What separates them is who they care for and where.",
      retryHint: "Two of these four work mostly in operating rooms and birth settings. Place those first and the others follow.",
      leftLabel: "Advanced practice role",
      rightLabel: "What the role does",
      left: [
        { id: "np", text: "Nurse practitioner (NP)" },
        { id: "cns", text: "Clinical nurse specialist (CNS)" },
        { id: "cnm", text: "Certified nurse-midwife (CNM)" },
        { id: "crna", text: "Certified registered nurse anesthetist (CRNA)" }
      ],
      right: [
        { id: "m1", for: "np", text: "Carries a panel of patients, assesses and diagnoses them, and manages their care over time, often as their main provider" },
        { id: "m2", for: "cns", text: "Works as the expert clinician for a population or specialty and improves practice across a unit or system rather than carrying a panel" },
        { id: "m3", for: "cnm", text: "Provides care through pregnancy and birth along with gynecologic and newborn care" },
        { id: "m4", for: "crna", text: "Delivers anesthesia and monitors the patient through surgery and other procedures" }
      ],
      explain: "Chapter 1 groups nurse practitioners, clinical nurse specialists, certified nurse-midwives, and certified registered nurse anesthetists together as advanced practice nurses, and all four require graduate preparation. The same chapter notes that master's and doctoral degrees also prepare nurses as researchers, educators, and administrators, which are the indirect roles from the grid you just built. Knowing which of these you are drawn to is the beginning of the career plan your portfolio will ask for later in this course."
    },
    {
      type: "choice",
      title: "The role that did not exist a generation ago",
      help: "Suppose you wanted to build your practicum around telehealth. Choose what you would have to sort out that a bedside placement never raises.",
      hint: "Telehealth needs everything bedside nursing needs, and then something else on top.",
      retryHint: "Think about what changes when your patient is in another state and you are not.",
      options: [
        {
          text: "Licensure and the regulations that govern practising across state lines, on top of the clinical and technology skills the work already demands.",
          ok: true,
          fb: "That is the part people underestimate. Chapter 1 lists basic nursing skills and technology skills as the entry price for telehealth, then adds legal and regulatory issues, nursing licensure, and new legislation. Your license is granted by a state, and the patient's location is what decides which state's rules apply."
        },
        {
          text: "Nothing structural. Telehealth is the same assessment work delivered over video, so a nurse who can assess in person can assess remotely.",
          ok: false,
          fb: "The assessment skills do transfer, which is why the chapter lists basic nursing skills first. But the chapter also names legal and regulatory issues and licensure, and those are not skills you bring, they are permissions you have to hold."
        },
        {
          text: "Mainly equipment cost, since the technology is the barrier to reaching underserved patients.",
          ok: false,
          fb: "Reaching underserved populations is exactly what the chapter names as the promise of telehealth, so you have the purpose right. The obstacle it flags is regulatory rather than financial."
        },
        {
          text: "You would need an advanced practice degree first, because telehealth is a nurse practitioner role.",
          ok: false,
          fb: "Advanced practice nurses do a great deal of telehealth, but the chapter presents it as an evolving practice opportunity rather than a role closed to registered nurses. Triage lines, chronic disease monitoring, and post-discharge follow up are all RN work."
        }
      ]
    },
    {
      type: "choice",
      title: "Where the preceptor relationship stops",
      help: "A preceptor describes last term's student: she added the preceptor on three apps, texted her about a breakup at midnight, and then asked her to sign off hours she had not worked. Decide where that relationship went wrong first.",
      hint: "This week's reading on communication and collaboration separates a social relationship from a professional one. A preceptor relationship is the second kind.",
      retryHint: "The reading puts professional behavior on a continuum with a zone of helpfulness in the middle. Ask which way this drifts.",
      options: [
        {
          text: "It drifted out of the zone of helpfulness into over-involvement well before the hours request, once the relationship started running on personal disclosure rather than the learning.",
          ok: true,
          fb: "That is the reading's point. Professional behavior sits on a continuum from under-involvement through a zone of helpfulness to over-involvement, and maintaining that boundary is the nurse's responsibility, not the student's or the patient's. The false hours request is where the harm became visible, but the boundary had already gone."
        },
        {
          text: "It went wrong only at the hours request. Everything before that was just a friendly working relationship.",
          ok: false,
          fb: "Friendliness is not the problem, and distance is its own failure. The reading treats over-involvement as a real risk on the same continuum as neglect, and the drift matters because it is what made the last request thinkable."
        },
        {
          text: "It went wrong as soon as any personal conversation happened. A preceptor should keep the relationship strictly to tasks.",
          ok: false,
          fb: "That is the other end of the continuum. The reading calls it under-involvement, and describes distancing and disinterest as a failure too. Therapeutic use of self depends on some self-awareness and some disclosure, used deliberately."
        },
        {
          text: "The student was at fault throughout, so there is nothing a preceptor can do differently.",
          ok: false,
          fb: "The reading is explicit that establishing and maintaining professional boundaries is the nurse's responsibility. Naming the boundary early is part of the preceptor's job, and it is part of yours when you are the one precepting."
        }
      ]
    },
    {
      type: "write",
      title: "Name your ground",
      label: "The setting, the nurse expert, and the area of interest you will build this practicum around",
      placeholder: "I want my practicum in... with... because the area I want to develop is...",
      tie: "Use this for the plans for course completion section of your Initial Journal, Preceptor Agreement, and Time & Attendance Log. It is not your submission.",
      saved: "Saved on this device. Take it to your faculty conference.",
      doneTitle: "Practice complete",
      doneMeta: "You can place a nursing role in its setting, say what it requires, and name the expert you want to learn from."
    }
  ]
};
