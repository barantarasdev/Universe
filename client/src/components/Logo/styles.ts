'use client';

import {Typography, styled} from '@mui/material';

const Text = styled(Typography)(({theme: {palette}}) => ({
  color: palette.primary.main,
  fontSize: 20,
  letterSpacing: 1.2,
}));

export default Text;
