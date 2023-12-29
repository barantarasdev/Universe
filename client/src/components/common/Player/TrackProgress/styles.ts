'use client';

import {Grid as MUIGrid, Typography, styled} from '@mui/material';

export const Grid = styled(MUIGrid)(({theme: {spacing}}) => ({
  alignItems: 'center',
  gap: spacing(3),
}));

export const Time = styled(Typography)(({theme: {palette}}) => ({
  color: palette.primary.dark,
  fontSize: 16,
}));
