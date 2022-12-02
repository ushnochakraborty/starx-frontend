export const json = {
  title: "STARx Parent Survey",
  description:
    "A self administered version of the STARx survey for parents of patients.",
  elements: [
    {
      type: "text",
      inputType: "date",
      name: "patient.dob",
      title: "Please enter your child's date of birth",
    },
    {
      type: "text",
      inputType: "date",
      name: "patient.dod",
      title: "Please enter your child's date of diagnosis",
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
      title: "Please enter your child's race",
    },
    {
      type: "dropdown",
      name: "gender",
      title: "What is your child's self identified gender?",
      choices: ["Female", "Male", "Other", "Prefer not to say"],
    },
    {
      type: "text",
      inputType: "number",
      name: "num.of.meds",
      title: "How many medications does your child take?",
    },
    {
      type: "matrix",
      name: "how often",
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
        {
          value: 0,
          text: "I do not take any medicine",
        },
      ],
      rows: [
        {
          value: "understand doctor",
          text:
            "How often did your child make an effort to understand what his/her doctor told them?",
        },
        {
          value: "take medicine",
          text: "How often did your child take his/her medicines on your own?",
        },
        {
          value: "ask questions",
          text:
            "How often did your child ask his/her doctor or nurse questions about their illness, medicines or medical care?",
        },
        {
          value: "make appointments",
          text: "How often did your child make their own appointments?",
        },
        {
          value: "need someone to remind",
          text:
            "How often did your child need someone to remind him/her to take their medicines?",
        },
        {
          value: "personal reminders",
          text:
            "How often did your child use things like pillboxes, schedules, or alarm to help him/her take their medicines when they were supposed to?",
        },
        {
          value: "internet research",
          text:
            "How often did you use the internet, books or other guides to find out more about his/her illness?",
        },
        {
          value: "forget medicine",
          text: "How often did your child forget to take his/her medicines?",
        },
        {
          value: "handle problems",
          text:
            "How often did your child work with his/her doctor to take care of new health problems that came up?",
        },
      ],
      alternateRows: true,
      isAllRowRequired: true,
    },
    {
      type: "matrix",
      name: "do you know",
      title:
        "Some patients know a lot about their heatlh and some patients do not. How much do you konw? Please check the best answer.",
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
        {
          value: 0,
          text: "I do not take any medicine",
        },
      ],
      rows: [
        {
          value: "about illness",
          text: "How much do your child know about his/her illness?",
        },
        {
          value: "taking care of illness",
          text:
            "How much do your child know about taking care of his/her illness?",
        },
        {
          value: "not taking medicine",
          text:
            "How much do your child know about what will happen if he/she do not take their medicine?",
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
        {
          value: 0,
          text: "I do not take any medicine",
        },
      ],
      rows: [
        {
          value: "talk",
          text:
            "How easy or hard is it for your child to talk to his/her doctor?",
        },
        {
          value: "plan",
          text:
            "How easy or hard is it for your child to make a plan with his/her doctor to care for your health?",
        },
        {
          value: "see doctor alone",
          text:
            "How easy or hard is it for your child see his/her doctor by himself or herself?",
        },
        {
          value: "take medicine",
          text:
            "How easy or hard is it for your child to take his/her medicines the way they are supposed ot be taken?",
        },
        {
          value: "take care of yourself",
          text:
            "How easy or hard is it for your child to take care of himself/herself?",
        },
        {
          value: "move to adult care",
          text:
            "How easy or hard do your child think it will be for you to move from pediatrics to adult-focused care?",
        },
      ],
    },
  ],
  showQuestionNumbers: "on",
  completedHTML:
    "<h2>Thank you for completing the survey</h2></br><h2>Your score is 85/90</h2></br><h2>For resources on how to improve your skills, visit <a href = https://www.med.unc.edu/transition/transition-tools/copy_of_educational-handouts-for-trxansition-indextm/>our resources page</a></h2>",
};
