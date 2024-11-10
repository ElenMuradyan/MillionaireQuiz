import { doc, setDoc, collection, increment, arrayUnion, deleteDoc, getDocs, where, query, getDoc } from "firebase/firestore";
import { FIRESTORE_PATH_NAMES, moneyArray } from "../utilis/constants";
import { db } from '../../services/firebase';

export const createQuestionDoc = async ( uid, quizId ) => {
    const userRef = doc(db, FIRESTORE_PATH_NAMES.REGISTER_USERS, uid);
    const quizRef = doc(collection(userRef, FIRESTORE_PATH_NAMES.QUIZZES), quizId);

    const quizDoc = {
        questions: [],
        coins: 0,
        money: 0
    };
    try{
        await setDoc(quizRef, quizDoc);
    }catch(error){
        console.error("Error creating quiz document:", error);
    }
}

export const addQuestion = async ( uid, question, trueAnswer, quizId, currentCoins, isTrue ) => {
    const userRef = doc(db, FIRESTORE_PATH_NAMES.REGISTER_USERS, uid);
    const quizRef = doc(collection(userRef, FIRESTORE_PATH_NAMES.QUIZZES), quizId);

    try{ 
        await setDoc(quizRef, {
            questions: arrayUnion({ [question]: trueAnswer}),
            }, {merge: true});
       isTrue && await setDoc(userRef, {
            coins: increment(1),
            money: increment(moneyArray[currentCoins].state ? moneyArray[currentCoins].money : 0)
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

export const getUserCoinsandMoney = async (uid) => {
    const userRef = doc(db, FIRESTORE_PATH_NAMES.REGISTER_USERS, uid);

    try{
        const docSnap = await getDoc(userRef);

        if(docSnap.exists()){
            const userData = docSnap.data();
            const coins = userData.coins || 0;
            const money = userData.money || 0;
            return [coins, money];
        }else{
            return 0;
        }
    }catch(error){
        console.error("Error fetching user coins:", error);
        return 0;
    }
}