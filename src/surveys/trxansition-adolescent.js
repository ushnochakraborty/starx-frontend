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
      type: "text",
      name: "patient.diagnosis",
      title: "What is your diagnosis? (Optional)",
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
          text: "What is the name of your health condition?",
        },
        {
          value: "q2",
          text: "What physical symptoms do you experience because of your condition?",
        },
        {
          value: "q3",
          text: "How might your condition affect your health in the future?",
        },
      ],
      alternateRows: true,
      isAllRowRequired: false,
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
          text: "What are the names of the medicines, vitamins, and/or supplements your doctor has asked you to take for your health condition?",
        },
        {
          value: "q5",
          text: "When are you supposed to take each of your medications, vitamins, or supplements?",
        },
        {
          value: "q6",
          text: "What is the purpose of each of your medications, vitamins, or supplements?",
        },
        {
          value: "q7",
          text: "What could happen if you do not take each of your medications, vitamins, or supplements like your doctor has asked you to?",
        },
      ],
      alternateRows: true,
      isAllRowRequired: false,
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
          text: "In a typical week, do you usually miss a full day of medicine, either because you forgot to take it or didn't want to take it?",
        },
        {
          value: "q9",
          text: "Do you usually have toruble remembering to take your medicines every day?",
        },
        {
          value: "q10",
          text: "Do you usually come to your doctor appointments when they are scheduled?",
        },
      ],
      alternateRows: true,
      isAllRowRequired: false,
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
          text: "When choosing foods and drinks, do you read the nutrition labels on them to find out if they are healthy choices for you?",
        },
        {
          value: "q12",
          text: "Are you supposed to follow any special diet because of your condition?",
        },
        {
          value: "q13",
          text: "If you have a special diet, what are examples of the foods and/or drinks that you should have more or less of?",
        },
      ],
      alternateRows: true,
      isAllRowRequired: false,
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
          text: "Do you ususally remember to take your medicines on your own?",
        },
        {
          value: "q15",
          text: "Does someone usually have to remind you to take your medicines?",
        },
        {
          value: "q16",
          text: "Do you usually call in your prescription refills yourself?",
        },
        {
          value: "q17",
          text: "Do you usually pick up refills from the pharmacy yourself?",
        },
        {
          value: "q18",
          text: "Do you yourself usually call or email your doctor when you have a question or need to speak with him/her?",
        },
        {
          value: "q19",
          text: "Do you usually make your own doctor appointments?",
        },
        {
          value: "q20",
          text: "If you have medical procedures to perform, do you usually perform your medical procedures yourself (catheterization, insulin shots, etc.)?",
        },
      ],
      alternateRows: true,
      isAllRowRequired: false,
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
          text: "Would your health condition likely affect your ability to become pregnant or get someone pregnant?",
        },
        {
          value: "q22",
          text: "If you're female, what are risks you might face if/when you become pregnant because of your condition?",
        },
        {
          value: "q23",
          text: "If you're female, do you take any medications that would be harmful to an unborn baby if you became pregnant?",
        },
        {
          value: "q24",
          text: "Can you tell me ways sexually active people help protect themselves from unwanted pregnancy or STD's?",
        },
      ],
      alternateRows: true,
      isAllRowRequired: false,
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
          text: "What are your future plans in regards to school and/or a job?",
        },
      ],
      alternateRows: true,
      isAllRowRequired: false,
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
          text: "What is health insurance and why is it important to have?",
        },
        {
          value: "q27",
          text: "What is the name of your current health insurance provider?",
        },
        {
          value: "q28",
          text: "If you are insured, at what age will your current health insurance coverage end?",
        },
        {
          value: "q29",
          text: "How can you get health insurance coverage for yourself when you are an adult?",
        },
      ],
      alternateRows: true,
      isAllRowRequired: false,
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
          text: "When you are an adult, who will manage your health condition, for example help you remember to take your medicines, call in prescription refills, pick up meds from pharmacy, and make doctor appointments?",
        },
      ],
      alternateRows: true,
      isAllRowRequired: false,
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
          text: "When it comes time for you to switch to an adult doctor, how will you find one?",
        },
        {
          value: "q32",
          text: "In order to get your medical records transferred to another doctor, what is required to make this happen?",
        },
      ],
    },
  ],
  showQuestionNumbers: "on",
};
