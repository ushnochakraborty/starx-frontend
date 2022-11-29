import React from "react";
import { StylesManager, Model } from "survey-react";
import { Survey } from "survey-react";
import "survey-react";
import "../index.css";
import { json } from "../surveys/trxansition-adolescent";

StylesManager.applyTheme("defaultV2");
function SurveyComponent() {
  const survey = new Model(json);
  return <Survey model={survey} marginLeft="25px" />;
}
export default SurveyComponent;
