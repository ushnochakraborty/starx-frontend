export const json = {
  title: "Cuestionario para los adultos",
  logoPosition: "right",
  pages: [
    {
      name: "page0",
      elements: [
        {
          type: "radiogroup",
          name: "dob.preq",
          title: "¿Tiene 88 años de edad o más?",
          choices: ["Sí", "No"],
          isRequired: true,
        },
        {
          type: "radiogroup",
          name: "meds",
          title: "¿Tomas medicación?",
          choices: [
            {
              value: 0,
              text: "Sí",
            },
            {
              value: 36,
              text: "No",
            },
          ],
          isRequired: true,
        },
      ],
    },
    {
      name: "page1",
      elements: [
        {
          type: "text",
          name: "date.of.birth",
          title: "Por favor, introduzca su fecha de nacimiento",
          inputType: "integer",
          visibleIf: "{dob.preq} != Yes",
        },
        {
          type: "text",
          name: "date.of.diagnosis",
          title: "Por favor ingrese su fecha de diagnóstico",
          inputType: "integer",
          visibleIf: "{dob.preq} != Yes",
        },
        {
          type: "dropdown",
          name: "race",
          title: "Por favor ingrese su raza",
          isRequired: true,
          choices: [
            {
              value: "Prefer not to answer",
              text: "Prefiero no responder",
            },
            {
              value: "American Indian or Alaskan Native",
              text: "Indio americano o nativo de Alaska",
            },
            {
              value: "Asian",
              text: "Asiático",
            },
            {
              value: "Black or African American",
              text: "Negro o afroamericano",
            },
            {
              value: "Hispanic or Latino",
              text: "Hispano o latino",
            },
            {
              value: "Native Hawaiian or Other Pacific Islander",
              text: "Nativo hawaiano u otro isleño del Pacífico",
            },
            {
              value: "White",
              text: "Blanco",
            },
            {
              value: "Other",
              text: "Otra",
            },
          ],
        },
        {
          type: "dropdown",
          name: "gender",
          title: "¿Cuál es su género autoidentificado?",
          isRequired: true,
          choices: [
            {
              value: "Male",
              text: "Hombre",
            },
            {
              value: "Female",
              text: "Mujer",
            },
            {
              value: "Other",
              text: "Otra",
            },
            {
              value: "Prefer not to say",
              text: "Prefiero no responder",
            },
          ],
        },
        {
          type: "text",
          name: "num.of.medications",
          title: "¿Cuántos medicamentos toma?",
          isRequired: true,
          inputType: "number",
          min: 0,
          visibleIf: "{meds} == 0",
        },
      ],
      title: "Preliminary Questions",
      description:
        "Por favor, conteste a las siguientes preguntas. Las preguntas con asteriscos (*) deben ser contestadas.",
    },
    {
      name: "page2",
      elements: [
        {
          type: "matrix",
          name: "section1",
          title:
            "Por favor marque la frecuencia en cada situación durante los últimos 3 meses.",
          isRequired: true,
          columns: [
            {
              value: 1,
              text: "Nunca",
            },
            {
              value: 2,
              text: "Casi nunca",
            },
            {
              value: 3,
              text: "A veces",
            },
            {
              value: 4,
              text: "Casi siempre",
            },
            {
              value: 5,
              text: "Siempre",
            },
          ],
          rows: [
            {
              value: "q1",
              text: "¿Con qué frecuencia entiende lo que su médico/a le dijo?",
            },
            {
              value: "q2",
              text: " ¿Con qué frecuencia toma las medicinas por su cuenta?",
              visibleIf: "{num.of.medications} != 0",
            },
            {
              value: "q3",
              text:
                " ¿Con qué frecuencia hace preguntas a su médico/enfermera/equipo de salud sobre su enfermedad, medicinas o atención médica?",
            },
            {
              value: "q4",
              text: " ¿Con qué frecuencia solicita sus propias citas? ",
            },
            {
              value: "q5",
              text:
                "¿Con qué frecuencia necesita a alguien para recordarle a tomar sus medicinas?",
              visibleIf: "{num.of.medications} != 0",
            },
            {
              value: "q6",
              text:
                "¿Con qué frecuencia usa cosas como cajas para pastillas, calendarios o alarmas para ayudarle a recordar a tomar sus medicinas?",
              visibleIf: "{num.of.medications} != 0",
            },
            {
              value: "q7",
              text:
                "¿Con qué frecuencia usa el Internet, libros u otras guías para averiguar más sobre su enfermedad?",
            },
            {
              value: "q8",
              text: "¿Con qué frecuencia olvida tomar sus medicinas?",
              visibleIf: "{num.of.medications} != 0",
            },
            {
              value: "q9",
              text:
                "¿Con qué frecuencia discute o pregunta a su médico para ocuparse el manejo de nuevos problemas de salud que surgieron?",
            },
          ],
        },
        {
          type: "matrix",
          name: "section2",
          title:
            "Algunos pacientes saben mucho acerca de su salud y algunos no saben mucho. Por favor marque la repuesta que describe mejor su situación HOY.",
          isRequired: true,
          columns: [
            {
              value: 1,
              text: "Nada",
            },
            {
              value: 2,
              text: "Muy poco",
            },
            {
              value: 3,
              text: "Poco",
            },
            {
              value: 4,
              text: "Algo",
            },
            {
              value: 5,
              text: "Mucho",
            },
          ],
          rows: [
            {
              value: "q10",
              text: " ¿Cuánto sabe acerca de su enfermedad?",
            },
            {
              value: "q11",
              text: "¿Cuánto sabe sobre el cuidado de su enfermedad?",
            },
            {
              value: "q12",
              text:
                "¿Cuánto sabe de lo que pasaría si no se toma sus medicinas?",
              visibleIf: "{num.of.medications} != 0",
            },
          ],
        },
        {
          type: "matrix",
          name: "section3",
          title:
            "Ciertas cosas son difíciles de hacer para algunos pacientes. ¿Qué tan fácil o difícil es hacer las siguientes cosas? Por favor marque la mejor respuesta que le describe HOY.",
          isRequired: true,
          columns: [
            {
              value: 1,
              text: "Muy difícil",
            },
            {
              value: 2,
              text: "Algo difícil",
            },
            {
              value: 3,
              text: "Más o Menos",
            },
            {
              value: 4,
              text: "Algo fácil",
            },
            {
              value: 5,
              text: "Muy fácil",
            },
          ],
          rows: [
            {
              value: "q13",
              text: "¿Qué tan fácil o difícil es hablar con su médico? ",
            },
            {
              value: "q14",
              text:
                "¿Qué tan fácil o difícil es hacer un plan de tratamiento con su médico para cuidar por su salud?",
            },
            {
              value: "q15",
              text:
                " ¿Qué tan fácil o difícil es ver a su médico usted mismo(a) solo(a), sin sus padres?",
            },
            {
              value: "q16",
              text:
                " ¿Qué tan fácil o difícil es tomar sus medicinas en la manera y tiempo correctos?",
              visibleIf: "{num.of.medications} != 0",
            },
            {
              value: "q17",
              text: "¿Qué tan fácil o difícil es cuidar por usted mismo(a)?",
            },
            {
              value: "q18",
              text:
                "¿Qué tan fácil o difícil será hacer un transición/cambio hacia los médicos de adultos?",
            },
          ],
        },
      ],
      title: "STARx Survey",
    },
  ],
  showQuestionNumbers: "on",
  calculatedValues: [
    {
      name: "score",
      expression:
        "{meds} + {section1.q1} + {section1.q2} + {section1.q3} + {section1.q4} + {section1.q5}+ {section1.q6} + {section1.q7} + {section1.q8} + {section1.q9} + {section2.q10} + {section2.q11} + {section2.q12} + {section3.q13} + {section3.q14} + {section3.q15} + {section3.q16} + {section3.q17} + {section3.q18}",
      includeIntoResult: true,
    },
  ],
  completedHtml:
    "<h2>Gracias por completar la cuestionario</h2></br><h2>Su puntaje de preparación es {score} </h2> </br> <h2> Póngase en contacto con su proveedor para interpretar esta puntuación. </h2> </br><h2>Para obtener recursos sobre cómo mejorar sus habilidades, visite <a href = https://www.med.unc.edu/transition/transition-tools/copy_of_educational-handouts-for-trxansition-indextm/>nuestra página de recursos</a></h2>",
};
