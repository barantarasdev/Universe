import {combineReducers} from '@reduxjs/toolkit';
import playerReducer from 'src/store/slices/playerSlice';
import themeReducer from 'src/store/slices/themeSlice';

const rootReducer = combineReducers({
  theme: themeReducer,
  player: playerReducer,
});

export default rootReducer;
