'use client';

import {styled, Typography} from '@mui/material';

const Headline = styled(Typography)(({theme: {spacing, palette}}) => ({
  marginBottom: spacing(3),
  color: palette.secondary.main,
  fontWeight: 700,
}));

export default Headline;
