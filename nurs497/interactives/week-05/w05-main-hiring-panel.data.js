/*META
{
  "pageTitle": "The Hiring Panel",
  "title": "The Hiring Panel",
  "lede": "Three people on a hiring panel each ask for a different piece of your portfolio. A job title is not an answer to any of them.",
  "pills": ["CSLO E"],
  "role": "A BSN senior interviewing for a clinical nurse leader residency that starts after graduation",
  "setup": "The Electronic Portfolio has to be able to survive this conversation. Each required piece exists because someone on a panel will ask a question that only that piece can answer.",
  "cast": [
    { "initials": "DO", "name": "Denise Okonkwo, MSN, RN", "role": "Nurse manager, the hiring unit" },
    { "initials": "AS", "name": "Andre Silva, DNP", "role": "Director of professional development" },
    { "initials": "HC", "name": "Helen Cho, RN", "role": "Chair, professional practice council" }
  ],
  "noscript": "This activity asks you to answer a hiring panel with the portfolio piece each question requires, including credentials, a five-year goal with a near-term step, a professional organization, and a place you would share the capstone, then draft a cover letter opening and one five-year goal."
}
META*/

window.__NS_JS__ = {
  key: "__NS__",
  steps: [
    {
      type: "choice",
      title: "She asked for qualifications, not a story",
      help: "Choose the answer that gives Denise what she asked for.",
      hint: "The portfolio splits qualifications from reflection on purpose. This question is the first of those.",
      retryHint: "A motivating story can be true and still not be the document she asked you to walk her through.",
      who: {
        initials: "DO",
        name: "Denise Okonkwo",
        line: "Walk me through how you are qualified for this residency. I have eight people this afternoon."
      },
      options: [
        {
          text: "Open the resume and the credentials, in date order: the BSN in progress, the clinical sites, and the certifications, each with the year.",
          ok: true,
          fb: "That is the qualifications section doing its job. Chronological credentials let her verify what you have, which a narrative about why you love nursing cannot."
        },
        {
          text: "Tell the story of the patient who made you want this residency, and offer to send a resume later if she wants one.",
          ok: false,
          fb: "The story belongs in reflections. She asked what qualifies you, and \"later\" means the portfolio did not have the resume ready."
        },
        {
          text: "Describe the five-year plan in detail and skip the dates, because goals matter more than a list of jobs.",
          ok: false,
          fb: "Andre will ask for the plan. Denise asked for qualifications. A goal is not a credential."
        },
        {
          text: "List the professional organizations you hope to join, since membership shows you are serious.",
          ok: false,
          fb: "Organizations are their own section, and hoped-for memberships are not qualifications you hold today."
        }
      ]
    },
    {
      type: "choice",
      title: "He heard a title. He asks for the plan.",
      help: "Andre is not satisfied with a job title. Choose the answer that has both a destination and a first step.",
      hint: "The portfolio asks for short-term and long-term plans toward the position in the cover letter. Give him both.",
      retryHint: "\"I want to lead\" restates the title. He asked what you will have done by next year.",
      who: {
        initials: "AS",
        name: "Andre Silva",
        line: "You said clinical nurse leader. Where are you in five years, and what will you have done by next year to get there?"
      },
      options: [
        {
          text: "In five years, a unit-based clinical nurse leader role. By next year, finish the BSN, complete the residency, and take the certification it requires.",
          ok: true,
          fb: "The long goal and the near step are both there. That is the goals section, and it matches the position the cover letter is pretending to seek."
        },
        {
          text: "I want to be a leader and make a difference for patients. The exact steps will depend on what opens up.",
          ok: false,
          fb: "This can sit in a reflection about professional happiness. It is not a plan, because nothing in it can be done or missed by next year."
        },
        {
          text: "In five years I will have a doctorate, a director title, and a funded research program.",
          ok: false,
          fb: "A destination with no path, and one the residency you are interviewing for does not lead to next year, reads as a wish. The near-term step is the part he asked for second."
        },
        {
          text: "I will stay at the bedside. Titles are not what matter to me.",
          ok: false,
          fb: "That may be an honest value, and it does not answer the job he is filling or the goal the portfolio tied to this cover letter."
        }
      ]
    },
    {
      type: "choice",
      title: "She asks who you will stand with",
      help: "Helen wants the organization section, not another job title.",
      hint: "Name a real organization, what it is for, and a role you could actually take in it. Membership you might buy someday is not a role.",
      retryHint: "\"Nursing organizations\" is the category. She asked which one, and what you would do there.",
      who: {
        initials: "HC",
        name: "Helen Cho",
        line: "You named a job. Which organization will you belong to, and what will you do in it besides pay dues?"
      },
      options: [
        {
          text: "The American Nurses Association, through my state nurses association, and a unit-level practice council seat in the first year so scope and staffing questions have a nurse voice.",
          ok: true,
          fb: "You named the organization, how membership works, and a role. That is the portfolio section on organizations and on the future role you could take in one."
        },
        {
          text: "I plan to join a nursing organization once I see which one looks best on a resume.",
          ok: false,
          fb: "That is not a membership and not a role. It tells her the section of the portfolio is still blank."
        },
        {
          text: "All of them. The more letters beside my name, the stronger the application.",
          ok: false,
          fb: "A list with no purpose and no role does not answer her. The section asks why the organization matters to the work, not how many you can name."
        },
        {
          text: "I do not need one. The residency is the professional development.",
          ok: false,
          fb: "The residency is a job. The portfolio treats organizational membership as a separate piece, because the profession's voice is collective."
        }
      ]
    },
    {
      type: "choice",
      title: "Where does the capstone go after the course ends?",
      help: "Choose the answer that uses the publications and conferences section.",
      hint: "Name a specific journal or meeting, and say why that audience is the right one for this project.",
      retryHint: "\"I would share it widely\" does not name an audience. He is asking where.",
      who: {
        initials: "AS",
        name: "Andre Silva",
        line: "If the quality improvement project is worth other people's time, where would you send it?"
      },
      options: [
        {
          text: "A clinical journal that publishes quality improvement on heart failure discharge, or the next nursing practice conference that takes student and residency abstracts. That audience already works on this problem.",
          ok: true,
          fb: "You named a destination and a reason. The portfolio asks for both: a journal you might submit to, and a conference where you might present, each justified."
        },
        {
          text: "I would post it on social media so more people see it.",
          ok: false,
          fb: "Reach is not a professional audience. The section wants a journal or a conference, and a reason that venue fits the finding."
        },
        {
          text: "I would wait until someone invites me. New graduates do not submit.",
          ok: false,
          fb: "The portfolio asks for the plan, not for an invitation you do not have yet. Waiting is not a venue."
        },
        {
          text: "Anywhere that accepts papers. The venue does not change the project.",
          ok: false,
          fb: "The venue is the question. A journal for a different specialty would be the wrong audience, which is why the portfolio asks you to say why the one you chose fits."
        }
      ],
      explain: "The portfolio is a set of answers to different people. Qualifications and credentials answer the manager. Short and long goals, plus the reflection on the next five years, answer the question of where you are going. Organizations answer who you will stand with. A journal and a conference answer how the capstone outlives the course. A thin portfolio repeats the job title in every section."
    },
    {
      type: "write",
      title: "Open the cover letter, and name the five-year goal",
      label: "The first sentences of the cover letter for one specific future position, then one five-year goal with a step you will take within a year",
      placeholder: "I am applying for the clinical nurse leader residency on your medical unit because... Within five years I will... By next year I will...",
      tie: "The Electronic Portfolio requires a cover letter for a specific future position, short-term and long-term goals, and the other sections this panel just asked for. This is a start, not the portfolio.",
      saved: "Saved on this device.",
      doneTitle: "Practice complete",
      doneMeta: "You can match each portfolio section to the question it is there to answer."
    }
  ]
};
