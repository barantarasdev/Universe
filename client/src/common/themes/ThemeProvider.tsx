'use client';

import {ReactNode, memo} from 'react';
import {CssBaseline, ThemeProvider as MUIThemeProvider} from '@mui/material';

import useTheme from 'src/hooks/useTheme';

function ThemeProvider({children}: {children: ReactNode}): JSX.Element {
  const {theme} = useTheme();

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

export default memo(ThemeProvider);
