'use client';

import {memo} from 'react';
import {Avatar, Container} from '@mui/material';
import Search from 'src/components/common/Search';
import Select from 'src/components/common/Select';
import useHeader from 'src/components/Header/useHeader';
import HEADER_MODE_ITEMS from 'src/components/Header/constants';
import {GeneralLink} from 'src/styles';
import {ROUTES} from 'src/types';
import * as Styled from 'src/components/Header/styles';

function Header(): JSX.Element {
  const {theme, onChange} = useHeader();

  return (
    <Container>
      <Styled.Header>
        <Search />

        <Select
          items={HEADER_MODE_ITEMS}
          value={theme}
          onChange={onChange}
          label="Mode"
        />

        <GeneralLink href={ROUTES.PREMIUM}>
          <Styled.Button>Premium</Styled.Button>
        </GeneralLink>

        <Avatar />
      </Styled.Header>
    </Container>
  );
}

export default memo(Header);
