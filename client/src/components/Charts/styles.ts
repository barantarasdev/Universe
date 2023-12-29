'use client';

import {Box, IconButton, styled} from '@mui/material';
import {Swiper as StyledSwiper} from 'src/styles';

export const NextButton = styled(IconButton)({
  borderRadius: 10,
});

export const Content = styled(Box)({
  display: 'flex',
});

export const Swiper = styled(StyledSwiper)(({theme: {spacing}}) => ({
  marginRight: spacing(4),
}));
