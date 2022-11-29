export const json = {
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
          name: "question5",
          title: "Please enter your race.",
          isRequired: true,
          choices: [
            {
              value: "item1",
              text: "American Indian or Alaskan Native",
            },
            {
              value: "item2",
              text: "Asian",
            },
            {
              value: "item3",
              text: "Black or African American",
            },
            {
              value: "item4",
              text: "Hispanic or Latino",
            },
            {
              value: "item5",
              text: "Native Hawaiian or Other Pacific islander",
            },
            {
              value: "item6",
              text: "White",
            },
            {
              value: "item7",
              text: "Other",
            },
            {
              value: "item8",
              text: "Prefer not to say",
            },
          ],
        },
        {
          type: "dropdown",
          name: "question6",
          title: "What is your self-identified gender?",
          isRequired: true,
          choices: [
            {
              value: "item1",
              text: "Male",
            },
            {
              value: "item2",
              text: "Female",
            },
            {
              value: "item3",
              text: "Other",
            },
            {
              value: "item4",
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
          name: "how.often",
          title:
            "Please check the one that shows how often you have done each thing in the past 3 months.",
          isRequired: true,
          columns: [
            {
              value: "Column 1",
              text: "Never",
            },
            {
              value: "Column 2",
              text: "Almost Never",
            },
            {
              value: "Column 3",
              text: "Sometimes",
            },
            {
              value: "Column 4",
              text: "Almost Always",
            },
            {
              value: "Column 5",
              text: "Always",
            },
          ],
          rows: [
            {
              value: "q1",
              text: "How often did you make an effor to understand what your doctor told you?",
            },
            {
              value: "q2",
              text: "How often did you take your medicines on your own?",
            },
          ],
        },
        {
          type: "text",
          name: "question1",
        },
      ],
      title: "STARx Survey",
      description:
        "For all of the following questions, select the answer that best describes you.",
    },
  ],
};
