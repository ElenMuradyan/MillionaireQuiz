import GameSlice from '../slice/gameSlice';
import HelperButtonsSlice from '../slice/helperButtonsSlice';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';

const gamePersistConfig = {
    key: 'root',         
    storage,             
  };

  const helperButtonsPersistConfig = {
    key: 'helperButtons', 
    storage,          
  };

const persistedGameSlice = persistReducer(gamePersistConfig, GameSlice);
const persistedHelperButtonsSlice = persistReducer(helperButtonsPersistConfig, HelperButtonsSlice);

export const store = configureStore({
    reducer: {
        GameSlice: persistedGameSlice,
        HelperButtonsSlice: persistedHelperButtonsSlice,
    }
});

export const persistor = persistStore(store);
