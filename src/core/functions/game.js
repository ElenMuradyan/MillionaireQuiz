import { millionaireQuiz } from "../utilis/constants";

const randomQuestionsIndexes = () => {
    let indexes = [];
    while(indexes.length < 17){
        const randomIndex = Math.floor(Math.random() * millionaireQuiz.length);
        !indexes.includes(randomIndex) && indexes.push(randomIndex);
    }
    const questions = indexes.map(index => millionaireQuiz[index]);    
    return questions;
};

export {
    randomQuestionsIndexes,
}