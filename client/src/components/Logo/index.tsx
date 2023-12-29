import {memo} from 'react';
import {IconButton} from '@mui/material';
import Image from 'next/image';
import logo from 'public/images/logo.svg';
import {LogoProps} from 'src/components/Logo/types';
import {ROUTES} from 'src/types';
import {GeneralLink} from 'src/styles';
import Text from 'src/components/Logo/styles';

function Logo({width = 64}: LogoProps): JSX.Element {
  return (
    <GeneralLink href={ROUTES.HOME}>
      <IconButton edge="start">
        <Image src={logo} width={width} priority alt="logo" />

        <Text>Universe</Text>
      </IconButton>
    </GeneralLink>
  );
}

export default memo(Logo);
