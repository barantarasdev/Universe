import {ReactNode, memo} from 'react';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {Grid} from '@mui/material';
import Player from 'src/components/common/Player';
import Aside from 'src/components/Aside';
import Main from 'src/components/Main/styles';
import ReduxProvider from 'src/store/ReduxProvider';
import ThemeProvider from 'src/common/themes/ThemeProvider';
import * as Styled from 'src/styles';
import Header from 'src/components/Header';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Universe',
  description: 'Universe - musics',
};

function RootLayout({children}: {children: ReactNode}): JSX.Element {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ReduxProvider>
          <ThemeProvider>
            <Grid container>
              <Styled.AsideGridItem item>
                <Aside />
              </Styled.AsideGridItem>

              <Styled.GridItem item xs>
                <Header />

                <Main>{children}</Main>

                <Player />
              </Styled.GridItem>
            </Grid>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}

export default memo(RootLayout);
