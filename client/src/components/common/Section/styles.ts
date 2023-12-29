'use client';

import {Box, Button as MUIButton, styled} from '@mui/material';

export const Header = styled(Box)(({theme: {spacing}}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: spacing(5),
}));

export const Button = styled(MUIButton)(({theme: {palette}}) => ({
  color: palette.primary.main,
  fontWeight: 600,
}));
