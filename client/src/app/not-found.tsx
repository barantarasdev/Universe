import {memo} from 'react';
import {Typography} from '@mui/material';
import {ROUTES} from 'src/types';
import {GeneralLink, Section, SectionButton} from 'src/styles';

function NotFound(): JSX.Element {
  return (
    <Section>
      <Typography variant="h1">404</Typography>

      <Typography variant="subtitle1">
        The page you are looking for <br />
        has been lost in space.
      </Typography>

      <GeneralLink href={ROUTES.HOME}>
        <SectionButton>Return Home</SectionButton>
      </GeneralLink>
    </Section>
  );
}

export default memo(NotFound);
