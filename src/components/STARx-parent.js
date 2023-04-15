import React, {useState, useEffect} from "react";
import { StylesManager, Model } from "survey-react";
import { Survey } from "survey-react";
import "survey-react";
import "../index.css";
import { json } from "../surveys/starx-parent";
import Result from "./Result"
import "survey-core/survey.i18n"
import { useSelector } from "react-redux";
import { storeParentSurvey } from "../database/api";

StylesManager.applyTheme("defaultV2");

function SParent() {
  const survey = new Model(json);
  const [isCompleted, setIsCompleted] = useState(false)
  const [score, setScore] = useState([])

  const lang = useSelector((state)=>state.lang.value)

  useEffect(()=>{
    survey.locale = lang
  }, [lang])

  const handleCompletion = (sender) => {
    setScore([sender.data.score1, sender.data.score2, sender.data.score3])
    setIsCompleted(true)
    storeParentSurvey(sender.data)
  }

  survey.onComplete.add(handleCompletion)

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
