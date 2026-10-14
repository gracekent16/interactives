/*META
{
  "pageTitle": "Appraise the Evidence",
  "title": "Appraise the Evidence",
  "lede": "Three sample abstracts land on your unit's fall problem. Decide what disqualifies each one before you write an annotation.",
  "pills": ["CSLO D, E"],
  "setup": "Your unit's problem is falls among older adults in the first two nights after admission. Assignment #1 asks for three articles, each appraised on currency, relevance, authority, accuracy, purpose, and then on population, applicability, feasibility, strengths, and limitations. These abstracts are practice cases, not papers to cite.",
  "noscript": "This activity asks you to name which appraisal test disqualifies each of three sample abstracts, judge applicability against feasibility for a closer study, sort strengths from limitations, and draft one annotation paragraph for Assignment #1."
}
META*/

window.__NS_JS__ = {
  key: "__NS__",
  steps: [
    {
      type: "sort",
      title: "What disqualifies each abstract",
      help: "Tap an abstract, then tap the test it fails. Tap a placed card to take it back.",
      hint: "Use one test per card: the failure you could verify without reading past the citation, the author, or the table.",
      retryHint: "The blog may also be irrelevant. Authority is the failure you can see before you argue about the topic.",
      poolLabel: "Sample abstracts for an adult medical unit",
      bins: [
        { id: "cur", label: "Currency", sub: "Too old for the five-year rule" },
        { id: "auth", label: "Authority", sub: "The source has no expertise behind it" },
        { id: "acc", label: "Accuracy", sub: "The claim and the results disagree" }
      ],
      items: [
        {
          id: "p1",
          text: "A 2016 randomized trial of hourly rounding on an adult medical unit. The question matches yours. The paper is ten years old.",
          bin: "cur"
        },
        {
          id: "p2",
          text: "A 2025 unit-blog post by a clerk describing one fall she witnessed. No methods, no review, no author credentials.",
          bin: "auth"
        },
        {
          id: "p3",
          text: "A 2025 peer-reviewed paper on bed alarms. The abstract says falls fell by 40 percent. The results table shows falls rose.",
          bin: "acc"
        }
      ],
      missHint: "A matching question does not rescue a paper you are not allowed to use. Check the year first.",
      explain: "Currency, relevance, authority, accuracy, and purpose are the first five tests in the annotated bibliography. The 2016 trial may be relevant and still fails currency, because the assignment wants articles within five years. The blog fails authority: a story from someone with no clinical expertise is not a source you can appraise for methods. The bed-alarm paper fails accuracy, because a claim that contradicts its own table is not reliable no matter how recent or how official the journal looks. Purpose is the question the source was written to answer. A blog written to tell a story was never going to answer yours."
    },
    {
      type: "choice",
      title: "Applicable is not the same as feasible",
      help: "A fourth sample is closer: a 2024 study of teach-back with older adults on a medical unit like yours. The intervention needs a pharmacist at every discharge. Your pharmacist is on the unit weekdays only. Choose the appraisal.",
      hint: "Applicability asks whether their patients look like yours. Feasibility asks whether you could run their intervention here.",
      retryHint: "The population can match while the staffing cannot. Those are two different rows in the annotation.",
      options: [
        {
          text: "Applicable, and not feasible as written. The patients mirror your unit. The weekday pharmacist does not cover the nights when your falls happen.",
          ok: true,
          fb: "You can still learn from it. The annotation has to say both things: the population fits, and you would have to adapt the intervention before it could run on your unit."
        },
        {
          text: "Applicable and feasible. A weekday pharmacist is close enough, so the study transfers as written.",
          ok: false,
          fb: "Your falls are in the first two nights. An intervention that is absent on those nights is not feasible as written, even when the population matches."
        },
        {
          text: "Feasible, but not applicable. Pharmacist time is the only thing that matters, and the patients are beside the point.",
          ok: false,
          fb: "Applicability is about the people and the setting. This study's older adults on a medical unit do mirror yours. Do not throw that out because the staffing is hard."
        },
        {
          text: "Neither. A study you cannot copy exactly has no place in the bibliography.",
          ok: false,
          fb: "The bibliography is an appraisal, not a shopping list of interventions you can install unchanged. A close population with a resource gap is useful if you say so."
        }
      ],
      explain: "The assignment scores applicability and feasibility separately, on purpose. Applicability is whether the population and setting mirror your workplace. Feasibility is whether the intervention can be done there. Chapter 9's point about theory belongs in the same appraisal: a useful article gives you a framework you can connect to practice, not only a tip. Naming the gap is part of the annotation, not a reason to hide the article."
    },
    {
      type: "sort",
      title: "Strengths and limitations of the teach-back study",
      help: "Tap a card, then tap the column it belongs in.",
      hint: "A strength is a reason the finding is worth trusting. A limitation is a reason you would not copy it straight onto your unit.",
      retryHint: "Matching your population was applicability. It is not one of these cards. Read what is left for design and for what the study never measured.",
      poolLabel: "Notes on the 2024 teach-back study",
      bins: [
        { id: "str", label: "Strength", sub: "A reason to trust the finding" },
        { id: "lim", label: "Limitation", sub: "A reason not to copy it unchanged" }
      ],
      items: [
        { id: "s1", text: "It used a comparison group, so the drop in falls is not only a before-and-after story.", bin: "str" },
        { id: "s2", text: "The sample was large enough that a handful of unusual patients could not create the result.", bin: "str" },
        { id: "s3", text: "The intervention depends on a pharmacist your unit does not have on nights or weekends.", bin: "lim" },
        { id: "s4", text: "Falls were counted only during the hospital stay, not in the week after discharge, which is when your problem continues.", bin: "lim" }
      ],
      explain: "The assignment asks for two strengths and two limitations on every article, separate from the CRAAP rows and from applicability. A comparison group and an adequate sample are strengths because they speak to whether the finding is believable. A resource you do not have, and an outcome window that misses your problem, are limitations because they limit what you can do with an otherwise useful paper."
    },
    {
      type: "write",
      title: "Write one annotation paragraph",
      label: "One paragraph a reader could drop into Assignment #1: currency, applicability, and one limitation",
      placeholder: "This 2024 study is current because... It is applicable to my unit because... I would not copy it unchanged because...",
      tie: "Assignment #1 Annotated Bibliography asks for all ten appraisal points on each article, plus a conclusion that compares the three. This paragraph is one article's start, not the paper.",
      saved: "Saved on this device.",
      doneTitle: "Practice complete",
      doneMeta: "You can disqualify a weak source and say, in the same breath, why a stronger one still may not fit your unit."
    }
  ]
};
