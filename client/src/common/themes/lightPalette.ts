import {createTheme, responsiveFontSizes, Theme} from '@mui/material/styles';

const lightPalette: Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#7C74EE',
      light: '#FFFFFF',
      dark: '#121212',
      contrastText: 'linear-gradient(90deg, #8568F5 0%, #3DC3C0 100%)',
    },
    secondary: {
      main: '#3C3E43',
      light: 'rgba(0, 0, 0, 0.04)',
      dark: '#B9B9B9',
      contrastText: 'rgba(0, 0, 0, 0.12)',
    },
    text: {
      primary: '#6B6B6B',
      secondary: '#999999',
      disabled: '#B5B5B5',
    },
    background: {
      default: '#F8F8F8',
      paper: '#F8F8F8',
    },
  },
});

export default responsiveFontSizes(lightPalette);
