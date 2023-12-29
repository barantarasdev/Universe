import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import initialState from 'src/store/slices/playerSlice/constants';
import {MusicCardT} from 'src/types';

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setMusic: (state, action: PayloadAction<MusicCardT | null>) => ({
      ...state,
      music: action.payload,
    }),
    setIsPlaying: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isPlaying: action.payload,
    }),
  },
});

export const {setMusic, setIsPlaying} = playerSlice.actions;
export default playerSlice.reducer;
