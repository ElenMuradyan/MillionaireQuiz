import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    language: 'hy'
};

const LanguageSlice = createSlice({
    name:'langSlice',
    initialState,
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action.payload
        },
    }
})

export default LanguageSlice.reducer;
export const { changeLanguage } = LanguageSlice.actions;
