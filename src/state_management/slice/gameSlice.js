import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
    name:'gameSlice',
    initialState:{
        coins: 0,
        questions: [],
        modalOpen: false,
        submit: false,
        questionIndex: 0,
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
        render: (state, action) => {
            state.coins = 0;
            state.questions = action.payload;
            state.modalOpen = false;
            state.submit = false;
            state.questionIndex = 0;
        }
    }
})

export default gameSlice.reducer;
export const { addCoins, renderCoins, createQuestions, changeModalOpen, changeSubmit, changeQuestionIndex, render } = gameSlice.actions;