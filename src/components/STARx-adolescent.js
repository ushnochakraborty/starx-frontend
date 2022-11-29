import React from "react";
import { StylesManager, Model } from "survey-react";
import { Survey } from "survey-react";
import "survey-react";
import "../index.css";
import { json } from "../surveys/starx-pediatric";

StylesManager.applyTheme("defaultV2");
function SAdol() {
  const survey = new Model(json);
  return (
    <div>
      <h1>STARx Adolescent Survey</h1>
      <Survey model={survey} />
    </div>
  );
}
export default SAdol;
