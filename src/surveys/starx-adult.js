export const json = {
  title: "STARx Adult Survey",
  description:
    "A self administered version of the STARx survey for adult patients.",
  logoPosition: "right",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "text",
          name: "date.of.birth",
          title: "Please enter your date of birth.",
          isRequired: true,
          inputType: "date",
        },
        {
          type: "text",
          name: "date.of.diagnosis",
          title: "Please enter your date of diagnosis.",
          inputType: "date",
        },
        {
          type: "dropdown",
          name: "race",
          title: "Please enter your race.",
          isRequired: true,
          choices: [
            {
              value: "American Indian or Alaskan Native",
              text: "American Indian or Alaskan Native",
            },
            {
              value: "Asian",
              text: "Asian",
            },
            {
              value: "Black or African American",
              text: "Black or African American",
            },
            {
              value: "Hispanic or Latino",
              text: "Hispanic or Latino",
            },
            {
              value: "Native Hawaiian or Other Pacific Islander",
              text: "Native Hawaiian or Other Pacific Islander",
            },
            {
              value: "White",
              text: "White",
            },
            {
              value: "Other",
              text: "Other",
            },
            {
              value: "Prefer not to say",
              text: "Prefer not to say",
            },
          ],
        },
        {
          type: "dropdown",
          name: "gender",
          title: "What is your self-identified gender?",
          isRequired: true,
          choices: [
            {
              value: "Male",
              text: "Male",
            },
            {
              value: "Female",
              text: "Female",
            },
            {
              value: "Other",
              text: "Other",
            },
            {
              value: "Prefer not to say",
              text: "Prefer not to say",
            },
          ],
        },
        {
          type: "text",
          name: "num.of.medications",
          title: "How many medications do you take?",
          isRequired: true,
          inputType: "number",
          min: 0,
        },
      ],
      title: "Preliminary Questions",
      description:
        "Please answer the following questions. The questions with asterisks (*) must be answered.",
    },
    {
      name: "page2",
      elements: [
        {
          type: "matrix",
          name: "section1",
          title:
            "Please check the one that shows how often you have done each thing in the past 3 months.",
          isRequired: true,
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
              text:
                "How often did you make an effort to understand what your doctor told you?",
            },
            {
              value: "q2",
              text: "How often did you take your medicines on your own?",
              visibleIf: "{num.of.medications} != 0",
            },
            {
              value: "q3",
              text:
                "How often did you ask doctors or nurses questions about your illness, medicines, or medical care?",
            },
            {
              value: "q4",
              text: "How often did you make your appointments?",
            },
            {
              value: "q5",
              text:
                "How often did you need someone to remind you to take your medicines?",
              visibleIf: "{num.of.medications} != 0",
            },
            {
              value: "q6",
              text:
                "How often did you use things like pillboxes, schedules, or alarms to help you take your medicines when you were supposed to?",
              visibleIf: "{num.of.medications} != 0",
            },
            {
              value: "q7",
              text:
                "How often did you use the internet, books, or other guides to find out more about your illness?",
            },
            {
              value: "q8",
              text: "How often did you forget to take your medicine(s)?",
              visibleIf: "{num.of.medications} != 0",
            },
            {
              value: "q9",
              text:
                "How often did you work with your doctor to take care of new health problems that came up?",
            },
          ],
        },
        {
          type: "matrix",
          name: "section2",
          title:
            "Some patients know a lot about their health and some patients do not. How much do you know? Please check the best answer.",
          isRequired: true,
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
              text:
                "How much do you know about what will happen if you do not take your medicine?",
              visibleIf: "{num.of.medications} != 0",
            },
          ],
        },
        {
          type: "matrix",
          name: "section3",
          title:
            "Some patients may find it hard to do certain things. Please check what best describes how easy or hard you feel it would be for you.",
          isRequired: true,
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
              text:
                "How easy or hard is it for you to make a plan with your doctor to care for your health?",
            },
            {
              value: "q15",
              text:
                "How easy or hard is it for you to see your doctor by yourself?",
            },
            {
              value: "q16",
              text:
                "How easy or hard is it for you to take your medicines the way they are supposed to be taken?",
              visibleIf: "{num.of.medications} != 0",
            },
            {
              value: "q17",
              text: "How easy or hard is it for you to take care of yourself?",
            },
            {
              value: "q18",
              text:
                "How easy or hard do you think it will be for you to find other doctors?",
            },
          ],
        },
      ],
      title: "STARx Survey",
      description:
        "For all of the following questions, select the answer that best describes you.",
    },
  ],
  showQuestionNumbers: "on",
  completedHtml:
    "<p><h4>Thank you for sharing this information with us.</h4></p><p>Your name is: <b>{section3[5][0]}</b></p><p>Your email is: <b>{section3}</b></p><p>This is what is on your mind:</p><p>{comment}</p>",
};
