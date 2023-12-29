'use client';

import {memo} from 'react';
import {SvgIcon} from '@mui/material';
import useNavLink from 'src/components/NavLink/useNavLink';
import {NavLinkProps} from 'src/components/NavLink/types';
import * as Styled from 'src/components/NavLink/styles';

function NavLink({item: {href, icon, text}}: NavLinkProps): JSX.Element {
  const {navLinkClasses} = useNavLink({href});

  return (
    <Styled.NavLink href={href}>
      <Styled.Button style={navLinkClasses}>
        <SvgIcon component={icon} />

        <Styled.Text>{text}</Styled.Text>
      </Styled.Button>
    </Styled.NavLink>
  );
}

export default memo(NavLink);
