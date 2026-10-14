/*META
{
  "pageTitle": "From Problem to PICOT",
  "title": "From Problem to PICOT",
  "lede": "Choose the practice problem your literature review will actually be able to carry, then write the PICOT and one goal.",
  "pills": ["CSLO D, E"],
  "setup": "Assignment #2 asks for the problem, a PICOT (problem, intervention, comparison, outcome, and time), a purpose with SMART goals, and the methods you will use to measure the outcome. A problem you cannot measure will collapse in every later section.",
  "noscript": "This activity asks you to choose a practice problem, name the comparison and the outcome that problem can support, repair the goal so it can be met or unmet, and draft the PICOT statement and one SMART goal for Assignment #2."
}
META*/

window.__NS_JS__ = {
  key: "__NS__",
  steps: [
    {
      type: "choice",
      title: "Choose the problem the review will carry",
      help: "Pick one problem and press Check. Any of the three can be locked in. The next steps use the one you pick, and a vague problem will show you its cost.",
      hint: "A PICOT needs one population, one intervention, one comparison, one outcome, and a time. Read each problem for whether those five can exist.",
      retryHint: "Any of these can be your problem. Choose one and check it.",
      options: [
        {
          text: "Older adults with heart failure leave without understanding how to take their diuretic.",
          ok: true,
          fb: "This one can take a comparison and an outcome. The next steps will ask you for both."
        },
        {
          text: "Adults 65 and older fall during the first two nights after admission.",
          ok: true,
          fb: "This one names a group, a window, and a countable event. The next steps can be written against it."
        },
        {
          text: "Patient satisfaction on the unit should be better.",
          ok: true,
          fb: "You can start here. There is no group, no intervention, and no countable outcome. The next two steps are where that costs you."
        }
      ],
      onPick: function (o, S) {
        var t = o.text;
        if (t.indexOf("heart failure") !== -1) S.problem = "hf";
        else if (t.indexOf("fall") !== -1) S.problem = "falls";
        else S.problem = "broad";
      }
    },
    {
      type: "choice",
      title: "Name the comparison",
      help: "A comparison is the care that happens now, held up against the change you want to test.",
      hint: "If you cannot say what the new care is being compared with, the PICOT has no C.",
      retryHint: "\"Better care\" is not a comparison. Name the current practice, or admit the problem is not ready.",
      build: function (S) {
        var p = S.problem || "hf";
        if (p === "broad") {
          return {
            title: "This problem has no comparison yet",
            hint: "Read the options for the move that rescues the review, not for a comparison this wording cannot support.",
            retryHint: "You cannot compare an intervention you have not named with a practice you have not named.",
            explain: "A PICOT comparison is the current practice you will hold the new one against. \"Patient satisfaction should be better\" names neither. Assignment #2's project section cannot be written until the problem is narrowed to one group and one change. That narrowing is the cost of the choice you just made, and it is cheaper to pay it here than in the paper.",
            options: [
              {
                text: "Stop and narrow it. Name one group and one change before you write a comparison. This wording cannot support a PICOT.",
                ok: true,
                fb: "That is the honest move. A literature review built on \"be better\" will wander, because there is nothing for the articles to match."
              },
              {
                text: "Compare satisfaction with last year's satisfaction, and leave the intervention unnamed.",
                ok: false,
                fb: "A year-to-year number with no intervention is not a comparison. You still have not said what would change."
              },
              {
                text: "Use \"usual care\" as the comparison. Every project can say that.",
                ok: false,
                fb: "Usual care only works when you can describe it. Here you cannot, because you have not said what care is failing."
              },
              {
                text: "Skip the comparison. The outcome is satisfaction, and that is enough.",
                ok: false,
                fb: "Assignment #2 scores the PICOT, which includes the comparison. Dropping it does not make the problem specific."
              }
            ]
          };
        }
        if (p === "falls") {
          return {
            title: "What are you comparing the new rounding with?",
            explain: "The comparison is current practice, described specifically enough that a reader knows what the new rounding replaces. \"Standard care\" with no description hides the C. For falls in the first two nights, the comparison is whatever precaution the unit uses now.",
            options: [
              {
                text: "The unit's current fall precautions, with no added rounding in the first two nights.",
                ok: true,
                fb: "A reader can picture both sides. New rounding in the first two nights, compared with the precautions you already use."
              },
              {
                text: "Best practice in general.",
                ok: false,
                fb: "Best practice is a hope, not a description of what your unit does tonight. The comparison has to be the care you are actually replacing."
              },
              {
                text: "Units that already have low fall rates.",
                ok: false,
                fb: "Those units are a different population. Your comparison is the care on your unit, not someone else's results."
              },
              {
                text: "No comparison. Falls either happen or they do not.",
                ok: false,
                fb: "Without a comparison you cannot tell whether rounding changed anything, or whether falls would have dropped anyway."
              }
            ]
          };
        }
        return {
          title: "What are you comparing teach-back with?",
          explain: "For the heart failure teaching gap, the comparison is the discharge teaching patients get now. Name it. A PICOT that says \"compared with better education\" has not named a comparison.",
          options: [
            {
              text: "The unit's usual discharge teaching about the diuretic, with no teach-back.",
              ok: true,
              fb: "Both sides are visible. Teach-back on the diuretic, compared with the teaching the unit already gives."
            },
            {
              text: "Whatever education the patient remembers from clinic.",
              ok: false,
              fb: "That is not a practice you control or can describe the same way for every patient. The comparison has to be the unit's current teaching."
            },
            {
              text: "A different hospital's heart failure program.",
              ok: false,
              fb: "Another hospital is not the care your patients receive tonight. Compare against your own current teaching."
            },
            {
              text: "No comparison, because teach-back is obviously better.",
              ok: false,
              fb: "The literature review exists to test that assumption against evidence. Dropping the comparison skips the work Assignment #2 grades."
            }
          ]
        };
      }
    },
    {
      type: "choice",
      title: "Name an outcome you could measure",
      help: "The outcome is the change you would count, and the time is when you would count it.",
      hint: "If you cannot say what would be different, and by when, the project has no endpoint.",
      retryHint: "Satisfaction, awareness, and \"better\" are not outcomes until you say how you would know.",
      build: function (S) {
        var p = S.problem || "hf";
        if (p === "broad") {
          return {
            title: "The outcome is still missing",
            explain: "An outcome is an observable result at a stated time. \"Better satisfaction\" has neither a behavior nor a date. This is the same cost as the last step, one section later in the paper: methods to measure the outcome cannot be written for a result you never defined.",
            options: [
              {
                text: "You still cannot write the outcome. Narrow the problem to one countable result before you draft methods.",
                ok: true,
                fb: "Measurement methods come after the outcome, not instead of it. The paper's methods section would be fiction until this is fixed."
              },
              {
                text: "Measure satisfaction with a survey you will design later. That is specific enough.",
                ok: false,
                fb: "A survey you have not defined does not say what change would count. The outcome is still unnamed."
              },
              {
                text: "Use the hospital's overall rating. If it rises, the project worked.",
                ok: false,
                fb: "An overall rating moves for dozens of reasons. It cannot tell you whether your unnamed change did anything."
              },
              {
                text: "Skip the outcome and describe the activities you will hold.",
                ok: false,
                fb: "Activities are the intervention. Assignment #2 also scores the outcome and the methods used to measure it."
              }
            ]
          };
        }
        if (p === "falls") {
          return {
            title: "What would tell you the rounding worked?",
            explain: "A fall rate in a named window is an outcome you can count. \"Fewer incidents\" with no window, and \"staff will be more aware,\" are not. Time belongs in the same sentence as the outcome.",
            options: [
              {
                text: "Fewer falls among adults 65 and older during the first two nights, counted over the next 30 days of admissions.",
                ok: true,
                fb: "The result is countable, the group is the group in the problem, and the time is stated. Methods can now be written against this."
              },
              {
                text: "Staff will feel more aware of fall risk.",
                ok: false,
                fb: "Awareness is not the outcome your problem named. The problem is falls. A feeling is not a fall rate."
              },
              {
                text: "The unit will be safer.",
                ok: false,
                fb: "Safer is the aim in ordinary language. It is not yet an outcome, because you have not said what you would count or when."
              },
              {
                text: "Zero falls, permanently, starting this weekend.",
                ok: false,
                fb: "A permanent zero is not attainable, so it fails as a goal even though falls are the right event. The outcome has to be a change you could actually observe."
              }
            ]
          };
        }
        return {
          title: "What would tell you the teach-back worked?",
          explain: "Understanding is not visible until you say how you would see it. A return demonstration, or a 7-day readmission you defined in advance, can be an outcome. \"Patients will know their medication\" cannot.",
          options: [
            {
              text: "Within 7 days of discharge, fewer of these patients are readmitted, and each of them can state the diuretic's purpose before they leave.",
              ok: true,
              fb: "You named two observable results and a time. That is enough for a measurement plan. You would still choose one primary outcome in the paper so the project stays narrow."
            },
            {
              text: "Patients will understand their medication better.",
              ok: false,
              fb: "Understand is the hope. It becomes an outcome only when you say the words they must state, or the event you will count, and when."
            },
            {
              text: "Nurses will document that teaching was done.",
              ok: false,
              fb: "Documentation shows the intervention happened. It does not show the outcome, which is whether the patient can manage the diuretic."
            },
            {
              text: "Heart failure will no longer be a problem on the unit.",
              ok: false,
              fb: "That is larger than any one project and it has no time. The outcome has to match the narrow problem you chose."
            }
          ]
        };
      }
    },
    {
      type: "choice",
      title: "Turn it into one SMART goal",
      help: "Choose the goal that could sit under Purpose and SMART Goals in the literature review.",
      hint: "Specific, measurable, attainable, relevant to the problem you chose, and time-bound.",
      retryHint: "A goal that cannot be missed is not a goal. Look for the number and the date.",
      build: function (S) {
        var p = S.problem || "hf";
        if (p === "falls") {
          return {
            explain: "This goal is specific to the group and the nights in the problem, it has a number and a date, and it is relevant because falls were the outcome you just defined. The literature review's purpose section is this sentence, expanded, not a second and vaguer aim.",
            options: [
              {
                text: "Within 30 days, falls among adults 65 and older in the first two nights after admission will drop by 20 percent from the unit's current rate.",
                ok: true,
                fb: "A reader could tell, on day 30, whether you hit it. That is the test."
              },
              {
                text: "Keep older adults safe from falls going forward.",
                ok: false,
                fb: "There is no number and no end date, so the goal can never be scored unmet."
              },
              {
                text: "Reduce all incidents on the unit by the end of the year.",
                ok: false,
                fb: "All incidents is a different, wider problem than the one you chose. The goal has to match the PICOT."
              },
              {
                text: "Have nurses complete a fall module sometime this quarter.",
                ok: false,
                fb: "A module is an activity, not the outcome. Completing education does not say whether anyone fell."
              }
            ]
          };
        }
        if (p === "broad") {
          return {
            title: "Write the goal only after you narrow the problem",
            explain: "A SMART goal cannot be written for a problem with no group and no outcome. The sentence below is what the purpose section needs once you have narrowed it. Until then, any goal you draft will be decorative.",
            options: [
              {
                text: "Do not draft the goal yet. First replace \"satisfaction should be better\" with one group, one change, and one countable result.",
                ok: true,
                fb: "The purpose section is downstream of the problem. Writing a polished sentence on top of a vague problem hides the gap from you and not from the reader."
              },
              {
                text: "Increase patient satisfaction by the end of the practicum.",
                ok: false,
                fb: "There is a date and still no definition of satisfaction, no baseline, and no amount of change. It looks like a goal and cannot be scored."
              },
              {
                text: "Improve the unit.",
                ok: false,
                fb: "This is the original problem with fewer words. It is not a goal."
              },
              {
                text: "Make 100 percent of patients happy within a week.",
                ok: false,
                fb: "It has a number and a date, and it is not attainable or relevant to a defined clinical problem. A number alone is not SMART."
              }
            ]
          };
        }
        return {
          explain: "The goal matches the heart failure problem, names the action the patient will perform, and gives you a date. Chapter 11's rule for a clinical goal is the same shape: an action, and terms under which it is met or unmet. \"The patient will understand\" fails that test. \"The patient will state\" can pass it.",
          options: [
            {
              text: "Before discharge, each older adult with heart failure in the project will state the purpose of the diuretic and one sign that should send them back, checked by teach-back.",
              ok: true,
              fb: "The action is observable, the group is the group in the problem, and the time is before discharge."
            },
            {
              text: "Help heart failure patients feel confident about their medications.",
              ok: false,
              fb: "Confident is not an action you can see, and there is no time."
            },
            {
              text: "Provide teach-back to every patient.",
              ok: false,
              fb: "That is the intervention, written as if it were the goal. The goal is what the patient will be able to do."
            },
            {
              text: "End heart failure readmissions this month.",
              ok: false,
              fb: "Ending every readmission in a month is not attainable, and it drops the teaching outcome you are actually set up to measure."
            }
          ]
        };
      }
    },
    {
      type: "write",
      title: "Draft the PICOT and one goal",
      label: "One PICOT sentence, then one SMART goal, in the shape Assignment #2 asks for",
      placeholder: "In older adults with heart failure, teach-back compared with usual discharge teaching will... by... Goal: Before discharge, the patient will...",
      tie: "Assignment #2, Literature Review on Quality Improvement Project, scores the PICOT and the SMART goal as their own sections. This draft is practice, not the paper.",
      saved: "Saved on this device.",
      doneTitle: "Practice complete",
      doneMeta: "You can tell a problem that can carry a PICOT from one that only sounds like a topic."
    }
  ]
};
