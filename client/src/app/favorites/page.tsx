import {memo} from 'react';
import InDevelopment from 'src/components/InDevelopment';
import Section from 'src/components/common/Section';

function Favorites(): JSX.Element {
  return (
    <Section>
      <InDevelopment />
    </Section>
  );
}
export default memo(Favorites);
