import {memo} from 'react';
import InDevelopment from 'src/components/InDevelopment';
import Section from 'src/components/common/Section';

function Artists(): JSX.Element {
  return (
    <Section>
      <InDevelopment />
    </Section>
  );
}
export default memo(Artists);
