export const getTrueAnswer = (answers) => {
    return answers.filter(answer => answer.isCorrect.answer);
}