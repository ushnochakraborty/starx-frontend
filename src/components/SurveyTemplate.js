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

  console.log(new Array(18).fill(0));

  const [pointValues, setPointValues] = useState(new Array(18).fill(0));

  const handleChange = (event, i) => {
    setPointValues(event.target.value);
  };

  const section1 = [
    {
      text: "question 1",
      id: 0,
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
      id: 1,
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
                      label={<div className="mobile-label">{option.text}</div>}
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
  );
}
