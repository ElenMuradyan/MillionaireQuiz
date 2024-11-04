import { millionaireQuiz } from "../utilis/constants";
import { moneyArray } from "../utilis/constants";

const randomQuestionsIndexes = () => {
    let indexes = [];
    while(indexes.length < moneyArray.length+1){
        const randomIndex = Math.floor(Math.random() * millionaireQuiz.length);
        !indexes.includes(randomIndex) && indexes.push(randomIndex);
    }
    const questions = indexes.map(index => millionaireQuiz[index]);    
    return questions;
};

export {
    randomQuestionsIndexes,
}