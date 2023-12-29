'use client';

import {List as MUIList, styled} from '@mui/material';

export const Aside = styled('aside')(({theme: {spacing, palette}}) => ({
  width: '100%',
  padding: `${spacing(5)} ${spacing(4)}`,
  boxShadow: `0px 3px 16px 0px ${palette.secondary.contrastText}`,
  position: 'sticky',
  top: 0,
  left: 0,
}));

export const List = styled(MUIList)(({theme: {spacing}}) => ({
  gap: spacing(3),
}));
