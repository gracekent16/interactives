/*META
{
  "pageTitle": "Practicum Hours Planner",
  "title": "Practicum Hours Planner",
  "lede": "Plan a precepted practicum across six weeks, then write the opening of your initial journal.",
  "pills": ["CSLO A, B"],
  "role": "Senior BSN student beginning a precepted capstone practicum",
  "setup": "You have been placed on the medical-surgical unit at Cedar Branch Regional Medical Center. Rosalind signed your preceptor agreement this morning and Dr. Whitfield wants a planning log by Wednesday. Nothing is scheduled yet, and the plan you build has to survive a term.",
  "cast": [
    { "initials": "RF", "name": "Rosalind Ferrer, MSN, RN", "role": "Preceptor, medical-surgical unit" },
    { "initials": "MW", "name": "Dr. Marcus Whitfield", "role": "Faculty clinical coordinator" }
  ],
  "noscript": "This activity asks you to decide which activities count as practicum hours, set the weekly hours for the five practicum categories across six weeks, respond to a scheduling change, judge which reflection sentence shows movement on Benner's stages, and draft the opening of your initial journal.",
  "basedOn": {
    "title": "Practicum Overview table, Practicum Documents page",
    "note": "The weekly hour allocation, the preceptor agreement, and the Time & Attendance Log"
  }
}
META*/

var WEEKS = 6;
var GOAL = 90;

var CATS = [
  {
    id: "conf",
    label: "Preceptor and faculty conferences",
    counts: "Standing check-ins with Rosalind and Dr. Whitfield",
    target: 2
  },
  {
    id: "prec",
    label: "Precepted practice experiences",
    counts: "Hours on the unit with Rosalind present",
    target: 5
  },
  {
    id: "serv",
    label: "Service learning",
    counts: "Work at the Nutrition Center with Imani",
    target: 3
  },
  {
    id: "qi",
    label: "Quality improvement work",
    counts: "Building the capstone project on the unit",
    target: 3
  },
  {
    id: "jour",
    label: "Journal writing",
    counts: "Weekly reflection on your practicum experiences",
    target: 1.5
  }
];

function fmtHours(n) {
  return (Math.round(n * 10) / 10).toString().replace(/\.0$/, "");
}

window.__NS_JS__ = {
  key: "__NS__",
  steps: [
    {
      type: "sort",
      title: "Which hours land on the practicum log",
      help: "Tap a card, then tap the column it belongs in. Tap a placed card to send it back.",
      hint: "Your four credit hours split into two separate obligations. Only one of them is logged on the Time and Attendance Log.",
      retryHint: "Ask yourself whether Rosalind or Imani would see you doing it.",
      poolLabel: "Your first week",
      bins: [
        { id: "prac", label: "Practicum hours", sub: "Goes on the Time and Attendance Log" },
        { id: "theory", label: "Theory hours", sub: "Coursework, not logged as practicum" }
      ],
      items: [
        { id: "i1", text: "A full shift shadowing Rosalind on the medical-surgical unit", bin: "prac" },
        { id: "i2", text: "Your Tuesday evening conference call with Rosalind and Dr. Whitfield", bin: "prac" },
        { id: "i3", text: "Walking the Nutrition Center with Imani to scope a screening event", bin: "prac" },
        { id: "i4", text: "Writing this week's journal entry about what you saw on the unit", bin: "prac" },
        { id: "i5", text: "Reading Black chapters 1, 12, and 15 with the publisher slides", bin: "theory" },
        { id: "i6", text: "Drafting your Discussion #1 comparison of the ANA, NBNA, and ICN", bin: "theory" }
      ],
      missHint: "Two of these are coursework you do alone at home.",
      explain: "This course carries four credit hours that divide into two obligations. Two theory credits equal 30 contact hours of reading, discussion, and written assignments. Two practicum credits equal 90 contact hours of precepted practice, conferences, service learning, quality improvement work, and journaling. Only the second set goes on your Time and Attendance Log, and journal writing counts there because the reflection is part of the practicum."
    },
    {
      type: "sim",
      title: "Build the weekly plan",
      help: "Use the plus and minus buttons to set your weekly hours in each category. The meter tracks the six week total your plan produces.",
      hint: "The Practicum Overview table on the Practicum Documents page gives a weekly figure for every one of these five categories. Start with the category that gets the most time.",
      retryHint: "Your total can look reasonable while the split is wrong. Ask which category the practicum is actually built around.",
      explain: "The published weekly plan is two hours of conferences, five hours of precepted practice, three hours of service learning, three hours of quality improvement, and one and a half hours of journaling. Precepted practice carries the largest share because that is where the mentor relationship in outcome A forms. Notice your total: those five categories come to 87 hours across six weeks, while the practicum requirement is 90. Confirm with Dr. Whitfield where the remaining three hours belong before you submit your log.",
      run: function (host, api) {
        var weekly = {};
        var touched = false;
        var rows = {};

        CATS.forEach(function (c) { weekly[c.id] = 0; });

        function total() {
          var sum = 0;
          CATS.forEach(function (c) { sum += weekly[c.id]; });
          return sum * WEEKS;
        }

        var board = api.el("div", "alloc");

        CATS.forEach(function (c) {
          var row = api.el("div", "alloc-row");
          var name = api.el("div", "alloc-name",
            "<strong>" + api.esc(c.label) + "</strong>" +
            "<span>" + api.esc(c.counts) + "</span>");

          var ctl = api.el("div", "alloc-ctl");
          var minus = api.btn("alloc-btn", "&minus;");
          var val = api.el("span", "alloc-val");
          var plus = api.btn("alloc-btn", "+");
          minus.setAttribute("aria-label", "Decrease weekly hours for " + c.label);
          plus.setAttribute("aria-label", "Increase weekly hours for " + c.label);
          ctl.appendChild(minus);
          ctl.appendChild(val);
          ctl.appendChild(plus);

          var tot = api.el("div", "alloc-tot");
          var flag = api.el("div", "alloc-flag");

          function paint() {
            var w = weekly[c.id];
            val.innerHTML = "<strong>" + fmtHours(w) + "</strong> h per week";
            tot.textContent = fmtHours(w * WEEKS) + " h over six weeks";
            minus.disabled = w <= 0;
            plus.disabled = w >= 12;
          }

          function bump(delta) {
            var next = weekly[c.id] + delta;
            if (next < 0 || next > 12) { return; }
            weekly[c.id] = Math.round(next * 2) / 2;
            touched = true;
            paint();
            paintTotal();
            api.ready(true);
            api.announce(c.label + " set to " + fmtHours(weekly[c.id]) +
              " hours per week, " + fmtHours(weekly[c.id] * WEEKS) +
              " hours over six weeks. Plan total is now " + fmtHours(total()) + " hours.");
          }

          minus.addEventListener("click", function () { bump(-0.5); });
          plus.addEventListener("click", function () { bump(0.5); });

          row.appendChild(name);
          row.appendChild(ctl);
          row.appendChild(tot);
          row.appendChild(flag);
          board.appendChild(row);

          rows[c.id] = { row: row, flag: flag, paint: paint };
          paint();
        });

        var meter = api.el("div", "meter");
        var track = api.el("div", "meter-track");
        var fill = api.el("div", "meter-fill");
        var num = api.el("div", "meter-num");
        track.appendChild(fill);
        meter.appendChild(track);
        meter.appendChild(num);

        function paintTotal() {
          var t = total();
          fill.style.width = Math.min(100, (t / GOAL) * 100) + "%";
          num.innerHTML = "<strong>" + fmtHours(t) + " h</strong> planned across six weeks";
        }

        host.appendChild(api.el("div", "brief",
          "Rosalind has six weeks of availability and Dr. Whitfield wants your planning log by " +
          "Wednesday. Set each category to the weekly hours the Practicum Overview assigns it."));
        host.appendChild(meter);
        host.appendChild(board);
        paintTotal();
        api.resize();

        function clearMarks() {
          CATS.forEach(function (c) {
            rows[c.id].row.classList.remove("good", "warn");
            rows[c.id].flag.textContent = "";
          });
        }

        return {
          isReady: function () { return touched; },
          check: function () {
            clearMarks();
            var off = [];
            CATS.forEach(function (c) {
              var r = rows[c.id];
              if (weekly[c.id] === c.target) {
                r.row.classList.add("good");
                r.flag.textContent = "Matches the plan";
              } else {
                r.row.classList.add("warn");
                r.flag.textContent = weekly[c.id] > c.target ? "Too high" : "Too low";
                off.push(c.label.toLowerCase());
              }
            });
            api.resize();
            if (!off.length) {
              return {
                ok: true,
                text: "Every category sits where the Practicum Overview puts it. Rosalind can " +
                  "sign this plan."
              };
            }
            api.announce(off.length + " categories still need adjusting.");
            return {
              ok: false,
              text: "Each row now says whether it is too high or too low. Start with " +
                off[0] + "."
            };
          },
          retry: function () { clearMarks(); api.resize(); },
          reveal: function () {
            CATS.forEach(function (c) {
              weekly[c.id] = c.target;
              rows[c.id].paint();
            });
            clearMarks();
            paintTotal();
            api.resize();
            api.announce("The published weekly allocation is now loaded.");
          }
        };
      }
    },
    {
      type: "choice",
      title: "Week three falls apart",
      help: "Read what Rosalind tells you, then choose your next move.",
      hint: "Your planning log was approved by your preceptor. That approval is what makes a change something you have to report.",
      retryHint: "The 90 hours are tied to two practicum credit hours. Ask what is allowed to move and what is not.",
      who: {
        initials: "RF",
        name: "Rosalind Ferrer",
        line: "I just got pulled to a conference the whole of week three. Your log has five precepted hours with me that week and I cannot cover them."
      },
      options: [
        {
          text: "Move those five hours to a week Rosalind is on the unit, keep the six week total at 90, and send the revised log to her and Dr. Whitfield.",
          ok: true,
          fb: "Right. The log is a plan your preceptor approved, so changes to dates, times, or activities go back to her and to faculty with the revised log. The 90 hour total does not move."
        },
        {
          text: "Drop the five hours. Ninety was the target, not a floor.",
          ok: false,
          fb: "Ninety is a requirement, not a target. Two practicum credit hours at three contact hours each across the standard term is what produces the figure, so hours you drop have to be made up somewhere."
        },
        {
          text: "Count the conference Rosalind is attending as your precepted hours for that week.",
          ok: false,
          fb: "Precepted hours mean practice with your preceptor present alongside you. Her attending a conference in another city is not your practice experience."
        },
        {
          text: "Fill the gap with textbook reading and midterm review so the week is not wasted.",
          ok: false,
          fb: "Reading is theory work under a separate 30 contact hours. Theory cannot backfill the practicum column, which is the distinction you sorted in the first step."
        }
      ]
    },
    {
      type: "choice",
      title: "Write a reflection that shows something",
      help: "Your journal asks you to place yourself on Benner's stages. Choose the sentence that earns that claim.",
      hint: "The journal reflection asks about the process of developing your plan and your current status. A status claim needs behavior behind it.",
      retryHint: "Three of these tell the reader a conclusion. One shows the reader what changed.",
      who: {
        initials: "MW",
        name: "Dr. Marcus Whitfield",
        line: "Four of you sent me draft reflections tonight. Tell me which one I can actually score."
      },
      options: [
        {
          text: "On Monday I waited for Rosalind to tell me which patient to see first. By Thursday I read the handoff myself, flagged the post-op patient with the rising temperature, and asked her to check my reasoning.",
          ok: true,
          fb: "This one names what you noticed, what you decided, and who you checked it with. Movement between Benner's stages shows up as a change in what you see and act on without being told, which is exactly what this sentence puts on the page."
        },
        {
          text: "I have moved from the novice stage to the competent stage during week one of my practicum.",
          ok: false,
          fb: "This asserts a stage with nothing behind it. A reader cannot tell what you did differently, and a week is a short time to claim two stages of movement."
        },
        {
          text: "I completed all of my assigned hours this week and submitted my Time and Attendance Log before the deadline.",
          ok: false,
          fb: "That is compliance, not clinical reasoning. It belongs in your log, not in the part of the journal that asks where you are as a practitioner."
        },
        {
          text: "Benner describes five stages of skill acquisition running from novice through advanced beginner, competent, and proficient to expert.",
          ok: false,
          fb: "Restating the framework is not self-assessment. The journal asks where you sit inside it and what evidence puts you there."
        }
      ]
    },
    {
      type: "write",
      title: "Open your initial journal",
      label: "The first three or four sentences Dr. Whitfield will read",
      placeholder: "My first week at Cedar Branch Regional put me on a medical-surgical unit where...",
      tie: "Use this as a starting point for your Initial Journal, Preceptor Agreement, and Time & Attendance Log submission. It is not your submission.",
      saved: "Saved on this device. Carry it into your journal draft.",
      doneTitle: "Practice complete",
      doneMeta: "You have a defensible 90 hour plan and a reflection that shows rather than asserts."
    }
  ]
};
