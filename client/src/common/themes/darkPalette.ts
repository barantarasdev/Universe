import {Theme, createTheme, responsiveFontSizes} from '@mui/material/styles';

const darkPalette: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7C74EE',
      light: '#FFFFFF',
      dark: '#D1D1D1',
      contrastText: 'linear-gradient(90deg, #8568F5 0%, #3DC3C0 100%)',
    },
    secondary: {
      main: '#A3A3A3',
      light: 'rgba(255, 255, 255, 0.04)',
      dark: '#FFFFFF',
      contrastText: 'rgba(255, 255, 255, 0.12)',
    },
    text: {
      primary: '#ADADAD',
      secondary: '#D1D1D1',
      disabled: '#FFFFFF',
    },
    background: {
      default: '#121212',
      paper: '#121212',
    },
  },
});

export default responsiveFontSizes(darkPalette);
