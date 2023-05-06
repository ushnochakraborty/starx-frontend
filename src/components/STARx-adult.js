import React, {useState, useEffect} from "react";
import { StylesManager, Model } from "survey-react";
import { Survey } from "survey-react";
import "survey-react";
import "../index.css";
import { json } from "../surveys/starx-adult";
import Result from "./Result"
import "survey-core/survey.i18n"
import { useSelector } from "react-redux";
import { storeParentSurvey } from "../database/api";
import { nanoid, customAlphabet } from "nanoid"
import "./STARx.css"


const survey = new Model(json);

function SAdult() {
  const survey = new Model(json);
  const [isCompleted, setIsCompleted] = useState(false)
  const [scoreData, setScoreData] = useState([])
  const [plainData, setPlainData] = useState([])
  const [uid, setUid] = useState("")

  const lang = useSelector((state)=>state.lang.value)

  //survey.locale = "es";

  useEffect(()=>{
    survey.locale = lang
  }, [lang])

  const handleCompletion = (sender) => {
    let fixedData = sender.data
    if(fixedData['q5-6'].q5 === 0) {
      fixedData['score1'] += 5
    }
    if(fixedData['q12-12'].q12 === 0){
      fixedData['score1'] += 5
    }
    if(fixedData['q8-8'].q8 === 0) {
      fixedData['score2'] += 5
    }
    if(fixedData['q16-16'].q16 === 0) {
      fixedData['score2'] += 5
    }
    setScoreData(fixedData)
    setPlainData(sender.getPlainData())
    const nanoid = customAlphabet('1234567890', 9)
    const id = sender.data.uid === "0" ? nanoid() : sender.data.uid
    setUid(id)
    setIsCompleted(true)
    storeParentSurvey(sender.data, id)
  }

  survey.onComplete.add(handleCompletion)


  var surveyRender = !isCompleted ? (
    <Survey
      model={survey}
      showCompletedPage={false}
    />
  ) : (<Result scoreData={scoreData} plainData={plainData} uid={uid}/>)

  return (
    <div>
      {surveyRender}
    </div>
  );
}
export default SAdult;
