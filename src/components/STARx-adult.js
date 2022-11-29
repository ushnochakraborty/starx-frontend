import React from "react";
import { StylesManager, Model } from "survey-react";
import { Survey } from "survey-react";
import "survey-react";
import { styles } from "../styles.js";
import "../index.css";
import { json } from "../surveys/starx-adult";

StylesManager.applyTheme("defaultV2");

var survey = new Model(json);

function sendDataToServer(survey) {
  //send Ajax request to your web server
  //alert("The results are: " + JSON.stringify(survey.data));
  var ret = JSON.stringify(survey.data);
  const results = JSON.parse(ret);

  alert(results);
  return (
    <div>
      <h1> Completed Survey </h1>
    </div>
  );
}

function SAdult() {
  return (
    <div>
      <h1>STARx Adult Survey</h1>
      <Survey
        model={survey}
        onComplete={window.open("./results")}
        align="center"
      />
      <h2>Have questions? Feel free to reach out to us at the support tab</h2>
      <h3>Results</h3>
      <p>
        Your areas of improvement are: Reliability, Treatment Care and Knowledge
        of Illness
      </p>
      <p>
        In order to learn more about these areas, you can send your results to
        your provider, or refer to the resources page linked above for specific
        pamphlets regarding your growth areas
      </p>
    </div>
  );
}
export default SAdult;
