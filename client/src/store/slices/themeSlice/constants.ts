import {ThemeNames} from 'src/types';
import {ThemeStateT} from 'src/store/slices/themeSlice/types';

const initialState: ThemeStateT = {
  theme: ThemeNames.light,
};

export default initialState;
