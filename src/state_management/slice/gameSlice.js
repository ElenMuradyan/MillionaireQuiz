import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
    name:'gameSlice',
    initialState:{
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
    },
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
        render: (state, action) => {
            state.coins = 0;
            state.questions = action.payload;
            state.modalOpen = false;
            state.submit = false;
            state.questionIndex = 0;
            state.fifty_fifty = 1;
            state.fifty_fifty_clicked = false;
            state.changeQuestionClicked = false
        }
    }
})

export default gameSlice.reducer;
export const { addCoins, renderCoins, createQuestions, changeModalOpen, changeSubmit, changeQuestionIndex, render, changeMessage, changeFiftyClicked, changeFifty, setChangeQuestionClicked, setTrueAnswer } = gameSlice.actions;