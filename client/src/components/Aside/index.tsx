import {memo} from 'react';
import Logo from 'src/components/Logo';
import Navbar from 'src/components/Navbar';
import {ITEMS} from 'src/components/Aside/constants';
import * as Styled from 'src/components/Aside/styles';

function Aside(): JSX.Element {
  return (
    <Styled.Aside>
      <Logo />

      <Styled.List>
        {ITEMS.map(({items, text}) => (
          <Navbar key={text} items={items} text={text} />
        ))}
      </Styled.List>
    </Styled.Aside>
  );
}

export default memo(Aside);
