'use client';

import {memo, useCallback} from 'react';
import {Typography} from '@mui/material';
import {Section, SectionButton} from 'src/styles';

function Error({reset}: {reset: () => void}): JSX.Element {
  const onClick = useCallback(() => {
    reset();
  }, [reset]);

  return (
    <Section>
      <Typography variant="h1">Something went wrong!</Typography>

      <SectionButton onClick={onClick}>Try again</SectionButton>
    </Section>
  );
}

export default memo(Error);
