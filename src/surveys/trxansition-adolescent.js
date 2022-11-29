export const json = {
  title: "TRxANSITION Adolescent Survey",
  description:
    "A provider administrated survey for adolescents to measure transition readiness.",
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
          title: "What is your race?",
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
          title: "Type of chronic health condition",
          isRequired: true,
          columns: [
            {
              value: "1",
              text: "Correct",
            },
            {
              value: "0.5",
              text: "Non-specific",
            },
            {
              value: "0",
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
              text: "What physical symptoms do you experience because you have [name of health condition]?",
            },
            {
              value: "q3",
              text: "How might [name of health condition] affect your health in the future?",
            },
          ],
        },
        {
          type: "matrix",
          name: "section2",
          title: "Rx: Medications",
          isRequired: true,
          columns: [
            {
              value: "1",
              text: "Can name all",
            },
            {
              value: "0.5",
              text: "Can name some",
            },
            {
              value: "0",
              text: "Cannot name any",
            },
            {
              value: "0.0",
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
              text: "When are you supposed to take [name each medication, vitamin, and supplement patient should be taking]?",
            },
            {
              value: "q6",
              text: "What is the purpose of [name each medication, vitamin, and supplement patient should be taking]?",
            },
            {
              value: "q7",
              text: "What could happen if you do not take [name each medication, vitamin, and supplement patient should be taking] like your doctor has asked you to?",
            },
          ],
        },
        {
          type: "matrix",
          name: "section3",
          title: "Adherence",
          isRequired: true,
          columns: [
            {
              value: "1",
              text: "Yes",
            },
            {
              value: "0.5",
              text: "Sometimes",
            },
            {
              value: "0",
              text: "No",
            },
            {
              value: "0.0",
              text: "N/A",
            },
          ],
          rows: [
            {
              value: "q8",
              text: "In a typical week, do you usually miss a full day of medicine, either because you forgot to take it or didn’t want to take it?",
            },
            {
              value: "q9",
              text: "Do you usually have trouble remembering to take your medicines every day? ",
            },
            {
              value: "q10",
              text: "Do you usually miss your doctor appointments when they are scheduled?",
            },
          ],
        },
        {
          type: "matrix",
          name: "section4",
          title: "Nutrition",
          isRequired: true,
          columns: [
            {
              value: "1",
              text: "Knows definitely",
            },
            {
              value: "0.5",
              text: "Has an idea",
            },
            {
              value: "0",
              text: "Does not know",
            },
            {
              value: "0.0",
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
              text: "Are you supposed to follow any special diet because you have [name of health condition]?",
            },
            {
              value: "q13",
              text: "[if the patient is on a special diet] What are examples of the foods and/or drinks that you should have more or less of?",
            },
          ],
        },
        {
          type: "matrix",
          name: "section5",
          title: "Self-management skills",
          isRequired: true,
          columns: [
            {
              value: "1",
              text: "Yes",
            },
            {
              value: "0.5",
              text: "Sometimes",
            },
            {
              value: "0",
              text: "No",
            },
            {
              value: "0.0",
              text: "N/A",
            },
          ],
          rows: [
            {
              value: "q14",
              text: "Do you usually remember to take your medicines on your own?",
            },
            {
              value: "q15",
              text: "Do you usually take your medicines without someone reminding you?",
            },
            {
              value: "q16",
              text: "Do you usually call in your prescription refills yourself?",
            },
            {
              value: "q17",
              text: "Do you usually pick-up refills from the pharmacy yourself?",
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
              text: "[if the patient has medical procedures to perform] Do you usually perform your medical procedures yourself (catheterization, insulin shots, etc?)",
            },
          ],
        },
        {
          type: "matrix",
          name: "section6",
          title: "Issues of reproduciton",
          isRequired: true,
          columns: [
            {
              value: "1",
              text: "Knows definitely",
            },
            {
              value: "0.5",
              text: "Has an idea",
            },
            {
              value: "0",
              text: "Does not know",
            },
            {
              value: "0.0",
              text: "N/A",
            },
          ],
          rows: [
            {
              value: "q21",
              text: "Would your health condition likely affect your ability to: [if female] become pregnant? [if male] get someone pregnant?",
            },
            {
              value: "q22",
              text: "[Females only] What are risks you might face if/when you become pregnant because you have [name of health condition]? ",
            },
            {
              value: "q23",
              text: "[Females only] Do you take any medicines that would be harmful to an unborn baby if you became pregnant?",
            },
            {
              value: "q24",
              text: "Can you tell me ways sexually active people help protect themselves from unwanted pregnancy or STD’s?",
            },
          ],
        },
        {
          type: "matrix",
          name: "section7",
          title: "Trade / School",
          isRequired: true,
          columns: [
            {
              value: "1",
              text: "Knows definitely",
            },
            {
              value: "0.5",
              text: "Has an idea",
            },
            {
              value: "0",
              text: "Does not know",
            },
          ],
          rows: [
            {
              value: "q25",
              text: "What are your plans in regards to school and/or a job?",
            },
          ],
        },
        {
          type: "matrix",
          name: "section8",
          title: "Insurance",
          isRequired: true,
          columns: [
            {
              value: "1",
              text: "Knows definitely",
            },
            {
              value: "0.5",
              text: "Has an idea",
            },
            {
              value: "0",
              text: "Does not know",
            },
            {
              value: "0.0",
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
              text: "[If he/she is currently insured] At what age will your current health insurance coverage end?",
            },
            {
              value: "q29",
              text: "How can you get health insurance coverage for yourself when you are an adult?",
            },
          ],
        },
        {
          type: "matrix",
          name: "section9",
          title: "Ongoing support",
          isRequired: true,
          columns: [
            {
              value: "1",
              text: "Self",
            },
            {
              value: "0.5",
              text: "Parents/friends",
            },
            {
              value: "0",
              text: "Does not know",
            },
          ],
          rows: [
            {
              value: "q30",
              text: "When you are an adult, who will manage your health condition, for example help you remember to take your medicines, call in prescription refills, pick up meds from pharmacy, and make doctor appointments?",
            },
          ],
        },
        {
          type: "matrix",
          name: "section10",
          title: "New health care providers",
          isRequired: true,
          columns: [
            {
              value: "1",
              text: "Knows definitely",
            },
            {
              value: "0.5",
              text: "Has an idea",
            },
            {
              value: "0",
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
      title: "TRxANSITION Survey",
      description:
        "For all of the following questions, please select the option that best reflects the patient's response.",
    },
  ],
};
