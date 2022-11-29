import React from "react";
import { StylesManager, Model } from "survey-react";
import { Survey } from "survey-react";
import "survey-react";
import "../index.css";
import { json } from "../surveys/trxansition-adult";

StylesManager.applyTheme("defaultV2");
function SurveyComponent() {
  const survey = new Model(json);
  return (
    <div>
      <h1>TRxANSITION Adult Survey</h1>
      <Survey model={survey} />;
    </div>
  );
}
export default SurveyComponent;
