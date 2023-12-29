import {memo} from 'react';
import {Typography} from '@mui/material';
import StyledInDevelopment from 'src/components/InDevelopment/styles';

function InDevelopment(): JSX.Element {
  return (
    <StyledInDevelopment>
      <Typography variant="h1">In development...</Typography>;
    </StyledInDevelopment>
  );
}

export default memo(InDevelopment);
