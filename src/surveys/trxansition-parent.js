export const json = {
  title: "TRxANSITION Adolescent Survey",
  description:
    "A provider administrated survey for parents to measure their transition readiness.",
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
          title: "What is your child's race?",
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
              text: "What is the name of your child's health condition?",
            },
            {
              value: "q2",
              text: "What physical symptoms does your child experience because they have [name of health condition]?",
            },
            {
              value: "q3",
              text: "How might [name of health condition] affect your child's health in the future?",
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
              text: "What are the names of the medicines, vitamins, and/or supplements your child's doctor has asked him/her to take for their health condition?",
            },
            {
              value: "q5",
              text: "When is your child supposed to take [name each medication, vitamin, and supplement patient should be taking]?",
            },
            {
              value: "q6",
              text: "What is the purpose of [name each medication, vitamin, and supplement patient should be taking]?",
            },
            {
              value: "q7",
              text: "What could happen if your child does not take [name each medication, vitamin, and supplement patient should be taking] like his/her doctor has asked them to?",
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
              text: "In a typical week, does your usually miss a full day of medicine, either because they forgot to take it or didn’t want to take it?",
            },
            {
              value: "q9",
              text: "Does your child usually have trouble remembering to take his/her medicines every day? ",
            },
            {
              value: "q10",
              text: "Does your child usually miss his/her doctor appointments when they are scheduled?",
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
              text: "When choosing foods and drinks, does your child read the nutrition labels on them to find out if they are healthy choices for him/her?",
            },
            {
              value: "q12",
              text: "Is your child supposed to follow any special diet because he/she has [name of health condition]?",
            },
            {
              value: "q13",
              text: "[if the patient is on a special diet] What are examples of the foods and/or drinks that your child should have more or less of?",
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
              text: "Does your child usually remember to take his/her medicines on their own?",
            },
            {
              value: "q15",
              text: "Does your child usually take his/her medicines without someone reminding them?",
            },
            {
              value: "q16",
              text: "Does your child usually call in his/her prescription refills themself?",
            },
            {
              value: "q17",
              text: "Does your child usually pick-up refills from the pharmacy himself/herself?",
            },
            {
              value: "q18",
              text: "Does your child himself/herself usually call or email their doctor when they have a question or need to speak with him/her?",
            },
            {
              value: "q19",
              text: "Does your child usually make his/her own doctor appointments?",
            },
            {
              value: "q20",
              text: "[if the patient has medical procedures to perform] Does your child usually perform his/her medical procedures themself (catheterization, insulin shots, etc?)",
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
              text: "Would your child's health condition likely affect his/her ability to: [if female] become pregnant? [if male] get someone pregnant?",
            },
            {
              value: "q22",
              text: "[Females only] What are risks your child might face if/when she becomes pregnant because she has [name of health condition]? ",
            },
            {
              value: "q23",
              text: "[Females only] Does your child take any medicines that would be harmful to an unborn baby if she became pregnant?",
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
              text: "What are your child's future plans in regards to school and/or a job?",
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
              text: "What is the name of your child's current health insurance provider?",
            },
            {
              value: "q28",
              text: "[If he/she is currently insured] At what age will your child's current health insurance coverage end?",
            },
            {
              value: "q29",
              text: "How can your child get health insurance coverage for himself/herself when they age out of their current coverage?",
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
              text: "When your child becomes an adult, who will manage his/her health condition? For example, help them remember to take their medicines, call in prescription refills, pick up meds from pharmacy, and make doctor appointments.",
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
              text: "When it comes time for your child to switch to an adult doctor, how will you find one?",
            },
            {
              value: "q32",
              text: "In order to get your child's medical records transferred to another doctor, what is required to make this happen?",
            },
          ],
        },
      ],
      title: "TRxANSITION Survey",
      description:
        "For all of the following questions, please select the option that best reflects the parent's response.",
    },
  ],
};
