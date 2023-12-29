'use client';

import {Box, styled} from '@mui/material';

const Container = styled(Box)(({theme: {spacing}}) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing(4),
  position: 'relative',
}));

export default Container;
