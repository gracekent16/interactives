/*META
{
  "pageTitle": "Equity or Equality",
  "title": "Equity or Equality",
  "lede": "The report's aim is a fair chance at health, not an identical service for every person. Sort the plans.",
  "pills": ["CSLO E"],
  "setup": "Chapter 5 asks what nurses do about health equity. Equality gives everyone the same thing. Equity changes the support so that obstacles like poverty, language, or neighborhood do not decide who gets to be healthy.",
  "noscript": "This check asks you to sort plans into equality or equity, choose which equal-looking plan leaves a disparity in place, and write one equity move for your service learning project.",
  "basedOn": {
    "title": "The Future of Nursing 2020-2030, Chapter 5, The Role of Nurses in Improving Health Equity",
    "note": "Fair and just opportunities for health, against identical services that leave obstacles in place"
  }
}
META*/

window.__NS_JS__ = {
  key: "__NS__",
  steps: [
    {
      type: "sort",
      title: "Same resource, or a fair chance",
      help: "Tap a plan, then tap the column it belongs in. Tap a placed plan to take it back.",
      hint: "Ask whether the obstacle changed. If everyone received the same thing and the obstacle is still there, it is equality.",
      retryHint: "Equal hours and equal packets feel fair. Look at who still cannot use them.",
      poolLabel: "Plans a nurse might propose",
      bins: [
        { id: "eq", label: "Equality", sub: "Everyone gets the same thing" },
        { id: "ey", label: "Equity", sub: "Support shifts so the obstacle matters less" }
      ],
      items: [
        { id: "i1", text: "Every discharged patient gets the same two-page instruction sheet, in English.", bin: "eq" },
        { id: "i2", text: "The clinic offers the same Tuesday morning hours in every neighborhood.", bin: "eq" },
        { id: "i3", text: "Every school gets one nurse for the same number of hours, regardless of the asthma burden.", bin: "eq" },
        { id: "i4", text: "Patients who do not read English get the instructions in their language, and patients with no nearby pharmacy get the medication delivered.", bin: "ey" },
        { id: "i5", text: "The clinic adds evening hours in the neighborhood where most adults work shifts that make Tuesday morning impossible.", bin: "ey" },
        { id: "i6", text: "The school with the higher rate of uncontrolled asthma gets a nurse, a supply program, and a home-visit partnership.", bin: "ey" }
      ],
      missHint: "Identical hours are equality even when the need is not identical. The extra partnership is what makes the asthma plan equity.",
      explain: "The report's aim is fair and just opportunities for everyone to be as healthy as they can, which means removing obstacles, not handing every person an identical service. An English-only packet, identical clinic hours, and equal school-nurse time can all be defended as fair. They leave the disparity exactly where it was: with the patient who cannot read the packet, the worker who cannot come on Tuesday morning, and the school that already carries more asthma. Equity is the plan that changes the resource to fit the obstacle."
    },
    {
      type: "choice",
      title: "Which equal plan leaves the disparity standing?",
      help: "Your service learning site serves older adults, many of whom take two buses to get there. Choose the plan that looks equal and does not move equity.",
      hint: "Picture who still cannot attend. That person tells you whether the plan only looked fair.",
      retryHint: "A bus voucher and a phone option change the obstacle. A second identical flyer does not.",
      options: [
        {
          text: "Print twice as many of the same English flyers and post them in the same lobby.",
          ok: true,
          fb: "More of the same resource does not touch the bus ride or the language. It is equality at a larger volume, and the people who could not come still cannot come."
        },
        {
          text: "Offer the session a second time by phone for people who cannot make the trip, and send the steps in the language they read.",
          ok: false,
          fb: "That changes the obstacle. It is the equity plan, which is the one this question did not ask for."
        },
        {
          text: "Give bus vouchers to the participants who would otherwise transfer twice.",
          ok: false,
          fb: "The voucher is aimed at the obstacle. That is equity, not the equal-looking plan."
        },
        {
          text: "Move one session to the building where those two-bus riders already live.",
          ok: false,
          fb: "Changing the place so the trip disappears is an equity move. The equal plan kept the session where it was and printed more paper."
        }
      ]
    },
    {
      type: "write",
      title: "One equity move for your project",
      label: "The obstacle your service learning group actually faces, and the change in the plan that would address it",
      placeholder: "The obstacle is transportation. An equal plan would be... An equity plan would...",
      tie: "Discussion #4 and the service learning project both sit on this report. Use the sentence to show you know the difference between giving everyone the same thing and removing the obstacle.",
      saved: "Saved on this device.",
      doneTitle: "Check complete",
      doneMeta: "You can tell an identical service from a plan that gives people a fair chance at the same health."
    }
  ]
};
