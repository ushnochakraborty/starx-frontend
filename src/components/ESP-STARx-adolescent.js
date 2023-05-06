import React from "react";
import { StylesManager, Model } from "survey-react";
import { Survey } from "survey-react";
import "survey-react";
import "../index.css";
import { json } from "../surveys/ESP-starx-pediatric";

StylesManager.applyTheme("defaultV2");
function SAdolESP() {
  const survey = new Model(json);
  return (
    <div>
      <Survey model={survey} />
    </div>
  );
}
export default SAdolESP;
