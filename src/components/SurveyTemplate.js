import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";

export default function SurveyTemplate() {
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizechange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizechange);
  }, []);

  const isMobile = width < 600;

  const [pointValues, setPointValues] = useState({});

  const handleChange = (event, id) => {
    setPointValues((pointValues) => ({
      ...pointValues,
      [id]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    let allAnswered = true;
    for (let i = 1; i < 19; i++) {
      if (!(`q${i}` in pointValues)) {
        allAnswered = false;
      }
    }
    console.log(allAnswered);
  };

  const section1 = [
    {
      text: "question 1",
      id: "q1",
      options: [
        { id: 0, text: "Never", value: 1 },
        { id: 1, text: "Almost Never", value: 2 },
        { id: 2, text: "Soemtimes", value: 3 },
        { id: 3, text: "Almost Always", value: 4 },
        { id: 4, text: "Always", value: 5 },
        { id: 5, text: "I do not take any medicine", value: 0 },
      ],
    },
    {
      text: "question 2",
      id: "q2",
      options: [
        { id: 0, text: "Never", value: 1 },
        { id: 1, text: "Almost Never", value: 2 },
        { id: 2, text: "Soemtimes", value: 3 },
        { id: 3, text: "Almost Always", value: 4 },
        { id: 4, text: "Always", value: 5 },
        { id: 5, text: "I do not take any medicine", value: 6 },
      ],
    },
    {
      text: "question 2",
      id: "q3",
      options: [
        { id: 0, text: "Never", value: 1 },
        { id: 1, text: "Almost Never", value: 2 },
        { id: 2, text: "Soemtimes", value: 3 },
        { id: 3, text: "Almost Always", value: 4 },
        { id: 4, text: "Always", value: 5 },
        { id: 5, text: "I do not take any medicine", value: 6 },
      ],
    },
    {
      text: "question 2",
      id: "q4",
      options: [
        { id: 0, text: "Never", value: 1 },
        { id: 1, text: "Almost Never", value: 2 },
        { id: 2, text: "Soemtimes", value: 3 },
        { id: 3, text: "Almost Always", value: 4 },
        { id: 4, text: "Always", value: 5 },
        { id: 5, text: "I do not take any medicine", value: 6 },
      ],
    },
    {
      text: "question 2",
      id: "q5",
      options: [
        { id: 0, text: "Never", value: 1 },
        { id: 1, text: "Almost Never", value: 2 },
        { id: 2, text: "Soemtimes", value: 3 },
        { id: 3, text: "Almost Always", value: 4 },
        { id: 4, text: "Always", value: 5 },
        { id: 5, text: "I do not take any medicine", value: 6 },
      ],
    },
    {
      text: "question 2",
      id: "q6",
      options: [
        { id: 0, text: "Never", value: 1 },
        { id: 1, text: "Almost Never", value: 2 },
        { id: 2, text: "Soemtimes", value: 3 },
        { id: 3, text: "Almost Always", value: 4 },
        { id: 4, text: "Always", value: 5 },
        { id: 5, text: "I do not take any medicine", value: 6 },
      ],
    },
    {
      text: "question 2",
      id: "q7",
      options: [
        { id: 0, text: "Never", value: 1 },
        { id: 1, text: "Almost Never", value: 2 },
        { id: 2, text: "Soemtimes", value: 3 },
        { id: 3, text: "Almost Always", value: 4 },
        { id: 4, text: "Always", value: 5 },
        { id: 5, text: "I do not take any medicine", value: 6 },
      ],
    },
    {
      text: "question 2",
      id: "q8",
      options: [
        { id: 0, text: "Never", value: 1 },
        { id: 1, text: "Almost Never", value: 2 },
        { id: 2, text: "Soemtimes", value: 3 },
        { id: 3, text: "Almost Always", value: 4 },
        { id: 4, text: "Always", value: 5 },
        { id: 5, text: "I do not take any medicine", value: 6 },
      ],
    },
    {
      text: "question 2",
      id: "q9",
      options: [
        { id: 0, text: "Never", value: 1 },
        { id: 1, text: "Almost Never", value: 2 },
        { id: 2, text: "Soemtimes", value: 3 },
        { id: 3, text: "Almost Always", value: 4 },
        { id: 4, text: "Always", value: 5 },
        { id: 5, text: "I do not take any medicine", value: 6 },
      ],
    },
    {
      text: "question 2",
      id: "q10",
      options: [
        { id: 0, text: "Never", value: 1 },
        { id: 1, text: "Almost Never", value: 2 },
        { id: 2, text: "Soemtimes", value: 3 },
        { id: 3, text: "Almost Always", value: 4 },
        { id: 4, text: "Always", value: 5 },
        { id: 5, text: "I do not take any medicine", value: 6 },
      ],
    },
    {
      text: "question 2",
      id: "q11",
      options: [
        { id: 0, text: "Never", value: 1 },
        { id: 1, text: "Almost Never", value: 2 },
        { id: 2, text: "Soemtimes", value: 3 },
        { id: 3, text: "Almost Always", value: 4 },
        { id: 4, text: "Always", value: 5 },
        { id: 5, text: "I do not take any medicine", value: 6 },
      ],
    },
    {
      text: "question 2",
      id: "q12",
      options: [
        { id: 0, text: "Never", value: 1 },
        { id: 1, text: "Almost Never", value: 2 },
        { id: 2, text: "Soemtimes", value: 3 },
        { id: 3, text: "Almost Always", value: 4 },
        { id: 4, text: "Always", value: 5 },
        { id: 5, text: "I do not take any medicine", value: 6 },
      ],
    },
    {
      text: "question 2",
      id: "q13",
      options: [
        { id: 0, text: "Never", value: 1 },
        { id: 1, text: "Almost Never", value: 2 },
        { id: 2, text: "Soemtimes", value: 3 },
        { id: 3, text: "Almost Always", value: 4 },
        { id: 4, text: "Always", value: 5 },
        { id: 5, text: "I do not take any medicine", value: 6 },
      ],
    },
    {
      text: "question 2",
      id: "q14",
      options: [
        { id: 0, text: "Never", value: 1 },
        { id: 1, text: "Almost Never", value: 2 },
        { id: 2, text: "Soemtimes", value: 3 },
        { id: 3, text: "Almost Always", value: 4 },
        { id: 4, text: "Always", value: 5 },
        { id: 5, text: "I do not take any medicine", value: 6 },
      ],
    },
    {
      text: "question 2",
      id: "q15",
      options: [
        { id: 0, text: "Never", value: 1 },
        { id: 1, text: "Almost Never", value: 2 },
        { id: 2, text: "Soemtimes", value: 3 },
        { id: 3, text: "Almost Always", value: 4 },
        { id: 4, text: "Always", value: 5 },
        { id: 5, text: "I do not take any medicine", value: 6 },
      ],
    },
    {
      text: "question 2",
      id: "q16",
      options: [
        { id: 0, text: "Never", value: 1 },
        { id: 1, text: "Almost Never", value: 2 },
        { id: 2, text: "Soemtimes", value: 3 },
        { id: 3, text: "Almost Always", value: 4 },
        { id: 4, text: "Always", value: 5 },
        { id: 5, text: "I do not take any medicine", value: 6 },
      ],
    },
    {
      text: "question 2",
      id: "q17",
      options: [
        { id: 0, text: "Never", value: 1 },
        { id: 1, text: "Almost Never", value: 2 },
        { id: 2, text: "Soemtimes", value: 3 },
        { id: 3, text: "Almost Always", value: 4 },
        { id: 4, text: "Always", value: 5 },
        { id: 5, text: "I do not take any medicine", value: 6 },
      ],
    },
    {
      text: "question 2",
      id: "q18",
      options: [
        { id: 0, text: "Never", value: 1 },
        { id: 1, text: "Almost Never", value: 2 },
        { id: 2, text: "Soemtimes", value: 3 },
        { id: 3, text: "Almost Always", value: 4 },
        { id: 4, text: "Always", value: 5 },
        { id: 5, text: "I do not take any medicine", value: 6 },
      ],
    },
  ];

  return (
    <Container>
      <div className="question">
        {section1.map((question) => {
          return (
            <>
              <Typography>{question.text}</Typography>
              {/* {question.options.map((option) => {
              return (
                <Radio
                  checked={pointValues[question.id] === option.value}
                  onChange={(event) => handleChange(event, question.id)}
                  value={option.value}
                />
              );
            })} */}
              <FormControl>
                <RadioGroup
                  row
                  value={pointValues[question.id]}
                  onChange={(event) => handleChange(event, question.id)}
                >
                  {question.options.map((option) => {
                    return isMobile ? (
                      <FormControlLabel
                        value={option.value}
                        control={<Radio />}
                        label={
                          <div className="mobile-label">{option.text}</div>
                        }
                        labelPlacement="bottom"
                      />
                    ) : (
                      <FormControlLabel
                        value={option.value}
                        control={<Radio />}
                      />
                    );
                  })}
                </RadioGroup>
              </FormControl>
            </>
          );
        })}
      </div>
      <Button variant="text" onClick={handleSubmit}>
        Submit
      </Button>
    </Container>
  );
}
