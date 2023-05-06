import React from "react";
import { Survey, Model } from "survey-react";
import "survey-react";
import { json } from "../surveys/ESP-starx-adult";
import "survey-core/defaultV2.min.css";

import { StylesManager } from "survey-core";

StylesManager.applyTheme("defaultV2");

const survey = new Model(json);

function SAdultESP() {
  return (
    <div>
      <Survey model={survey} align="center" />
    </div>
  );
}
export default SAdultESP;
