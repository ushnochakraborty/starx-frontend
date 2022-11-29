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
      <h1>STARx Parent Survey</h1>{" "}
      <Survey model={survey} onComplete={sendDataToServer} />{" "}
      <h2>Have questions? Feel free to reach out to us at the support tab</h2>
      <h3>Results</h3>
      <p>Your child's progress is on track!</p>
      <p>
        In order to learn more about your child's journey you can send your
        results to your provider, or refer to the resources page linked above
        for specific pamphlets regarding your growth areas
      </p>
    </div>
  );
}
export default SParent;
