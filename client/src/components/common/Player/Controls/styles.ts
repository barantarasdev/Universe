'use client';

import {Box, IconButton, styled} from '@mui/material';

export const PlayIconButton = styled(IconButton)(({theme: {palette}}) => ({
  backgroundColor: palette.primary.main,
  color: palette.primary.light,

  '&:hover': {
    backgroundColor: palette.primary.main,
    opacity: 0.7,
  },
}));

export const Container = styled(Box)(({theme: {spacing}}) => ({
  display: 'flex',
  alignItems: 'center',
  gap: spacing(1),
}));
