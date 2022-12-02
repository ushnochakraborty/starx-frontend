import React from "react";
import { StylesManager, Model } from "survey-react";
import { Survey } from "survey-react";
import "survey-react";
import "../index.css";
import { json } from "../surveys/starx-parent";

StylesManager.applyTheme("defaultV2");

var survey = new Model(json);

function sendDataToServer(survey) {
  //send Ajax request to your web server
  alert("The results are: " + JSON.stringify(survey.data));
}

function SParent() {
  return (
    <div>
      {" "}
      <Survey
        model={survey}
        onComplete={window.open("./results")}
        align="center"
      />{" "}
    </div>
  );
}
export default SParent;
