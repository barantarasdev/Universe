import {createTheme} from '@mui/material';
import type {Theme} from '@mui/material/styles';
import lightPalette from 'src/common/themes/lightPalette';
import darkPalette from 'src/common/themes/darkPalette';

const createCommonTheme = (theme: Theme): Theme =>
  createTheme({
    ...theme,
    spacing: 5,
    mixins: {
      flexCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      positionCenter: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
      textEllipsis: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
    },
    transitions: {
      duration: {
        standard: 100,
      },
    },
    typography: {
      allVariants: {
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 'normal',
      },
      h2: {
        color: theme.palette.primary.dark,
        fontSize: 24,
        fontWeight: 500,
      },
      h1: {
        fontSize: 60,
        fontWeight: 500,
      },
    },
    components: {
      MuiList: {
        styleOverrides: {
          root: {
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
          },
        },
      },
      MuiListItem: {
        styleOverrides: {
          root: {
            padding: 0,
            height: '100%',
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            padding: `15px 20px`,
            borderRadius: 12,
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          '&::-webkit-scrollbar': {
            width: '6px',
          },

          '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.primary.main,
          },

          '&::-webkit-scrollbar-track': {
            backgroundColor: theme.palette.secondary.main,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            width: '100%',
            padding: 0,
            background: 'transparent',
            boxShadow: 'none',
            boxSizing: 'border-box',
          },
        },
      },
      MuiFormControl: {
        styleOverrides: {
          root: {
            width: 130,
          },
        },
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            padding: 0,

            '&:last-child': {
              padding: 0,
            },
          },
        },
      },
      MuiButton: {
        defaultProps: {
          variant: 'contained',
        },
      },
      MuiCircularProgress: {
        defaultProps: {
          color: 'primary',
          size: 60,
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            borderRadius: 10,
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          fullWidth: true,
        },
      },
    },
  });

export const lightTheme = createTheme(createCommonTheme(lightPalette));
export const darkTheme = createTheme(createCommonTheme(darkPalette));
