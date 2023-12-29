'use client';

import {Button, CircularProgress, Grid, styled} from '@mui/material';
import Link from 'next/link';
import {
  Swiper as SwiperReact,
  SwiperSlide as SwiperSlideReact,
} from 'swiper/react';
import {ASIDE_WIDTH, PLAYER_HEIGHT} from 'src/constants';
import 'swiper/swiper-bundle.css';

export const Section = styled('section')(({theme: {spacing, mixins}}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: spacing(2),
  textAlign: 'center',
  ...mixins.positionCenter,
}));

export const SectionButton = styled(Button)(({theme: {palette}}) => ({
  color: palette.primary.light,
}));

export const Swiper = styled(SwiperReact)({
  width: '100%',
  height: '100%',
  marginLeft: 0,
});

export const SwiperSlide = styled(SwiperSlideReact)({
  width: '170px !important',
});

export const GeneralLink = styled(Link)({
  display: 'block',
  textDecoration: 'none',
});

export const GridItem = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: PLAYER_HEIGHT + 10,
});

export const AsideGridItem = styled(Grid)({
  width: ASIDE_WIDTH,
});

export const Spinner = styled(CircularProgress)(({theme: {mixins}}) => ({
  ...mixins.positionCenter,
}));
