'use client';

import {
  Card as MUICard,
  CardContent as MUICardContent,
  CardMedia as MUICardMedia,
  List as MUIList,
  styled,
} from '@mui/material';

export const Card = styled(MUICard)(({theme: {spacing}}) => ({
  display: 'flex',
  gap: spacing(4),
}));

export const CardMedia = styled(MUICardMedia)({
  minWidth: 170,
  height: 228,
  borderRadius: 10,
});

export const CardContent = styled(MUICardContent)({
  width: '100%',
});

export const List = styled(MUIList)({
  height: '100%',
});
