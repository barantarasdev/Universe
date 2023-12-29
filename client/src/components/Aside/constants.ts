import {
  AccessTime,
  Book,
  Favorite,
  Home,
  LibraryMusic,
  Logout,
  Mic,
  MusicNote,
  Person,
  Settings,
} from '@mui/icons-material';
import {AsideButtonT, ROUTES} from 'src/types';
import {AsideItemT} from 'src/components/Aside/types';

export const DISCOVER_ITEMS: AsideButtonT[] = [
  {icon: Home, text: 'Home', href: ROUTES.HOME},
  {icon: Mic, text: 'Artist', href: ROUTES.ARTISTS},
  {icon: LibraryMusic, text: 'Album ', href: ROUTES.ALBUM},
  {icon: Mic, text: 'Podcast', href: ROUTES.PODCASTS},
  {icon: Book, text: 'Audio Book', href: ROUTES.AUDIO_BOOKS},
];

export const LIBRARY_ITEMS: AsideButtonT[] = [
  {icon: AccessTime, text: 'Recent', href: ROUTES.RECENT},
  {icon: Favorite, text: 'Favorite', href: ROUTES.FAVORITES},
  {icon: MusicNote, text: 'Playlist ', href: ROUTES.PLAYLIST},
];

export const MORE_ITEMS: AsideButtonT[] = [
  {icon: Settings, text: 'Settings', href: ROUTES.SETTINGS},
  {icon: Person, text: 'Account', href: ROUTES.ACCOUNT},
  {icon: Logout, text: 'Logout ', href: ROUTES.LOGOUT},
];

export const ITEMS: AsideItemT[] = [
  {
    items: DISCOVER_ITEMS,
    text: 'Discover',
  },
  {
    items: LIBRARY_ITEMS,
    text: 'Library',
  },
  {
    items: MORE_ITEMS,
    text: 'More',
  },
];
