/*META
{
  "pageTitle": "Stress Test Your Intervention",
  "title": "Stress Test Your Intervention",
  "lede": "Run one discharge intervention against four units and see where it holds, where it breaks, and which measure would have told you.",
  "pills": ["CSLO A-F"],
  "setup": "The capstone has to explain why this intervention, how you will implement it, and how you will know it worked. An intervention that looks good on your own unit can fail as soon as the staffing, the language, or the outcome window changes. Predict each unit before you trust the plan.",
  "noscript": "This activity asks you to predict whether a teach-back plan for new anticoagulants holds or breaks on four different units, then choose the measure that would show the change, and draft the rationale and measurement sentences for the capstone."
}
META*/

var UNITS = [
  {
    id: "day",
    name: "Day shift, medical unit",
    detail: "Patients read English. A pharmacist is on the unit. Families are often in the room at discharge.",
    holds: true,
    result: "Holds. Teach-back happens with the pharmacist in the room, and return visits within 7 days drop on this unit."
  },
  {
    id: "eve",
    name: "Evening shift, same hospital",
    detail: "No pharmacist after 5 p.m. Families are usually gone. The script is a form the nurse is asked to sign.",
    holds: false,
    result: "Breaks. The form gets signed and the conversation does not happen. The 7-day rate does not move."
  },
  {
    id: "lang",
    name: "A unit where most patients read Spanish",
    detail: "The teach-back script and the pill card exist only in English. The outcome is averaged across all discharges.",
    holds: false,
    result: "Breaks. English-speaking patients improve, so the average looks better, and Spanish-speaking patients do not get the intervention."
  },
  {
    id: "icu",
    name: "Intensive care, then step-down",
    detail: "Patients leave intensive care for step-down, not for home. The teach-back is aimed at going home on a new anticoagulant.",
    holds: false,
    result: "Breaks. The intervention never reaches the discharge that matters, so a home-teaching measure barely changes."
  }
];

function unitById(id) {
  for (var i = 0; i < UNITS.length; i++) {
    if (UNITS[i].id === id) return UNITS[i];
  }
  return null;
}

window.__NS_JS__ = {
  key: "__NS__",
  steps: [
    {
      type: "sim",
      title: "Predict each unit before you trust the average",
      help: "For each unit, choose whether this teach-back plan holds or breaks. You need a judgment on all four before Check.",
      hint: "The intervention is teach-back before discharge for patients starting an anticoagulant, aimed at fewer return visits within 7 days. Ask what the plan assumed that this unit does not have.",
      retryHint: "An average can improve while the plan fails the patients it skipped. Read the evening shift and the Spanish-speaking unit again.",
      explain: "The plan assumed a pharmacist, a family, an English script, and a discharge home. The day shift has all four, so it holds. The evening shift has a form and no conversation. The Spanish-speaking unit improves the average by helping the patients who already read English. Intensive care never reaches the discharge the teaching was built for. A capstone rationale that says \"teach-back works\" without naming these conditions will not survive a unit that lacks them. The final project asks for that rationale in peer-reviewed support, and for methods that would detect the change.",
      run: function (host, api) {
        var picks = {};
        var cards = {};

        var brief = api.el("div", "brief",
          "<strong>The intervention.</strong> Teach-back before discharge for patients starting an anticoagulant. The aim is fewer return visits within 7 days.");
        host.appendChild(brief);

        var board = api.el("div", "progs");

        UNITS.forEach(function (u) {
          var card = api.el("article", "pcard");
          var head = api.el("div", "pcard-head", "<strong>" + api.esc(u.name) + "</strong>");
          var meta = api.el("p", "pmeta", api.esc(u.detail));
          var row = api.el("div", "radio-row");
          var hold = api.btn("tile", "Holds");
          var brk = api.btn("tile", "Breaks");
          hold.setAttribute("aria-pressed", "false");
          brk.setAttribute("aria-pressed", "false");
          hold.setAttribute("aria-label", u.name + ": this plan holds");
          brk.setAttribute("aria-label", u.name + ": this plan breaks");

          function choose(holds) {
            picks[u.id] = holds;
            hold.setAttribute("aria-pressed", holds ? "true" : "false");
            brk.setAttribute("aria-pressed", holds ? "false" : "true");
            var n = Object.keys(picks).length;
            api.announce(u.name + " marked " + (holds ? "holds" : "breaks") + ". " + n + " of 4 units judged.");
            api.ready(n === UNITS.length);
          }

          hold.addEventListener("click", function () { choose(true); });
          brk.addEventListener("click", function () { choose(false); });
          row.appendChild(hold);
          row.appendChild(brk);
          card.appendChild(head);
          card.appendChild(meta);
          card.appendChild(row);
          board.appendChild(card);
          cards[u.id] = { hold: hold, brk: brk };
        });

        host.appendChild(board);
        api.resize();

        function firstMiss() {
          for (var i = 0; i < UNITS.length; i++) {
            var u = UNITS[i];
            if (picks[u.id] !== u.holds) return u;
          }
          return null;
        }

        return {
          isReady: function () {
            return Object.keys(picks).length === UNITS.length;
          },
          check: function () {
            var miss = firstMiss();
            if (!miss) {
              return {
                ok: true,
                text: "The day shift holds. The other three break, and each one breaks for a different assumption the plan never stated."
              };
            }
            var said = picks[miss.id] ? "holds" : "breaks";
            var actual = miss.holds ? "holds" : "breaks";
            return {
              ok: false,
              text: miss.name + " " + actual + ". You marked it " + said + ". " + miss.result
            };
          },
          retry: function () {
            picks = {};
            UNITS.forEach(function (u) {
              cards[u.id].hold.setAttribute("aria-pressed", "false");
              cards[u.id].brk.setAttribute("aria-pressed", "false");
            });
            api.ready(false);
          },
          reveal: function () {
            UNITS.forEach(function (u) {
              picks[u.id] = u.holds;
              cards[u.id].hold.setAttribute("aria-pressed", u.holds ? "true" : "false");
              cards[u.id].brk.setAttribute("aria-pressed", u.holds ? "false" : "true");
            });
            api.ready(true);
            api.announce("Answers shown. Day shift holds. Evening shift, the Spanish-speaking unit, and intensive care break.");
          }
        };
      }
    },
    {
      type: "choice",
      title: "Which measure would have caught the failure?",
      help: "The 7-day return rate improved in the hospital average. Choose the measure that would have shown the plan breaking anyway.",
      hint: "An outcome average can hide a process that never reached half the patients. Ask what you would count at the bedside.",
      retryHint: "Readmission is the aim. It is a weak detector when the patients who were skipped disappear into the average.",
      options: [
        {
          text: "The percent of anticoagulant discharges with teach-back completed in the language the patient reads, counted separately for day shift, evening shift, and each unit.",
          ok: true,
          fb: "That is a process measure with enough detail to see the evening gap and the language gap. The 7-day rate can stay as the outcome. It cannot be the only number."
        },
        {
          text: "The hospital-wide 7-day return rate. If it falls, the intervention worked everywhere.",
          ok: false,
          fb: "That average is what hid the Spanish-speaking patients and the evening shift. A single hospital number cannot stress-test a plan."
        },
        {
          text: "How many nurses attended the in-service. Attendance means the practice changed.",
          ok: false,
          fb: "Attendance shows who sat in a room. It does not show whether teach-back happened at a discharge, in a language the patient could use."
        },
        {
          text: "Patient satisfaction with nursing care. A warmer score means the teaching worked.",
          ok: false,
          fb: "Satisfaction does not tell you whether the anticoagulant teaching happened or whether anyone came back in 7 days."
        }
      ],
      explain: "The capstone scores the rationale and the methods used to measure the outcome as their own part of the paper. Use an outcome measure for the aim, fewer return visits, and a process measure for whether the intervention actually reached people. Split that process measure by shift and by language, or the average will congratulate you for a plan that missed the evening and everyone who does not read English."
    },
    {
      type: "write",
      title: "Draft the rationale and the measure",
      label: "Two or three sentences for the capstone: why this intervention, where it would break, and what you will measure",
      placeholder: "Teach-back is the intervention because... It will break if... I will measure... and I will also count...",
      tie: "The Final Quality Improvement Capstone Project asks for the rationale, the implementation plan, and the methods used to measure outcomes, backed by the literature. This is practice for that section, not the project.",
      saved: "Saved on this device.",
      doneTitle: "Practice complete",
      doneMeta: "You can say where an intervention depends on conditions your unit may not have, and which number would reveal that."
    }
  ]
};
