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
          text: "What is the name of your child's health condition?",
        },
        {
          value: "symptoms of condition",
          text: "What physical symptoms does your child experience because of their condition?",
        },
        {
          value: "future health risks",
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
          value: null,
          text: "N/A",
        },
      ],
      rows: [
        {
          value: "names of medicines",
          text: "What are the names of the medicines, vitamins, and/or supplements your child is supposed to be taking for their condition?",
        },
        {
          value: "when to take medications",
          text: "When is your child supposed to take each of their medications, vitamins, or supplements?",
        },
        {
          value: "purpose of medications",
          text: "What is the purpose of each of your child's medications, vitamins, or supplements?",
        },
        {
          value: "risks of not taking",
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
          value: null,
          text: "N/A",
        },
      ],
      rows: [
        {
          value: "miss medicine",
          text: "In a typical week, does your child usually miss a full day of medicine, either because they forgot to take it or didn't want to take it?",
        },
        {
          value: "trouble remembering",
          text: "Does your child usually have toruble remembering to take their medicines every day?",
        },
        {
          value: "attend appointments",
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
          value: null,
          text: "N/A",
        },
      ],
      rows: [
        {
          value: "read nutrition labels",
          text: "When choosing foods and drinks, does your child read the nutrition labels on them to find out if they are healthy choices for them?",
        },
        {
          value: "follow diet",
          text: "Is your child supposed to follow any special diet because of their condition?",
        },
        {
          value: "diet specifics",
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
          value: null,
          text: "N/A",
        },
      ],
      rows: [
        {
          value: "remember to take medicines",
          text: "Does your child ususally remember to take their medicines on their own?",
        },
        {
          value: "need someone to remind",
          text: "Does someone usually have to remind your child to take their medicines?",
        },
        {
          value: "call for refills",
          text: "Does your child usually call in their prescription refills themself?",
        },
        {
          value: "pick up refills",
          text: "Does your child usually pick up refills from the pharmacy themself?",
        },
        {
          value: "call doctor",
          text: "Does your child usually call or email their doctor when they have a question or need to speak with him/her?",
        },
        {
          value: "make appointments",
          text: "Does your child usually make their own doctor appointments?",
        },
        {
          value: "perform your own procedures",
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
          value: null,
          text: "N/A",
        },
      ],
      rows: [
        {
          value: "fertility",
          text: "Would your child's health condition likely affect their ability to become pregnant or get someone pregnant?",
        },
        {
          value: "pregnancy risks",
          text: "If your child is female, what are risks theyy might face if/when they become pregnant because of their condition?",
        },
        {
          value: "harmful medicines for fetus",
          text: "If your child is female, do they take any medications that would be harmful to an unborn baby if they became pregnant?",
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
          value: null,
          text: "N/A",
        },
      ],
      rows: [
        {
          value: "what is health insurance",
          text: "What is health insurance and why is it important for your child to have?",
        },
        {
          value: "health insurance provider",
          text: "What is the name of your child's current health insurance provider?",
        },
        {
          value: "insurance expiration",
          text: "If your child is insured, at what age will their current health insurance coverage end?",
        },
        {
          value: "how to get coverage",
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
          value: "manage health condition in adulthood",
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
          value: "how to find doctor",
          text: "When it comes time for your child to switch to an adult doctor, how will you find one?",
        },
        {
          value: "transfer medical records",
          text: "In order to get your child's medical records transferred to another doctor, what is required to make this happen?",
        },
      ],
    },
  ],
  showQuestionNumbers: "on",
};
