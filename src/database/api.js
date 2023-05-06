import {db} from './firebase'
import {getDocs, addDoc, collection, query, where, getDoc, doc, setDoc, updateDoc, deleteDoc} from 'firebase/firestore'

async function storeParentSurvey(result, uid){
    const parentSurveyRef = collection(db, 'parentsurveys')
    const docRef = await addDoc(parentSurveyRef, {
        uid: uid,
        age: result.patient_dob,
        age_diag: result.patient_dod,
        race: result.patient_race,
        gender: result.gender,
        meds: result.num_meds,
        q1: result['q1-1'].q1,
        q2: result['q2-2'].q2,
        q3: result['q3-4'].q3,
        q4: result['q3-4'].q4,
        q5: result['q5-6'].q5,
        q6: result['q5-6'].q6,
        q7: result['q7-7'].q7,
        q8: result['q8-8'].q8,
        q9: result['q9-9'].q9,
        q10: result['q10-11'].q10,
        q11: result['q10-11'].q11,
        q12: result['q12-12'].q12,
        q13: result['q13-15'].q13,
        q14: result['q13-15'].q14,
        q15: result['q13-15'].q15,
        q16: result['q16-16'].q16,
        q17: result['q17-18'].q17,
        q18: result['q17-18'].q18,
        score_sec1: result.score1,
        score_sec2: result.score2,
        score_sec3: result.score3,
        score_total: result.score1+result.score2+result.score3
    }).catch((error) => {
        console.error("Error adding document: ", error);
    });
}


export {storeParentSurvey}