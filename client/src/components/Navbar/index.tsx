import {memo} from 'react';
import {Box, List, ListItem} from '@mui/material';
import NavLink from 'src/components/NavLink';
import {NavbarProps} from 'src/components/Navbar/types';
import Headline from 'src/components/Navbar/styles';

function Navbar({text, items}: NavbarProps): JSX.Element {
  return (
    <Box>
      <Headline>{text}</Headline>

      <List>
        {items.map(item => (
          <ListItem key={item.href}>
            <NavLink item={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default memo(Navbar);
