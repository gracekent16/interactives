/*META
{
  "pageTitle": "Novice to Expert",
  "title": "Novice to Expert",
  "lede": "Put Benner's five stages in the order a nurse moves through them, then place one nurse who is no longer new and not yet expert.",
  "pills": ["CSLO C"],
  "setup": "Both the initial journal and the mid-term journal ask where you are on Benner's stages. The stages are a sequence. Skipping one in the write-up makes the reflection impossible to follow.",
  "noscript": "This check asks you to order Benner's five stages of nursing proficiency, identify the stage that matches a nurse who plans the shift consciously and still checks a protocol, and draft the self-assessment sentence for the mid-term journal.",
  "basedOn": {
    "title": "Benner, P. (2023). Patricia Benner's Novice to Expert Theory in Nursing, and Black (2024) Chapter 5",
    "note": "The five stages: novice, advanced beginner, competent, proficient, expert"
  }
}
META*/

window.__NS_JS__ = {
  key: "__NS__",
  steps: [
    {
      type: "order",
      layout: "chain",
      title: "Put the stages in the order Benner describes",
      help: "Tap a stage to place it. Earliest in a nurse's development goes first. Tap a placed stage to take it back.",
      hint: "Chapter 5 lists five stages and treats them as a path, not a menu. The newest nurse is the one who has no experience of the situation yet.",
      retryHint: "Competent comes after advanced beginner and before proficient. Expert is last.",
      poolLabel: "Benner's stages",
      items: [
        { id: "n", text: "Novice" },
        { id: "ab", text: "Advanced beginner" },
        { id: "c", text: "Competent practitioner" },
        { id: "p", text: "Proficient practitioner" },
        { id: "e", text: "Expert practitioner" }
      ],
      answer: ["n", "ab", "c", "p", "e"],
      missHint: "Read the labels for how much of the situation the nurse can see, not for how hard they are working.",
      explain: "Black's Chapter 5 lists the stages in this order: novice, advanced beginner, competent practitioner, proficient practitioner, expert practitioner. A novice follows rules because the situation is new. An advanced beginner can notice recurring pieces and still needs backup. A competent nurse plans consciously and ties tasks to longer-range goals. A proficient nurse sees the situation as a whole and knows what matters most. An expert grasps what to do without walking back through the rules. The journals ask you to locate yourself on this path, not to claim the last stage because the shift was hard."
    },
    {
      type: "choice",
      title: "Where is this nurse?",
      help: "A nurse has been on the unit for two years. She sets priorities for the whole shift, and she still opens the protocol before an unfamiliar procedure. Choose her stage.",
      hint: "Use what she can see and how she decides, not her years alone. Years are a clue. The thinking is the test.",
      retryHint: "An expert would not need the protocol to grasp the situation. An advanced beginner would not yet be planning the whole shift against a longer goal.",
      options: [
        {
          text: "Competent practitioner. She plans the shift on purpose and still uses analytic rules when the situation is unfamiliar.",
          ok: true,
          fb: "That is the middle of the path. Conscious planning is the competent nurse's tool. Reaching for a protocol in an unfamiliar case is a sign she is still analyzing, which is what this stage is for."
        },
        {
          text: "Expert practitioner. Two years on one unit is enough to stop using rules.",
          ok: false,
          fb: "Chapter 11's picture of the expert is someone who grasps the situation without working through rules one by one. Opening the protocol is analysis. That is an earlier stage, and years by themselves do not promote her."
        },
        {
          text: "Advanced beginner. Anyone who still checks a protocol has barely started.",
          ok: false,
          fb: "An advanced beginner can spot recurring aspects and still needs support in the moment. Planning a whole shift against longer-range goals is past that stage."
        },
        {
          text: "Novice. Checking a protocol means she has no experience to draw on.",
          ok: false,
          fb: "A novice has no experience of the situation and leans on context-free rules for all of it. This nurse already organizes a shift. The protocol is a tool for the unfamiliar part, not her only way of working."
        }
      ],
      explain: "Chapter 11 asks you to contrast novice thinking with expert thinking, and it lines up with these stages. Novice thinking stays on the procedure, one step at a time. Expert thinking sees what matters without that walkthrough. Most new graduates writing this journal are somewhere before expert, and a precise middle stage is a stronger reflection than \"I am still learning.\""
    },
    {
      type: "write",
      title: "Place yourself in one sentence",
      label: "The Benner sentence for your mid-term journal: the stage, and one concrete reason from your practicum",
      placeholder: "I am a competent practitioner in medication teaching because I now plan the conversation, and I still check the protocol when the drug is new to me.",
      tie: "The mid-term journal asks you to reflect on strengths, weaknesses, and movement on Benner's stages. This sentence is practice for that paragraph, not the journal.",
      saved: "Saved on this device.",
      doneTitle: "Check complete",
      doneMeta: "You can name the stage and the kind of thinking that distinguishes it from the stages on either side."
    }
  ]
};
