'use client';

import {
  Card as MUICard,
  CardMedia as MUICardMedia,
  IconButton,
  styled,
  Typography,
} from '@mui/material';

export const Card = styled(MUICard)({
  width: '100%',
});

export const CardMedia = styled(MUICardMedia)(({theme: {spacing}}) => ({
  width: '100%',
  height: 170,
  marginBottom: spacing(3),
  borderRadius: 10,
  position: 'relative',
}));

export const CardMediaButton = styled(IconButton)(({theme: {palette}}) => ({
  width: 36,
  height: 36,
  color: palette.primary.light,
  background: 'rgba(18, 18, 18, 0.50)',
  borderRadius: 100,
  position: 'absolute',
  right: 10,
  bottom: 10,

  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
}));

export const Name = styled(Typography)(
  ({theme: {spacing, palette, mixins}}) => ({
    marginBottom: spacing(1),
    color: palette.primary.dark,
    fontSize: 16,
    userSelect: 'none',
    ...mixins.textEllipsis,
  }),
);

export const AuthorName = styled(Typography)(({theme: {palette, mixins}}) => ({
  color: palette.text.primary,
  userSelect: 'none',
  ...mixins.textEllipsis,
}));
