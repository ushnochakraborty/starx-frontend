import React from "react";
import { StylesManager, Model } from "survey-react";
import { Survey } from "survey-react";
import "survey-react";
import "../index.css";
import { json } from "../surveys/trxansition-adolescent";

StylesManager.applyTheme("defaultV2");
function SurveyComponent() {
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
  return <Survey model={survey} />;
}
export default SurveyComponent;
