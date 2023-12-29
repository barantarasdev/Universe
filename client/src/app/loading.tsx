import {memo} from 'react';
import {Spinner} from 'src/styles';

function Loading(): JSX.Element {
  return <Spinner />;
}

export default memo(Loading);
