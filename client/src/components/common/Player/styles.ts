'use client';

import {Box, Grid as MUIGrid, styled} from '@mui/material';
import {ASIDE_WIDTH, PLAYER_HEIGHT} from 'src/constants';

export const Player = styled(Box)(({theme: {spacing, palette}}) => ({
  width: '-webkit-fill-available',
  height: PLAYER_HEIGHT,
  padding: `0 ${spacing(5)}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: palette.secondary.contrastText,
  backdropFilter: 'blur(47.5px)',
  position: 'fixed',
  bottom: 0,
  left: ASIDE_WIDTH,
  zIndex: 2,
}));

export const Grid = styled(MUIGrid)(({theme: {spacing}}) => ({
  alignItems: 'center',
  gap: spacing(5),
}));

export const Controls = styled(MUIGrid)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});
