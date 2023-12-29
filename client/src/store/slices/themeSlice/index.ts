import {createSlice} from '@reduxjs/toolkit';
import {ThemeNames} from 'src/types';
import initialState from 'src/store/slices/themeSlice/constants';

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => ({
      theme:
        state.theme === ThemeNames.dark ? ThemeNames.light : ThemeNames.dark,
    }),
  },
});

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;
