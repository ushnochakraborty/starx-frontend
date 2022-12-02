import React from "react";
import { StylesManager, Model } from "survey-react";
import { Survey } from "survey-react";
import "survey-react";
import "../index.css";
import { json } from "../surveys/trxansition-parent";

StylesManager.applyTheme("defaultV2");

var survey = new Model(json);

function TParent() {
  return (
    <div>
      <Survey model={survey} />
    </div>
  );
}
export default TParent;
