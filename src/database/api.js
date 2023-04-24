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
        q1: result.section1.q1,
        q2: result.section1.q2,
        q3: result.section1.q3,
        q4: result.section1.q4,
        q5: result.section1.q5,
        q6: result.section1.q6,
        q7: result.section1.q7,
        q8: result.section1.q8,
        q9: result.section1.q9,
        q10: result.section2.q10,
        q11: result.section2.q11,
        q12: result.section2.q12,
        q13: result.section3.q13,
        q14: result.section3.q14,
        q15: result.section3.q15,
        q16: result.section3.q16,
        q17: result.section3.q17,
        q18: result.section3.q18,
        score_sec1: result.score1,
        score_sec2: result.score2,
        score_sec3: result.score3,
        score_total: result.score1+result.score2+result.score3
    }).catch((error) => {
        console.error("Error adding document: ", error);
    });
}


export {storeParentSurvey}