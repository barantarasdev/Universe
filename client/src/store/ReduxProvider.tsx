'use client';

import {ReactNode} from 'react';
import {Provider} from 'react-redux';
import {store} from 'src/store';

function ReduxProvider({children}: {children: ReactNode}): JSX.Element {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxProvider;
