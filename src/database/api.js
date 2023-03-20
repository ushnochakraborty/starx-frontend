import {db} from './firebase'
import {getDocs, addDoc, collection, query, where, getDoc, doc, setDoc, updateDoc, deleteDoc} from 'firebase/firestore'


async function storeParentSurvey(){
    const parentSurveyRef = collection(db, 'parentsurveys')
    const docRef = await addDoc(parentSurveyRef, {
        q1: 'test1',
        q2: "test2",
        q3: "test3"
    }).catch((error) => {
        console.error("Error adding document: ", error);
    });
    alert("Document written with ID: ", docRef.id);
}


export {storeParentSurvey}