import GameSlice from '../slice/gameSlice';
import HelperButtonsSlice from '../slice/helperButtonsSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        GameSlice,
        HelperButtonsSlice,
    }
});

