export const json = {
  title: "STARx Pediatric Survey",
  description:
    "A self administered version of the STARx survey for pediatric patients.",
  logoPosition: "right",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "text",
          name: "date.of.birth",
          title: "Please enter your year of birth.",
          isRequired: true,
          inputType: "integer",
        },
        {
          type: "text",
          name: "date.of.diagnosis",
          title: "Please enter your year of diagnosis.",
          inputType: "integer",
        },
        {
          type: "dropdown",
          name: "race",
          title: "Please enter your race.",
          isRequired: true,
          choices: [
            {
              value: "Prefer not to say",
              text: "Prefer not to say",
            },
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
                "How often did you ask doctors or nurses questions about your illness, medicines or medical care?",
            },
            {
              value: "q4",
              text: "How often did you make your own appointments?",
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
                "How often did you use things like pillboxes, schedules, or alarm to help you take their medicines when they were supposed to?",
              visibleIf: "{num.of.medications} != 0",
            },
            {
              value: "q7",
              text:
                "How often did you use the internet, books or other guides to find out more about his/her illness?",
            },
            {
              value: "q8",
              text: "How often did your forget to take your medicines?",
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
              text: "How much does you know about taking care of your illness?",
            },
            {
              value: "q12",
              text:
                "How much does you know about what will happen if you do not take your medicines?",
              visibleIf: "{num.of.medications} != 0",
            },
          ],
        },
        {
          type: "matrix",
          name: "section3",
          title:
            "Some patients may find it hard to do certain things. Please check what best describes how easy or hard you feel it will be for you.",
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
                "How easy or hard is it for you to take your medicines the way they are supposed to?",
              visibleIf: "{num.of.medications} != 0",
            },
            {
              value: "q17",
              text: "How easy or hard is it for you to take care of yourself?",
            },
            {
              value: "q18",
              text:
                "How easy or hard do you think it will be for you to move from pediatrics to adult-focused care?",
            },
          ],
        },
      ],
      title: "STARx Survey",
      description:
        "For all of the following questions, select the answer that best describes you.",
    },
  ],
  calculatedValues: [
    {
      name: "score",
      expression:
        "{section1.q1} + {section1.q2} + {section1.q3} + {section1.q4} + {section1.q5}+ {section1.q6} + {section1.q7} + {section1.q8} + {section1.q9} + {section2.q10} + {section2.q11} + {section2.q12} + {section3.q13} + {section3.q14} + {section3.q15} + {section3.q16} + {section3.q17} + {section3.q18}",
      includeIntoResult: true,
    },
  ],
  showQuestionNumbers: "on",
  completedHtml:
    "<h2>Thank you for completing the survey</h2></br><h2>Your score is {score}</h2></br><h2>Work with your parent/guardian and healthcare providers to understand this score.</h2></br><h2>For resources on how to improve your skills, visit <a href = https://www.med.unc.edu/transition/transition-tools/copy_of_educational-handouts-for-trxansition-indextm/>our resources page</a></h2>",
};
