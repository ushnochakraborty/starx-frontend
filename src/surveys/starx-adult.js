export const json = {
  elements: [
    {
      type: "text",
      inputType: "date",
      name: "patient.dob",
      title: "Please enter your date of birth",
    },
    {
      type: "text",
      inputType: "date",
      name: "patient.dod",
      title: "Please enter your date of diagnosis",
    },
    {
      type: "dropdown",
      choices: [
        "American Indian or Alaskan Native",
        "Asian",
        "Black or African American",
        "Hispanic or Latino",
        "Native Hawaiian or Other Pacific Islander",
        "White",
        "Other",
        "Prefer not to say",
      ],
      name: "patient.race",
      title: "Please enter your race",
    },
    {
      type: "dropdown",
      name: "gender",
      title: "What is your self identified gender?",
      choices: ["Female", "Male", "Other", "Prefer not to say"],
    },
    {
      type: "text",
      inputType: "number",
      name: "num.of.meds",
      title: "How many medications do you take?",
    },
    {
      type: "matrix",
      name: "how.often",
      title:
        "Please check the one that shows how often you have done each thing in the past 3 months.",
      columns: [
        {
          value: 1,
          text: "Never",
        },
        {
          value: 2,
          text: "Almost Never",
        },
        {
          value: 3,
          text: "Sometimes",
        },
        {
          value: 4,
          text: "Almost Always",
        },
        {
          value: 5,
          text: "Always",
        },
      ],
      rows: [
        {
          value: "q1",
          text: "How often did you make an effort to understand what your doctor told you?",
        },
        {
          value: "q2",
          text: "How often did you take your medicines on your own?",
          visibleIf: "{num.of.meds} != 0",
        },
        {
          value: "q3",
          text: "How often did you ask doctors or nurses questions about your illness, medicines or medical care?",
        },
        {
          value: "q4",
          text: "How often did you make your own appointments?",
        },
        {
          value: "q5",
          text: "How often did you need someone to remind you to take your medicines?",
          visibleIf: "{num.of.meds} != 0",
        },
        {
          value: "q6",
          text: "How often did you use things like pillboxes, schedules, or alarm to help you take their medicines when they were supposed to?",
          visibleIf: "{num.of.meds} != 0",
        },
        {
          value: "q7",
          text: "How often did you use the internet, books or other guides to find out more about his/her illness?",
        },
        {
          value: "q8",
          text: "How often did you forget to take your medicines?",
          visibleIf: "{num.of.meds} != 0",
        },
        {
          value: "q9",
          text: "How often did you work with your doctor to take care of new health problems that came up?",
        },
      ],
      alternateRows: true,
      isAllRowRequired: true,
    },
    {
      type: "matrix",
      name: "do.you.know",
      title:
        "Some patients know a lot about their heatlh and some patients do not. How much do you know? Please check the best answer.",
      columns: [
        {
          value: 1,
          text: "Nothing",
        },
        {
          value: 2,
          text: "Not Much",
        },
        {
          value: 3,
          text: "A Little",
        },
        {
          value: 4,
          text: "Some",
        },
        {
          value: 5,
          text: "A Lot",
        },
      ],
      rows: [
        {
          value: "q10",
          text: "How much do you know about your illness?",
        },
        {
          value: "q11",
          text: "How much do you know about taking care of your illness?",
        },
        {
          value: "q12",
          text: "How much do you know about what will happen if you do not take your medicine?",
          visibleIf: "{num.of.meds} != 0",
        },
      ],
      alternateRows: true,
      isAllRowRequired: true,
    },
    {
      type: "matrix",
      name: "difficulty",
      title:
        "Some patients may find it hard to do certain things. Please check what best describes how easy or hard you feel it would be for you.",
      columns: [
        {
          value: 1,
          text: "Very Hard",
        },
        {
          value: 2,
          text: "Somewhat Hard",
        },
        {
          value: 3,
          text: "Neither Hard nor Easy",
        },
        {
          value: 4,
          text: "Somewhat Easy",
        },
        {
          value: 5,
          text: "Very Easy",
        },
      ],
      rows: [
        {
          value: "q13",
          text: "How easy or hard is it for you to talk to your doctor?",
        },
        {
          value: "q14",
          text: "How easy or hard is it for you to make a plan with your doctor to care for your health?",
        },
        {
          value: "q15",
          text: "How easy or hard is it for you see your doctor by yourself?",
        },
        {
          value: "q16",
          text: "How easy or hard is it for you to take your medicines the way they are supposed ot be taken?",
          visibleIf: "{num.of.meds} != 0",
        },
        {
          value: "q17",
          text: "How easy or hard is it for you to take care of yourself?",
        },
        {
          value: "q18",
          text: "How easy or hard do you think it will be for you to find other doctors?",
        },
      ],
    },
  ],
  showQuestionNumbers: "on",
};
