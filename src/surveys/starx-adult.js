export const json = {
  title: "STARx Adult Survey",
  description:
    "A self administered version of the STARx survey for adult patients.",
  logoPosition: "right",
  pages: [
    {
      name: "page0",
      elements: [
        {
          type: "radiogroup",
          name: "dob.preq",
          title: "Are you over 88 years of age?",
          choices: ["Yes", "No"],
          isRequired: true,
        },
        {
          type: "radiogroup",
          name: "meds",
          title: "Do you take medication?",
          choices: [
            {
              value: 0,
              text: "Yes",
            },
            {
              value: 36,
              text: "No",
            },
          ],
          isRequired: true,
        },
      ],
    },

    {
      name: "page1",
      elements: [
        {
          type: "text",
          name: "date.of.birth",
          title: "Please enter your year of birth",
          inputType: "integer",
          visibleIf: "{dob.preq} != Yes",
          min: 1933,
          max: 2023,
        },
        {
          type: "text",
          name: "date.of.diagnosis",
          title: "Please enter your year of diagnosis.",
          inputType: "integer",
          visibleIf: "{dob.preq} != Yes",
          min: 1933,
          max: 2023,
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
          min: 1,
          visibleIf: "{meds} == 0",
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
            "Please check the one that shows how often you have done each thing in the past 3 months. 1 being Never, 5 being Always",
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
            "Some patients know a lot about their health and some patients do not. Please answer each question according to the following scale.",
          isRequired: true,
          columns: [
            {
              value: 1,
              text: "Nothing",
            },
            {
              value: 2,
              text: "A little",
            },
            {
              value: 3,
              text: "Some",
            },
            {
              value: 4,
              text: "Most",
            },
            {
              value: 5,
              text: "A lot",
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
  calculatedValues: [
    {
      name: "score",
      expression:
        "{section1.q1} + {section1.q2} + {section1.q3} + {section1.q4} + {section1.q5}+ {section1.q6} + {section1.q7} + {section1.q8} + {section1.q9} + {section2.q10} + {section2.q11} + {section2.q12} + {section3.q13} + {section3.q14} + {section3.q15} + {section3.q16} + {section3.q17} + {section3.q18}",
      includeIntoResult: true,
    },
  ],
  completedHtml:
    "<h2>Thank you for completing the survey</h2></br><h2>Your readiness score is {score} </h2> </br> <h2> Contact your provider to interpret this score. </h2> </br><h2>For resources on how to improve your skills, visit <a href = https://www.med.unc.edu/transition/transition-tools/copy_of_educational-handouts-for-trxansition-indextm/>our resources page</a></h2>",
};
