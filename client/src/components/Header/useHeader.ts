import {useCallback} from 'react';
import {toggleTheme} from 'src/store/slices/themeSlice';
import {useAppDispatch, useAppSelector} from 'src/hooks/useRedux';
import {UseHeaderR} from 'src/components/Header/types';

function useHeader(): UseHeaderR {
  const {theme} = useAppSelector(state => state.theme);
  const dispatch = useAppDispatch();

  const onChange = useCallback(() => {
    dispatch(toggleTheme());
  }, [dispatch]);

  return {theme, onChange};
}

export default useHeader;
