import React, {useState, useEffect} from "react";
import { StylesManager, Model } from "survey-react";
import { Survey } from "survey-react";
import "survey-react";
import "../index.css";
import { json } from "../surveys/starx-parent";
import Result from "./Result"
import "survey-core/survey.i18n"
import { useSelector } from "react-redux";

StylesManager.applyTheme("defaultV2");

var survey = new Model(json);

function sendDataToServer(survey) {
  //send Ajax request to your web server
  alert("The results are: " + JSON.stringify(survey.data));
}

function SParent() {
  const [isCompleted, setIsCompleted] = useState(false)
  const [score, setScore] = useState([])

  const lang = useSelector((state)=>state.lang.value)

  useEffect(()=>{
    survey.locale = lang
  }, [lang])

  const handleCompletion = () => {
    setIsCompleted(true);
  }

  survey.onComplete.add((sender) => {
    setScore([sender.data.score1, sender.data.score2, sender.data.score3])
    handleCompletion()
  })

  var surveyRender = !isCompleted ? (
    <Survey
      model={survey}
      showCompletedPage={false}
    />
  ) : (<Result score1={score[0]} score2={score[1]} score3={score[2]}/>)

  return (
    <div>
      {surveyRender}
    </div>
  );
}

export default SParent;
