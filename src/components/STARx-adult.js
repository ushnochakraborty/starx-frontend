import React from "react";
import { StylesManager, Model } from "survey-react";
import { Survey } from "survey-react";
import "survey-react";
import "../index.css";
import { json } from "../surveys/starx-adult";

StylesManager.applyTheme("defaultV2");

var survey = new Model(json);

function sendDataToServer(survey) {
  //send Ajax request to your web server
  alert("The results are: " + JSON.stringify(survey.data));
}

function SAdult() {
  return <Survey model={survey} onComplete={sendDataToServer} />;
}
export default SAdult;
