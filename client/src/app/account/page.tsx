import {memo} from 'react';
import Section from 'src/components/common/Section';
import InDevelopment from 'src/components/InDevelopment';

function Account(): JSX.Element {
  return (
    <Section>
      <InDevelopment />
    </Section>
  );
}

export default memo(Account);
