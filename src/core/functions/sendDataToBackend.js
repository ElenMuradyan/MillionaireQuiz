import { doc, setDoc, collection, increment, arrayUnion, deleteDoc, getDocs, where, query } from "firebase/firestore";
import { FIRESTORE_PATH_NAMES } from "../utilis/constants";
import { db } from '../../services/firebase';

export const createQuestionDoc = async ( uid, quizId ) => {
    const userRef = doc(db, FIRESTORE_PATH_NAMES.REGISTER_USERS, uid);
    const quizRef = doc(collection(userRef, "quizzes"), quizId);

    const quizDoc = {
        questions: [],
        coins: 0,
    };
    try{
        await setDoc(quizRef, quizDoc);
        console.log("Quiz data created successfully!");
    }catch(error){
        console.error("Error creating quiz document:", error);
    }
}

export const addQuestion = async ( uid, question, trueAnswer, quizId ) => {
    const userRef = doc(db, FIRESTORE_PATH_NAMES.REGISTER_USERS, uid);
    const quizRef = doc(collection(userRef, FIRESTORE_PATH_NAMES.QUIZZES), quizId);
    const userDocRef = doc(db, FIRESTORE_PATH_NAMES.REGISTER_USERS, uid);
    try{
        await setDoc(quizRef, {
            questions: arrayUnion({ [question]: trueAnswer}),
            coins: increment(1)
            }, {merge: true});
        await setDoc(userDocRef, {
            coins: increment(1)
        },{merge: true})
    }catch(error){
        console.error("Error adding question:", error);
    }
}

export const cleanQuizzes = async ( uid ) => {
    const userRef = doc(db, FIRESTORE_PATH_NAMES.REGISTER_USERS, uid);
    const quizzesRef = collection(userRef, FIRESTORE_PATH_NAMES.QUIZZES);

    const q = query(quizzesRef, where("questions", "==", []), where("coins", "==", 0));

    try{
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            return;
          }    

        for (const quizDoc of querySnapshot.docs){
            const quizId = quizDoc.id;
            const quizRef = doc(db, FIRESTORE_PATH_NAMES.REGISTER_USERS, uid, FIRESTORE_PATH_NAMES.QUIZZES, quizId);
            await deleteDoc(quizRef);
        }
    }catch{
        console.error("Error cleaning up quizzes: ");
    }
}