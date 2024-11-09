import { millionaireQuiz } from "../utilis/constants";
import { moneyArray } from "../utilis/constants";

export const randomQuestionsIndexes = (language) => {
    let indexes = [];
    while(indexes.length < moneyArray.length+1){
        const randomIndex = Math.floor(Math.random() * millionaireQuiz[language].length);
        !indexes.includes(randomIndex) && indexes.push(randomIndex);
    }
    const questions = indexes.map(index => millionaireQuiz[language][index]);    
    return questions;
};
