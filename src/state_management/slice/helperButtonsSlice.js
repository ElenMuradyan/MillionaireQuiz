import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    fifty_fifty: [],
    fifty_fifty_clicked:false,
    changeQuestionClicked: false,
    trueAnswer: false,
};

const HelperButtonsSlice = createSlice({
    name:'helperButtonsSlice',
    initialState,
    reducers: {
        changeFiftyClicked: state => {
            state.fifty_fifty_clicked = true
        },
        changeFifty: (state, action) => {
            state.fifty_fifty = action.payload;
        },
        changeQuestionIndex: state => {
            state.questionIndex++;
        },
        setChangeQuestionClicked: (state, action) => {
            state.changeQuestionClicked = action.payload;
        },
        setTrueAnswer: (state, action) => {
            state.trueAnswer = action.payload;
        },
        ButtonsRender: () => initialState
    }
})

export default HelperButtonsSlice.reducer;
export const { changeFiftyClicked, changeFifty, setChangeQuestionClicked, setTrueAnswer, changeQuestionIndex, ButtonsRender } = HelperButtonsSlice.actions;
