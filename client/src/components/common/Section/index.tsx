'use client';

import {memo} from 'react';
import {Container, Typography} from '@mui/material';
import {SectionProps} from 'src/components/common/Section/types';
import {ROUTES} from 'src/types';
import {GeneralLink} from 'src/styles';
import * as Styled from 'src/components/common/Section/styles';

function Section({
  children,
  title,
  link = ROUTES.HOME,
}: SectionProps): JSX.Element {
  return (
    <section>
      <Container>
        {title && (
          <Styled.Header>
            <Typography variant="h2">{title}</Typography>

            <GeneralLink href={link}>
              <Styled.Button variant="text">View all</Styled.Button>
            </GeneralLink>
          </Styled.Header>
        )}

        {children}
      </Container>
    </section>
  );
}

export default memo(Section);
