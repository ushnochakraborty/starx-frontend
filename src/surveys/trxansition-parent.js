export const json = {
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
      name: "type of condition",
      title: "Type of chronic health condition",
      columns: [
        {
          value: 1,
          text: "Correct",
        },
        {
          value: 0.5,
          text: "Non-specific",
        },
        {
          value: 0,
          text: "Does not know",
        },
      ],
      rows: [
        {
          value: "q1",
          text: "What is the name of your child's health condition?",
        },
        {
          value: "q2",
          text: "What physical symptoms does your child experience because of their condition?",
        },
        {
          value: "q3",
          text: "How might your child's condition affect their health in the future?",
        },
      ],
      alternateRows: true,
      isAllRowRequired: true,
    },
    {
      type: "matrix",
      name: "medications",
      title: "Rx: Medications",
      columns: [
        {
          value: 1,
          text: "Can name all",
        },
        {
          value: 0.5,
          text: "Can name some",
        },
        {
          value: 0,
          text: "Cannot name any",
        },
        {
          value: 0,
          text: "N/A",
        },
      ],
      rows: [
        {
          value: "q4",
          text: "What are the names of the medicines, vitamins, and/or supplements your child is supposed to be taking for their condition?",
        },
        {
          value: "q5",
          text: "When is your child supposed to take each of their medications, vitamins, or supplements?",
        },
        {
          value: "q6",
          text: "What is the purpose of each of your child's medications, vitamins, or supplements?",
        },
        {
          value: "q7",
          text: "What could happen if your child does not take each of their medications, vitamins, or supplements like your doctor has asked them to?",
        },
      ],
      alternateRows: true,
      isAllRowRequired: true,
    },
    {
      type: "matrix",
      name: "adherence",
      title: "Adherence",
      columns: [
        {
          value: 1,
          text: "Yes",
        },
        {
          value: 0.5,
          text: "Sometimes",
        },
        {
          value: 0,
          text: "No",
        },
        {
          value: 0,
          text: "N/A",
        },
      ],
      rows: [
        {
          value: "q8",
          text: "In a typical week, does your child usually miss a full day of medicine, either because they forgot to take it or didn't want to take it?",
        },
        {
          value: "q9",
          text: "Does your child usually have toruble remembering to take their medicines every day?",
        },
        {
          value: "q10",
          text: "Does your child usually come to their doctor appointments when they are scheduled?",
        },
      ],
      alternateRows: true,
      isAllRowRequired: true,
    },
    {
      type: "matrix",
      name: "nutrition",
      title: "Nutrition",
      columns: [
        {
          value: 1,
          text: "Knows definitely",
        },
        {
          value: 0.5,
          text: "Has an idea",
        },
        {
          value: 0,
          text: "Does not know",
        },
        {
          value: 0,
          text: "N/A",
        },
      ],
      rows: [
        {
          value: "q11",
          text: "When choosing foods and drinks, does your child read the nutrition labels on them to find out if they are healthy choices for them?",
        },
        {
          value: "q12",
          text: "Is your child supposed to follow any special diet because of their condition?",
        },
        {
          value: "q13",
          text: "If your child has a special diet, what are examples of the foods and/or drinks that they should have more or less of?",
        },
      ],
      alternateRows: true,
      isAllRowRequired: true,
    },
    {
      type: "matrix",
      name: "self-management skills",
      title: "Self-management skills",
      columns: [
        {
          value: 1,
          text: "Yes",
        },
        {
          value: 0.5,
          text: "Sometimes",
        },
        {
          value: 0,
          text: "No",
        },
        {
          value: 0,
          text: "N/A",
        },
      ],
      rows: [
        {
          value: "q14",
          text: "Does your child ususally remember to take their medicines on their own?",
        },
        {
          value: "q15",
          text: "Does someone usually have to remind your child to take their medicines?",
        },
        {
          value: "q16",
          text: "Does your child usually call in their prescription refills themself?",
        },
        {
          value: "q17",
          text: "Does your child usually pick up refills from the pharmacy themself?",
        },
        {
          value: "q18",
          text: "Does your child usually call or email their doctor when they have a question or need to speak with him/her?",
        },
        {
          value: "q19",
          text: "Does your child usually make their own doctor appointments?",
        },
        {
          value: "q20",
          text: "If your child has medical procedures to perform, do they usually perform their medical procedures themself (catheterization, insulin shots, etc.)?",
        },
      ],
      alternateRows: true,
      isAllRowRequired: true,
    },
    {
      type: "matrix",
      name: "issues of reproduction",
      title: "Issues of reproduction",
      columns: [
        {
          value: 1,
          text: "Knows definitely",
        },
        {
          value: 0.5,
          text: "Has an idea",
        },
        {
          value: 0,
          text: "Does not know",
        },
        {
          value: 0,
          text: "N/A",
        },
      ],
      rows: [
        {
          value: "q21",
          text: "Would your child's health condition likely affect their ability to become pregnant or get someone pregnant?",
        },
        {
          value: "q22",
          text: "If your child is female, what are risks theyy might face if/when they become pregnant because of their condition?",
        },
        {
          value: "q23",
          text: "If your child is female, do they take any medications that would be harmful to an unborn baby if they became pregnant?",
        },
        {
          value: "q24",
          text: "Can you tell me ways sexually active people help protect themselves from unwanted pregnancy or STD's?",
        },
      ],
      alternateRows: true,
      isAllRowRequired: true,
    },
    {
      type: "matrix",
      name: "trade / school",
      title: "Trade / School",
      columns: [
        {
          value: 1,
          text: "Knows definitely",
        },
        {
          value: 0.5,
          text: "Has an idea",
        },
        {
          value: 0,
          text: "Does not know",
        },
      ],
      rows: [
        {
          value: "q25",
          text: "What are your child's future plans in regards to school and/or a job?",
        },
      ],
      alternateRows: true,
      isAllRowRequired: true,
    },
    {
      type: "matrix",
      name: "insurance",
      title: "Insurance",
      columns: [
        {
          value: 1,
          text: "Knows definitely",
        },
        {
          value: 0.5,
          text: "Has an idea",
        },
        {
          value: 0,
          text: "Does not know",
        },
        {
          value: 0,
          text: "N/A",
        },
      ],
      rows: [
        {
          value: "q26",
          text: "What is health insurance and why is it important for your child to have?",
        },
        {
          value: "q27",
          text: "What is the name of your child's current health insurance provider?",
        },
        {
          value: "q28",
          text: "If your child is insured, at what age will their current health insurance coverage end?",
        },
        {
          value: "q29",
          text: "How can your child get health insurance coverage for themself when they age out of their current coverage?",
        },
      ],
      alternateRows: true,
      isAllRowRequired: true,
    },
    {
      type: "matrix",
      name: "ongoing support",
      title: "Ongoing support",
      columns: [
        {
          value: 1,
          text: "Self",
        },
        {
          value: 0.5,
          text: "Parents/friends",
        },
        {
          value: 0,
          text: "Does not know",
        },
      ],
      rows: [
        {
          value: "q30",
          text: "When your child becomes an adult, who will manage their health condition, for example help them remember to take your medicines, call in prescription refills, pick up meds from pharmacy, and make doctor appointments?",
        },
      ],
      alternateRows: true,
      isAllRowRequired: true,
    },
    {
      type: "matrix",
      name: "new health care providers",
      title: "New health care providers",
      columns: [
        {
          value: 1,
          text: "Knows definitely",
        },
        {
          value: 0.5,
          text: "Has an idea",
        },
        {
          value: 0,
          text: "Does not know",
        },
      ],
      rows: [
        {
          value: "q31",
          text: "When it comes time for your child to switch to an adult doctor, how will you find one?",
        },
        {
          value: "q32",
          text: "In order to get your child's medical records transferred to another doctor, what is required to make this happen?",
        },
      ],
    },
  ],
  showQuestionNumbers: "on",
};
