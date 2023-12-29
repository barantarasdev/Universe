'use client';

import {
  Box,
  ListItemButton as MUIListItemButton,
  styled,
  Typography,
} from '@mui/material';

export const ListItemButton = styled(MUIListItemButton)(
  ({theme: {spacing}}) => ({
    padding: spacing(1),
    display: 'flex',
    alignItems: 'center',
    gap: spacing(2),
  }),
);

export const CardIndexBox = styled(Box)(({theme: {mixins, palette}}) => ({
  width: 33,
  height: 33,
  fontSize: 20,
  color: palette.primary.dark,
  ...mixins.flexCenter,
}));

export const Name = styled(Typography)(
  ({theme: {palette, mixins, spacing}}) => ({
    marginBottom: spacing(1),
    fontSize: 16,
    color: palette.primary.dark,
    ...mixins.textEllipsis,
  }),
);

export const MusicInfo = styled(Typography)(({theme: {palette}}) => ({
  color: palette.text.primary,
}));
