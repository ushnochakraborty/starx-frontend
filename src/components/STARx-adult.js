import React from "react";
import { Survey, Model } from "survey-react";
import "survey-react";
import { json } from "../surveys/starx-adult";
import "survey-core/defaultV2.min.css";

import { StylesManager } from "survey-core";

StylesManager.applyTheme("defaultV2");

const survey = new Model(json);

survey.onComplete.add((survey) => {
  const resultData = [];
  for (const key in survey.data) {
    const question = survey.getQuestionByName(key);
    if (!!question) {
      const item = {
        name: key,
        value: question.value,
        title: question.disaplyValue,
        displayValue: question.displayValue,
      };
      resultData.push(item);
    }
  }
  console.log(resultData);
});

function sendDataToServer(survey) {
  //send Ajax request to your web server
  //alert("The results are: " + JSON.stringify(survey.data));
  var ret = JSON.stringify(survey.data);
  const results = JSON.parse(ret);

  alert(results);
  return <div></div>;
}

function SAdult() {
  survey.onComplete.add((survey) => {
    const resultData = [];
    for (const key in survey.data) {
      const question = survey.getQuestionByName(key);
      if (!!question) {
        const item = {
          name: key,
          value: question.value,
          title: question.disaplyValue,
          displayValue: question.displayValue,
        };
        resultData.push(item);
      }
    }
    console.log({
      ...resultData[5].value,
      ...resultData[6].value,
      ...resultData[7].value,
    });
  });
  return (
    <div>
      <Survey
        model={survey}
        onComplete={window.open("./results")}
        align="center"
      />
    </div>
  );
}
export default SAdult;
