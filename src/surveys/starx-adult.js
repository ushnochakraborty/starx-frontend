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
            "default": "Please enter your 9-digit unique ID if you are a returning user. Enter zero otherwise",
            "es": "Introduzca su ID único de 9 dígitos si es un usuario recurrente. En caso contrario, introduzca cero"
          },
          defaultValue: "0",
          isRequired: true
        },
        {
          type: "dropdown",
          inputType: "number",
          name: "patient_dob",
          title: {
            "default": "Please enter your year of birth",
            "es": "Introduzca su año de nacimiento"
          },
          isRequired: true,
          choices: [1901,
1902,
1903,
1904,
1905,
1906,
1907,
1908,
1909,
1910,
1911,
1912,
1913,
1914,
1915,
1916,
1917,
1918,
1919,
1920,
1921,
1922,
1923,
1924,
1925,
1926,
1927,
1928,
1929,
1930,
1931,
1932,
1933,
1934,
1935,
1936,
1937,
1938,
1939,
1940,
1941,
1942,
1943,
1944,
1945,
1946,
1947,
1948,
1949,
1950,
1951,
1952,
1953,
1954,
1955,
1956,
1957,
1958,
1959,
1960,
1961,
1962,
1963,
1964,
1965,
1966,
1967,
1968,
1969,
1970,
1971,
1972,
1973,
1974,
1975,
1976,
1977,
1978,
1979,
1980,
1981,
1982,
1983,
1984,
1985,
1986,
1987,
1988,
1989,
1990,
1991,
1992,
1993,
1994,
1995,
1996,
1997,
1998,
1999,
2000,
2001,
2002,
2003,
2004,
2005,
2006,
2007,
2008,
2009,
2010,
2011,
2012,
2013,
2014,
2015,
2016,
2017,
2018,
2019,
2020,
2021,
2022,
2023]
        },
        {
          type: "dropdown",
          name: "patient_dod",
          title: {
            "default": "Please enter your age of diagnosis",
            "es": "Introduzca su edad en el momento del diagnóstico"
          },
          isRequired: true,
          choices: [
            {
              value: -1,
              text: {
                "default": "Before birth",
                "es": "Antes del nacimiento"
              }
            },
            {
              value: 0,
              text: {
                "default": "Less than one year of age",
                "es": "Menos de un año de edad"
              }
            },
            1,
2,
3,
4,
5,
6,
7,
8,
9,
10,
11,
12,
13,
14,
15,
16,
17,
18,
19,
20,
21,
22,
23,
24,
25,
26,
27,
28,
29,
30,
31,
32,
33,
34,
35,
36,
37,
38,
39,
40,
41,
42,
43,
44,
45,
46,
47,
48,
49,
50,
51,
52,
53,
54,
55,
56,
57,
58,
59,
60,
61,
62,
63,
64,
65,
66,
67,
68,
69,
70,
71,
72,
73,
74,
75,
76,
77,
78,
79,
80,
81,
82,
83,
84,
85,
86,
87,
88,
89,
90,
91,
92,
93,
94,
95,
96,
97,
98,
99,
100,
101,
102,
103,
104,
105,
106,
107,
108,
109,
110,
111,
112,
113,
114,
115,
116,
117,
118,
119,
120,
121,
122
          ]
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
          type: "panel",
          name: "section1",
          title:{
            "default": "Please check the one that shows how often you have done each thing in the past 3 months.",
            "es": "Por favor marque la frecuencia en cada situación durante los últimos 3 meses.",
          },
          elements: [
            {
              type: "matrix",
              name: "q1-1",
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
              ],
              rows: [
                {
                  value: "q1",
                  text:{
                    "default": "How often did you make an effort to understand what your doctor told you?",
                    "es": "¿Con qué frecuencia se esforzaba por entender lo que le decía su médico?",
                  },
                },
              ],
              alternateRows: true,
              isAllRowRequired: true,
            },
            {
              type: "matrix",
              name: "q2-2",
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
                  value: 0,
                  text: {
                    "default": "I do not take any medicine",
                    "es": "No tomo ningún medicamento",
                  }, 
                },
              ],
              rows: [
                {
                  value: "q2",
                  text: {
                    "default": "How often did you take your medicines on your own?",
                    "es": "¿Con qué frecuencia tomaba los medicamentos por su cuenta?",
                  },
                },
              ],
              alternateRows: true,
              isAllRowRequired: true,
            },
            {
              type: "matrix",
              name: "q3-4",
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
              ],
              rows: [
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
              ],
              alternateRows: true,
              isAllRowRequired: true,
            },
            {
              type: "matrix",
              name: "q5-6",
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
                  value: 0,
                  text: {
                    "default": "I do not take any medicine",
                    "es": "No tomo ningún medicamento",
                  }, 
                },
              ],
              rows: [
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
              ],
              alternateRows: true,
              isAllRowRequired: true,
            },
            {
              type: "matrix",
              name: "q7-7",
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
              ],
              rows: [
                {
                  value: "q7",
                  text: {
                    "default": "How often did you use the internet, books, or other guides to find out more about your illness?",
                    "es": "¿Con qué frecuencia utilizó Internet, libros u otras guías para obtener más información sobre su enfermedad?",
                  },
                },
              ],
              alternateRows: true,
              isAllRowRequired: true,
            },
            {
              type: "matrix",
              name: "q8-8",
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
                  value: 0,
                  text: {
                    "default": "I do not take any medicine",
                    "es": "No tomo ningún medicamento",
                  }, 
                },
              ],
              rows: [
                {
                  value: "q8",
                  text: {
                    "default": "How often did you forget to take your medicines?",
                    "es": "¿Con qué frecuencia olvidaba tomar sus medicamentos?",
                  },
                },
              ],
              alternateRows: true,
              isAllRowRequired: true,
            },
            {
              type: "matrix",
              name: "q9-9",
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
              ],
              rows: [
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
          ]
        },
        {
          type: "panel",
          name: "section2",
          title:{
            "default": "Some patients know a lot about their heatlh and some patients do not. How much do you konw? Please check the best answer.",
            "es": "Algunos pacientes saben mucho acerca de su salud y algunos no saben mucho. Por favor marque la repuesta que describe mejor su situación HOY.",
          },
          elements: [
            {
              type: "matrix",
              name: "q10-11",
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
              ],
              alternateRows: true,
              isAllRowRequired: true,
            },
            {
              type: "matrix",
              name: "q12-12",
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
                  value: 0,
                  text: {
                    "default": "I do not take any medicine",
                    "es": "No tomo ningún medicamento",
                  }, 
                },               
              ],
              rows: [
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
          ]
        },
        {
          type: "panel",
          name: "section3",
          title:{
            "default": "Some patients may find it hard to do certain things. Please check what best describes how easy or hard you feel it would be for you.",
            "es": "Ciertas cosas son difíciles de hacer para algunos pacientes. ¿Qué tan fácil o difícil es hacer las siguientes cosas? Por favor marque la mejor respuesta que le describe HOY.",
          },
          elements: [
            {
              type: "matrix",
              name: "q13-15",
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
              ],
              alternateRows: true,
              isAllRowRequired: true,
            },
            {
              type: "matrix",
              name: "q16-16",
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
                  value: 0,
                  text: {
                    "default": "I do not take any medicine",
                    "es": "No tomo ningún medicamento",
                  }, 
                },            
              ],
              rows: [
                {
                  value: "q16",
                  text: {
                    "default": "How easy or hard is it for you to take your medicines the way they are supposed to be taken?",
                    "es": "¿Le resulta fácil o difícil tomar los medicamentos como debe?",
                  },
                },               
              ],
              alternateRows: true,
              isAllRowRequired: true,
            },
            {
              type: "matrix",
              name: "q17-18",
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
              ],
              rows: [
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
              alternateRows: true,
              isAllRowRequired: true,
            },
          ]
        }
      ],
    }
  ],


  showQuestionNumbers: "off",
  calculatedValues: [
    {
      name: "score1",
      expression:
        "{q5-6.q5} + {q10-11.q10} + {q10-11.q11} + {q12-12.q12}",
        includeIntoResult: true,
    },
    {
      name: "score2",
      expression: "{q1-1.q1} + {q8-8.q8} + {q16-16.q16} + {q17-18.q17} + {q17-18.q18}",
      includeIntoResult: true,
    },
    {
      name: "score3",
      expression: "{q9-9.q9} + {q13-15.q13} + {q13-15.q14} + {q13-15.q15}",
      includeIntoResult: true,
    }
  ],
  completedHtml:
    "<h2>Thank you for completing the survey</h2></br><h2>Your readiness score is {score} </h2> </br> <h2> Contact your provider to interpret this score. </h2> </br><h2>For resources on how to improve your skills, visit <a href = https://www.med.unc.edu/transition/transition-tools/copy_of_educational-handouts-for-trxansition-indextm/>our resources page</a></h2>",
};
