import {ThemeNames} from 'src/types';
import {HeaderModeItemsT} from 'src/components/Header/types';

const HEADER_MODE_ITEMS: HeaderModeItemsT[] = [
  {value: ThemeNames.dark, name: 'Dark'},
  {value: ThemeNames.light, name: 'Light'},
];

export default HEADER_MODE_ITEMS;
