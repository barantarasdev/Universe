'use client';

import {Button as MUIButton, styled} from '@mui/material';

export const Header = styled('header')(({theme: {spacing}}) => ({
  margin: `${spacing(6)} 0px ${spacing(5)}`,
  display: 'flex',
  alignItems: 'center',
  gap: spacing(4),
}));

export const Button = styled(MUIButton)(({theme: {palette, spacing}}) => ({
  padding: `${spacing(1)}px ${spacing(4)}px`,
  color: palette.primary.light,
  background: palette.primary.contrastText,
  borderRadius: 12,
  letterSpacing: -0.26,
  textTransform: 'initial',
  transition: 'box-shadow 0.4s',

  '&:hover': {
    boxShadow: `0 1px 11px 0 ${palette.primary.main}`,
  },
}));
