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
  const [scoreData, setScoreData] = useState([])
  const [plainData, setPlainData] = useState([])

  const lang = useSelector((state)=>state.lang.value)

  useEffect(()=>{
    survey.locale = lang
  }, [lang])

  const handleCompletion = (sender) => {
    setScoreData(sender.data)
    setPlainData(sender.getPlainData())
    setIsCompleted(true)
    storeParentSurvey(sender.data)
  }

  survey.onComplete.add(handleCompletion)

  var surveyRender = !isCompleted ? (
    <Survey
      model={survey}
      showCompletedPage={false}
    />
  ) : (<Result scoreData={scoreData} plainData={plainData}/>)

  return (
    <div>
      {surveyRender}
      {/* <Result /> */}
    </div>
  );
}

export default SParent;
