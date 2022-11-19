export const json = {
  elements: [
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
          value: "name of condition",
          text: "What is the name of your health condition?",
        },
        {
          value: "symptoms of condition",
          text: "What physical symptoms do you experience because of your condition?",
        },
        {
          value: "future health risks",
          text: "How might your condition affect your health in the future?",
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
          value: null,
          text: "N/A",
        },
      ],
      rows: [
        {
          value: "names of medicines",
          text: "What are the names of the medicines, vitamins, and/or supplements your doctor has asked you to take for your health condition?",
        },
        {
          value: "when to take medications",
          text: "When are you supposed to take each of your medications, vitamins, or supplements?",
        },
        {
          value: "purpose of medications",
          text: "What is the purpose of each of your medications, vitamins, or supplements?",
        },
        {
          value: "risks of not taking",
          text: "What could happen if you do not take each of your medications, vitamins, or supplements like your doctor has asked you to?",
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
          value: null,
          text: "N/A",
        },
      ],
      rows: [
        {
          value: "miss medicine",
          text: "In a typical week, do you usually miss a full day of medicine, either because you forgot to take it or didn't want to take it?",
        },
        {
          value: "trouble remembering",
          text: "Do you usually have toruble remembering to take your medicines every day?",
        },
        {
          value: "attend appointments",
          text: "Do you usually come to your doctor appointments when they are scheduled?",
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
          value: null,
          text: "N/A",
        },
      ],
      rows: [
        {
          value: "read nutrition labels",
          text: "When choosing foods and drinks, do you read the nutrition labels on them to find out if they are healthy choices for you?",
        },
        {
          value: "follow diet",
          text: "Are you supposed to follow any special diet because of your condition?",
        },
        {
          value: "diet specifics",
          text: "If you have a special diet, what are examples of the foods and/or drinks that you should have more or less of?",
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
          value: null,
          text: "N/A",
        },
      ],
      rows: [
        {
          value: "remember to take medicines",
          text: "Do you ususally remember to take your medicines on your own?",
        },
        {
          value: "need someone to remind",
          text: "Does someone usually have to remind you to take your medicines?",
        },
        {
          value: "call for refills",
          text: "Do you usually call in your prescription refills yourself?",
        },
        {
          value: "pick up refills",
          text: "Do you usually pick up refills from the pharmacy yourself?",
        },
        {
          value: "call doctor",
          text: "Do you yourself usually call or email your doctor when you have a question or need to speak with him/her?",
        },
        {
          value: "make appointments",
          text: "Do you usually make your own doctor appointments?",
        },
        {
          value: "perform your own procedures",
          text: "If you have medical procedures to perform, do you usually perform your medical procedures yourself (catheterization, insulin shots, etc.)?",
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
          value: null,
          text: "N/A",
        },
      ],
      rows: [
        {
          value: "fertility",
          text: "Would your health condition likely affect your ability to become pregnant or get someone pregnant?",
        },
        {
          value: "pregnancy risks",
          text: "If you're female, what are risks you might face if/when you become pregnant because of your condition?",
        },
        {
          value: "harmful medicines for fetus",
          text: "If you're female, do you take any medications that would be harmful to an unborn baby if you became pregnant?",
        },
        {
          value: "safe sex",
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
          value: "career plans",
          text: "What are your future plans in regards to school and/or a job?",
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
          value: null,
          text: "N/A",
        },
      ],
      rows: [
        {
          value: "what is health insurance",
          text: "What is health insurance and why is it important to have?",
        },
        {
          value: "health insurance provider",
          text: "What is the name of your current health insurance provider?",
        },
        {
          value: "insurance expiration",
          text: "If you are insured, at what age will your current health insurance coverage end?",
        },
        {
          value: "how to get coverage",
          text: "How can you get health insurance coverage for yourself when you are an adult?",
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
          value: "manage health condition in adulthood",
          text: "When you are an adult, who will manage your health condition, for example help you remember to take your medicines, call in prescription refills, pick up meds from pharmacy, and make doctor appointments?",
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
          value: "how to find doctor",
          text: "When it comes time for you to switch to an adult doctor, how will you find one?",
        },
        {
          value: "transfer medical records",
          text: "In order to get your medical records transferred to another doctor, what is required to make this happen?",
        },
      ],
    },
  ],
  showQuestionNumbers: "on",
};
