'use client';

import {ListItemButton, Typography, styled} from '@mui/material';
import lightPalette from 'src/common/themes/lightPalette';
import {GeneralLink} from 'src/styles';

export const NavLink = styled(GeneralLink)({
  width: '100%',
});

export const Button = styled(ListItemButton)(({theme: {palette, spacing}}) => ({
  width: '100%',
  alignItems: 'center',
  gap: spacing(2),
  color: palette.text.secondary,
}));

export const Text = styled(Typography)({
  fontWeight: 600,
});

export const Active = {
  color: lightPalette.palette.primary.light,
  background: lightPalette.palette.primary.contrastText,
};
