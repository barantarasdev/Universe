'use client';

import {CardMedia as MUICardMedia, styled, Typography} from '@mui/material';

export const CardMedia = styled(MUICardMedia)(({theme: {spacing}}) => ({
  width: '100%',
  height: 170,
  marginBottom: spacing(4),
  borderRadius: 100,
}));

export const Name = styled(Typography)(({theme: {palette, mixins}}) => ({
  color: palette.primary.dark,
  fontWeight: 500,
  textAlign: 'center',
  ...mixins.textEllipsis,
}));
