import {ThemeNames} from 'src/types';

export interface HeaderModeItemsT {
  value: ThemeNames;
  name: string;
}

export interface UseHeaderR {
  theme: ThemeNames;
  onChange: () => void;
}
