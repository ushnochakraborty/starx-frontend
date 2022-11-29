import React from "react";
import { StylesManager, Model } from "survey-react";
import { Survey } from "survey-react";
import "survey-react";
import "../index.css";
import { json } from "../surveys/starx-adult";

StylesManager.applyTheme("defaultV2");
export default function SurveyComponent() {
  const survey = new Model(json);
  return (
    <div>
      <h1>STARx Adult Survey</h1>
      <Survey model={survey} />;
    </div>
  );
}
