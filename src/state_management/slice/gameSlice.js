import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    coins: 0,
    questions: [],
    modalOpen: false,
    submit: false,
    questionIndex: 0,
    message: '',
    fifty_fifty: [],
    fifty_fifty_clicked:false,
    changeQuestionClicked: false,
    trueAnswer: false
};

const gameSlice = createSlice({
    name:'gameSlice',
    initialState,
    reducers: {
        addCoins: state => {
            state.coins++;
        },
        renderCoins:  state => {
            state.coins = 0;
        },
        createQuestions: (state, action) => {
            state.questions = action.payload;
        },
        changeModalOpen: (state,action) => {
            state.modalOpen = action.payload;
        },
        changeSubmit: (state,action) => {
            state.submit = action.payload;
        },
        changeQuestionIndex: state => {
            state.questionIndex++;
        },
        changeMessage: (state, action) => {
            state.message = action.payload;
        },
        changeFifty: (state, action) => {
            state.fifty_fifty = action.payload;
        },
        changeFiftyClicked: state => {
            state.fifty_fifty_clicked = true
        },
        setChangeQuestionClicked: (state, action) => {
            state.changeQuestionClicked = action.payload;
        },
        setTrueAnswer: (state, action) => {
            state.trueAnswer = action.payload;
        },
        render: () => initialState
    }
})

export default gameSlice.reducer;
export const { addCoins, renderCoins, createQuestions, changeModalOpen, changeSubmit, changeQuestionIndex, render, changeMessage, changeFiftyClicked, changeFifty, setChangeQuestionClicked, setTrueAnswer } = gameSlice.actions;