import React from "react";
import { StylesManager, Model } from "survey-react";
import { Survey } from "survey-react";
import "survey-react";
import "../index.css";
import { json } from "../surveys/trxansition-parent";

StylesManager.applyTheme("defaultV2");
function SurveyComponent() {
  const survey = new Model(json);
  return (
    <div>
      <h1>TRxANSITION Parent Survey</h1>
      <Survey model={survey} />;
    </div>
  );
}
export default SurveyComponent;
