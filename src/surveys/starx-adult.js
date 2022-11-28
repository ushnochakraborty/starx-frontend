export const json = {
  elements: [
    {
      type: "text",
      inputType: "date",
      name: "patient.dob",
      title: "Please enter your date of birth",
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
            "How often did you make an effort to understand what your doctor told you?",
        },
        {
          value: "take medicine",
          text: "How often did you take your medicines on your own?",
        },
        {
          value: "ask questions",
          text:
            "How often did you ask doctors or nurses questions about your illness, medicines or medical care?",
        },
        {
          value: "make appointments",
          text: "How often did you make your own appointments?",
        },
        {
          value: "need someone to remind",
          text:
            "How often did you need someone to remind you to take your medicines?",
        },
        {
          value: "personal reminders",
          text:
            "How often did you use things like pillboxes, schedules, or alarm to help you take their medicines when they were supposed to?",
        },
        {
          value: "internet research",
          text:
            "How often did you use the internet, books or other guides to find out more about his/her illness?",
        },
        {
          value: "forget medicine",
          text: "How often did you forget to take your medicines?",
        },
        {
          value: "handle problems",
          text:
            "How often did you work with your doctor to take care of new health problems that came up?",
        },
      ],
      alternateRows: true,
      isAllRowRequired: true,
    },
    {
      type: "matrix",
      name: "do you know",
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
        {
          value: 0,
          text: "I do not take any medicine",
        },
      ],
      rows: [
        {
          value: "about illness",
          text: "How much do you know about your illness?",
        },
        {
          value: "taking care of illness",
          text: "How much do you know about taking care of your illness?",
        },
        {
          value: "not taking medicine",
          text:
            "How much do you know about what will happen if you do not take your medicine?",
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
          text: "How easy or hard is it for you to talk to your doctor?",
        },
        {
          value: "plan",
          text:
            "How easy or hard is it for you to make a plan with your doctor to care for your health?",
        },
        {
          value: "see doctor alone",
          text: "How easy or hard is it for you see your doctor by yourself?",
        },
        {
          value: "take medicine",
          text:
            "How easy or hard is it for you to take your medicines the way they are supposed ot be taken?",
        },
        {
          value: "take care of yourself",
          text: "How easy or hard is it for you to take care of yourself?",
        },
        {
          value: "move to adult care",
          text:
            "How easy or hard do you think it will be for you to find other doctors?",
        },
      ],
    },
  ],
  showQuestionNumbers: "on",
};
