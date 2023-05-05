export const json = {
  title: {
    "default": "STARx Adult Survey",
    "es": "Encuesta STARx para adultos",
  },
  description:{
    "default": "A self administered version of the STARx survey for adult patients.",
    "es": "Versión autoadministrada de la encuesta STARx para pacientes adultos.",
  },
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "text",
          inputType: "string",
          name: "uid",
          title: {
            "default": "Please enter your uid if you are a returning user. Enter zero otherwise",
            "es": "Por favor, introduzca su id unqiue si usted es un usuario que vuelve. Introduzca cero en caso contrario"
          },
          defaultValue: "0",
          isRequired: true
        },
        {
          type: "text",
          inputType: "numbner",
          name: "patient_dob",
          title: {
            "default": "Please enter your year of birth",
            "es": "Introduzca su año de nacimiento"
          },
          min: 0,
          max: 90,
          isRequired: true,
        },
        {
          type: "text",
          inputType: "number",
          name: "patient_dod",
          title: {
            "default": "Please enter your age of diagnosis",
            "es": "Introduzca su edad en el momento del diagnóstico"
          },
          min: 0,
          max: 90,
          isRequired: true,
        },
        {
          type: "dropdown",
          name: "patient_race",
          
          title: {
            "default": "Please enter your race",
            "es": "Introduzca su carrera"
          },
          choices: [
            {
              value: 0,
              text: {
                "default": "American Indian or Alaskan Native",
                "es": "Indio americano o nativo de Alaska",
              },
            },
            {
              value: 1,
              text: {
                "default": "Asian",
                "es": "Asiático",
              }
            },
            {
              value: 2,
              text: {
                "default": "Black or African American",
                "es": "Negro o afroamericano",
              }
            },
            {
              value: 3,
              text: {
                "default": "Hispanic or Latino",
                "es": "Hispano o latino",
              }
            },
            {
              value: 4,
              text: {
                "default": "Native Hawaiian or Other Pacific Islander",
                "es": "Nativo hawaiano u otro isleño del Pacífico",
              }
            },
            {
              value: 5,
              text: {
                "default": "White",
                "es": "Blanco",
              }
            },
            {
              value: 6,
              text: {
                "default": "Other",
                "es": "Otra",
              }
            },
            {
              value: -99,
              text: {
                "default": "Prefer not to answer",
                "es": "Prefiero no responder"
              },
            },
          ],
          isRequired: true,
        },
        {
          type: "dropdown",
          name: "gender",
          title: {
            "default": "What is your self identified gender?",
            "es": "¿Cuál es su género autoidentificado?"
          },
          choices: [
            {
              value: 0,
              text: {
                "default": "Male",
                "es": "Hombre",
              }
            },
            {
              value: 1,
              text: {
                "default": "Female",
                "es": "Mujer",
              }
            },
            {
              value: 3,
              text: {
                "default": "Other",
                "es": "Otra",
              }
            },
            {
              value: -99,
              text: {
                "default": "Prefer not to say",
                "es": "Prefiero no responder",
              }
            },
          ],     
          isRequired: true,   
        },
        {
          type: "text",
          inputType: "number",
          name: "num_meds",
          title: {
            "default": "How many medications do you take?",
            "es": "¿Cuántos medicamentos toma?",
          },
          min: 0,
          isRequired: true,
        },
      ],
    },
    {
      name: "page2",
      elements: [
        {
          type: "matrix",
          name: "section1",
          title:{
            "default": "Please check the one that shows how often you have done each thing in the past 3 months.",
            "es": "Por favor marque la frecuencia en cada situación durante los últimos 3 meses.",
          },
          columns: [
            {
              value: 1,
              text: {
                "default": "Never",
                "es": "Nunca",
              },            },
            {
              value: 2,
              text: {
                "default": "Almost Never",
                "es": "Casi nunca",
              },
            },
            {
              value: 3,
              text: {
                "default": "Sometimes",
                "es": "A veces",
              },
            },
            {
              value: 4,
              text: {
                "default": "Almost Always",
                "es": "Casi siempre",
              }
            },
            {
              value: 5,
              text: {
                "default": "Always",
                "es": "Siempre",
              },
            },
            {
              value: 6,
              text: {
                "default": "I do not take any medicine",
                "es": "No tomo ningún medicamento",
              }, 
            },
          ],
          rows: [
            {
              value: "q1",
              text:{
                "default": "How often did you make an effort to understand what your doctor told you?",
                "es": "¿Con qué frecuencia se esforzaba por entender lo que le decía su médico?",
              },
            },
            {
              value: "q2",
              text: {
                "default": "How often did you take your medicines on your own?",
                "es": "¿Con qué frecuencia tomaba los medicamentos por su cuenta?",
              },
            },
            {
              value: "q3",
              text: {
                "default": "How often did you ask doctors or nurses questions about your illness, medicines, or medical care?",
                "es": "¿Con qué frecuencia hizo preguntas a los médicos o enfermeras sobre su enfermedad, medicamentos o atención médica?",
              },
            },
            {
              value: "q4",
              text: {
                "default": "How often did you make your appointments?",
                "es": "¿Con qué frecuencia acudía a las citas?",
              },
            },
            {
              value: "q5",
              text: {
                "default": "How often did you need someone to remind you to take your medicines?",
                "es": "¿Con qué frecuencia necesitó que alguien le recordara que debía tomar sus medicamentos?"
              },
            },
            {
              value: "q6",
              text: {
                "default": "How often did you use things like pillboxes, schedules, or alarms to help you take your medicines when you were supposed to?",
                "es": "¿Con qué frecuencia utilizaba pastilleros, horarios o alarmas para tomar los medicamentos a la hora prevista?",
              },
            },
            {
              value: "q7",
              text: {
                "default": "How often did you use the internet, books, or other guides to find out more about your illness?",
                "es": "¿Con qué frecuencia utilizó Internet, libros u otras guías para obtener más información sobre su enfermedad?",
              },
            },
            {
              value: "q8",
              text: {
                "default": "How often did you forget to take your medicines?",
                "es": "¿Con qué frecuencia olvidaba tomar sus medicamentos?",
              },
            },
            {
              value: "q9",
              text: {
                "default": "How often did you work with your doctor to take care of new health problems that came up?",
                "es": "¿Con qué frecuencia colaboró con su médico para tratar los nuevos problemas de salud que le surgieron?",
              },
            },
          ],
          alternateRows: true,
          isAllRowRequired: true,
        },
        {
          type: "matrix",
          name: "section2",
          title: {
            "default": "Some patients know a lot about their heatlh and some patients do not. How much do you konw? Please check the best answer.",
            "es": "Algunos pacientes saben mucho acerca de su salud y algunos no saben mucho. Por favor marque la repuesta que describe mejor su situación HOY.",
          },
          columns: [
            {
              value: 1,
              text: {
                "default": "Nothing",
                "es": "Nada",
              },
            },
            {
              value: 2,
              text: {
                "default": "Not Much",
                "es": "Muy poco",
              },
            },
            {
              value: 3,
              text: {
                "default": "A Little",
                "es": "Poco",
              },
            },
            {
              value: 4,
              text: {
                "default": "Some",
                "es": "Algo",
              },
            },
            {
              value: 5,
              text: {
                "default": "A Lot",
                "es": "Mucho",
              },
            },
            {
              value: 7,
              text: {
                "default": "I do not take any medicine",
                "es": "No tomo ningún medicamento",
              }, 
            },
          ],
          rows: [
            {
              value: "q10",
              text: {
                "default": "How much do you know about your illness?",
                "es": "¿Cuánto sabe sobre su enfermedad?",
              },
            },
            {
              value: "q11",
              text: {
                "default": "How much do you know about taking care of your illness?",
                "es": "¿Cuánto sabes sobre el cuidado de tu enfermedad?",
              },
            },
            {
              value: "q12",
              text: {
                "default": "How much do you know about what will happen if you do not take your medicine?",
                "es": "¿Cuánto sabe sobre lo que le ocurrirá si no toma sus medicamentos?",
              },
            },
          ],
          alternateRows: true,
          isAllRowRequired: true,
        },
        {
          type: "matrix",
          name: "section3",
          title: {
            "default": "Some patients may find it hard to do certain things. Please check what best describes how easy or hard you feel it would be for you.",
            "es": "Ciertas cosas son difíciles de hacer para algunos pacientes. ¿Qué tan fácil o difícil es hacer las siguientes cosas? Por favor marque la mejor respuesta que le describe HOY.",
          },
          columns: [
            {
              value: 1,
              text: {
                "default": "Very Hard",
                "es": "Muy difícil",
              },
            },
            {
              value: 2,
              text: {
                "default": "Somewhat Hard",
                "es": "Algo difícil",
              },
            },
            {
              value: 3,
              text: {
                "default": "Neither Hard nor Easy",
                "es": "Más o Menos",
              },
            },
            {
              value: 4,
              text: {
                "default": "Somewhat Easy",
                "es": "Algo fácil",
              },
            },
            {
              value: 5,
              text: {
                "default": "Very Easy",
                "es": "Muy fácil",
              },
            },
            {
              value: 8,
              text: {
                "default": "I do not take any medicine",
                "es": "No tomo ningún medicamento",
              }, 
            },
          ],
          rows: [
            {
              value: "q13",
              text: {
                "default": "How easy or hard is it for you to talk to your doctor?",
                "es": "¿Le resulta fácil o difícil hablar con su médico?",
              },
            },
            {
              value: "q14",
              text: {
                "default": "How easy or hard is it for you to make a plan with your doctor to care for your health?",
                "es": "¿Le resulta fácil o difícil hacer un plan con su médico para cuidar de su salud?",
              },
            },
            {
              value: "q15",
              text: {
                "default": "How easy or hard is it for you to see your doctor by yourself?",
                "es": "¿Le resulta fácil o difícil acudir solo al médico?",
              },
            },
            {
              value: "q16",
              text: {
                "default": "How easy or hard is it for you to take your medicines the way they are supposed to be taken?",
                "es": "¿Le resulta fácil o difícil tomar los medicamentos como debe?",
              },
            },
            {
              value: "q17",
              text: {
                "default": "How easy or hard is it for you to take care of yourself?",
                "es": "¿Le resulta fácil o difícil cuidarse?",
              },
            },
            {
              value: "q18",
              text: {
                "default": "How easy or hard do you think it will be for you to find other doctors?",
                "es": "¿Le parece fácil o difícil encontrar otros médicos?",
              },
            },
          ],
        },
      ],
    },
  ],
  showQuestionNumbers: "on",
  calculatedValues: [
    {
      name: "score1",
      expression:
        "{section1.q5} + {section2.q10} + {section2.q11} + {section2.q12}",
        includeIntoResult: true,
    },
    {
      name: "score2",
      expression: "{section1.q1} + {section1.q8} + {section3.q16} + {section3.q17} + {section3.q18}",
      includeIntoResult: true,
    },
    {
      name: "score3",
      expression: "{section1.q9} + {section3.q13} + {section3.q14} + {section3.q15}",
      includeIntoResult: true,
    }
  ],
  completedHtml:
    "<h2>Thank you for completing the survey</h2></br><h2>Your readiness score is {score} </h2> </br> <h2> Contact your provider to interpret this score. </h2> </br><h2>For resources on how to improve your skills, visit <a href = https://www.med.unc.edu/transition/transition-tools/copy_of_educational-handouts-for-trxansition-indextm/>our resources page</a></h2>",
};
