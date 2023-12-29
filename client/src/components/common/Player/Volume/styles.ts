'use client';

import {Box, styled} from '@mui/material';

export const Volume = styled(Box)(({theme: {spacing}}) => ({
  display: 'flex',
  alignItems: 'center',
  gap: spacing(2),
}));

export const ButtonsContainer = styled(Box)({
  display: 'flex',
});
