'use client';

import {Box, Typography, styled} from '@mui/material';
import Image from 'next/image';

export const Container = styled(Box)(({theme: {spacing}}) => ({
  display: 'flex',
  alignItems: 'center',
  gap: spacing(2),
}));

export const Thumbnail = styled(Image)({
  borderRadius: 100,
  objectFit: 'cover',
  objectPosition: 'center',
});

export const InfoContainer = styled('div')({
  width: '100%',
  overflow: 'hidden',
});

export const Name = styled(Typography)(({theme: {palette, mixins}}) => ({
  color: palette.primary.dark,
  fontSize: 16,
  ...mixins.textEllipsis,
}));

export const Author = styled(Typography)({
  color: '#8E8E8E',
});
