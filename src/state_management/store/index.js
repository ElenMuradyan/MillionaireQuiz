import GameSlice from '../slice/gameSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        GameSlice: GameSlice,
    }
});

