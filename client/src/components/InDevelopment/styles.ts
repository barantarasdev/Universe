'use client';

import {Box, styled} from '@mui/material';

const StyledInDevelopment = styled(Box)(({theme: {mixins}}) => ({
  flexDirection: 'column',
  textAlign: 'center',
  ...mixins.positionCenter,
  ...mixins.flexCenter,
}));

export default StyledInDevelopment;
