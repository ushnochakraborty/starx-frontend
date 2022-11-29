export const json = {
  title: "STARx Parent Survey",
  description:
    "A version of the STARx survey administered by the parent to screen their child.",
  logoPosition: "right",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "text",
          name: "date.of.birth",
          title: "Please enter your child's date of birth.",
          isRequired: true,
          inputType: "date",
        },
        {
          type: "text",
          name: "date.of.diagnosis",
          title: "Please enter your child's date of diagnosis.",
          inputType: "date",
        },
        {
          type: "dropdown",
          name: "race",
          title: "Please enter your child's race.",
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
          title: "What is your child's self-identified gender?",
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
          title: "How many medications does your child take?",
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
            "Please check the one that shows how often your child has done each thing in the past 3 months.",
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
              text: "How often did your child make an effort to understand what his/her doctor told them?",
            },
            {
              value: "q2",
              text: "How often did your child take his/her medicines on their own?",
              visibleIf: "{num.of.medications} != 0",
            },
            {
              value: "q3",
              text: "How often did your child ask his/her doctor or nurse questions about their illness, medicines, or medical care?",
            },
            {
              value: "q4",
              text: "How often did your child make their appointments?",
            },
            {
              value: "q5",
              text: "How often did your child need someone to remind him/her to take their medicines?",
              visibleIf: "{num.of.medications} != 0",
            },
            {
              value: "q6",
              text: "How often did your child use things like pillboxes, schedules, or alarms to help him/her take their medicines when they were supposed to?",
              visibleIf: "{num.of.medications} != 0",
            },
            {
              value: "q7",
              text: "How often did your child use the internet, books, or other guides to find out more about his/her illness?",
            },
            {
              value: "q8",
              text: "How often did your child forget to take his/her medicine(s)?",
              visibleIf: "{num.of.medications} != 0",
            },
            {
              value: "q9",
              text: "How often did your child work with his/her doctor to take care of new health problems that came up?",
            },
          ],
        },
        {
          type: "matrix",
          name: "section2",
          title:
            "Some patients know a lot about their health and some patients do not. How much does your child know? Please check the answer that describes your child most.",
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
              text: "How much does your child know about his/her illness?",
            },
            {
              value: "q11",
              text: "How much does your know about taking care of his/her illness?",
            },
            {
              value: "q12",
              text: "How much does your know about what will happen if he/she does not take their medicine?",
              visibleIf: "{num.of.medications} != 0",
            },
          ],
        },
        {
          type: "matrix",
          name: "section3",
          title:
            "Some patients may find it hard to do certain things. Please check what best describes how easy or hard your child feels it would be for them.",
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
              text: "How easy or hard is it for your child to talk to his/her doctor?",
            },
            {
              value: "q14",
              text: "How easy or hard is it for your child to make a plan with his/her doctor to care for their health?",
            },
            {
              value: "q15",
              text: "How easy or hard is it for your child to see his/her doctor by himself or herself?",
            },
            {
              value: "q16",
              text: "How easy or hard is it for your child to take his/her medicines the way they are supposed to be taken?",
              visibleIf: "{num.of.medications} != 0",
            },
            {
              value: "q17",
              text: "How easy or hard is it for your child to take care of himself/herself?",
            },
            {
              value: "q18",
              text: "How easy or hard do you think it will be for you rchild to mmove from pediatrics to adult-focused care?",
            },
          ],
        },
      ],
      title: "STARx Survey",
      description:
        "For all of the following questions, select the answer that best describes your child.",
    },
  ],
};
