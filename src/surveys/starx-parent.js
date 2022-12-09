export const json = {
  title: "STARx Parent Survey",
  description:
    "A self administered version of the STARx survey for parents of patients.",
  pages: [
    {
      name: "page0",
      elements: [
        {
          type: "radiogroup",
          name: "dob.preq",
          title: "Is your child over 88 years of age?",
          choices: ["Yes", "No"],
          isRequired: true,
        },
      ],
    },
    {
      name: "page1",
      elements: [
        {
          type: "text",
          inputType: "integer",
          name: "patient.dob",
          title: "Please enter your child's year of birth",

          visibleIf: "{dob.preq} != Yes",
        },
        {
          type: "text",
          inputType: "integer",
          name: "patient.dod",
          title: "Please enter your child's year of diagnosis",

          visibleIf: "{dob.preq} != Yes",
        },
        {
          type: "dropdown",
          choices: [
            "Prefer not to answer",
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
      ],
    },
    {
      name: "page2",
      elements: [
        {
          type: "matrix",
          name: "section1",
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
              value: "q1",
              text:
                "How often did your child make an effort to understand what his/her doctor told them?",
            },
            {
              value: "q2",
              text:
                "How often did your child take his/her medicines on your own?",

              visibleIf: "{num.of.meds} != 0",
            },
            {
              value: "q3",
              text:
                "How often did your child ask his/her doctor or nurse questions about their illness, medicines or medical care?",
            },
            {
              value: "q4",
              text: "How often did your child make their own appointments?",
            },
            {
              value: "q5",
              text:
                "How often did your child need someone to remind him/her to take their medicines?",

              visibleIf: "{num.of.meds} != 0",
            },
            {
              value: "q6",
              text:
                "How often did your child use things like pillboxes, schedules, or alarm to help him/her take their medicines when they were supposed to?",

              visibleIf: "{num.of.meds} != 0",
            },
            {
              value: "q7",
              text:
                "How often did you use the internet, books or other guides to find out more about his/her illness?",
            },
            {
              value: "q8",
              text:
                "How often did your child forget to take his/her medicines?",

              visibleIf: "{num.of.meds} != 0",
            },
            {
              value: "q9",
              text:
                "How often did your child work with his/her doctor to take care of new health problems that came up?",
            },
          ],
          alternateRows: true,
          isAllRowRequired: true,
        },
        {
          type: "matrix",
          name: "section2",
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
          ],
          rows: [
            {
              value: "q10",
              text: "How much do your child know about his/her illness?",
            },
            {
              value: "q11",
              text:
                "How much do your child know about taking care of his/her illness?",
            },
            {
              value: "q12",
              text:
                "How much do your child know about what will happen if he/she do not take their medicine?",

              visibleIf: "{num.of.meds} != 0",
            },
          ],
          alternateRows: true,
          isAllRowRequired: true,
        },
        {
          type: "matrix",
          name: "section3",
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
              value: "q13",
              text:
                "How easy or hard is it for your child to talk to his/her doctor?",
            },
            {
              value: "q14",
              text:
                "How easy or hard is it for your child to make a plan with his/her doctor to care for your health?",
            },
            {
              value: "q15",
              text:
                "How easy or hard is it for your child see his/her doctor by himself or herself?",
            },
            {
              value: "q16",
              text:
                "How easy or hard is it for your child to take his/her medicines the way they are supposed to be taken?",

              visibleIf: "{num.of.meds} != 0",
            },
            {
              value: "q17",
              text:
                "How easy or hard is it for your child to take care of himself/herself?",
            },
            {
              value: "q18",
              text:
                "How easy or hard do your child think it will be for you to move from pediatrics to adult-focused care?",
            },
          ],
        },
      ],
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
    "<h2>Thank you for completing the survey</h2></br><h2>Your child's readiness score is {score} </h2> </br> <h2> Contact your provider to interpret this score. </h2> </br><h2>For resources on how to improve your skills, visit <a href = https://www.med.unc.edu/transition/transition-tools/copy_of_educational-handouts-for-trxansition-indextm/>our resources page</a></h2>",
};
