import { AuthorT, ChartT, MusicT } from 'src/types/app.types';

export const MUSICS: MusicT[] = [
  {
    id: '1',
    musicNumber: 1,
    name: 'Oh My God',
    author: 'Adele',
    thumbnail: null,
  },
  {
    id: '2',
    musicNumber: 2,
    name: 'Oh My God',
    author: 'Adele',
    thumbnail: null,
  },
  {
    id: '3',
    musicNumber: 3,
    name: 'Oh My God',
    author: 'Adele',
    thumbnail: null,
  },
];

export const RECOMMENDED: MusicT[] = MUSICS;

export const TOP_CHART: ChartT[] = [
  {
    id: '1',
    musics: MUSICS.slice(0, 4),
  },
  {
    id: '2',
    musics: MUSICS.slice(0, 4),
  },
  {
    id: '3',
    musics: MUSICS.slice(0, 4),
  },
  {
    id: '4',
    musics: MUSICS.slice(0, 4),
  },
];

export const TOP_ALBUM: AuthorT[] = [
  {
    id: '1',
    name: 'Adele',
    image:
      'https://cdn.britannica.com/98/163898-050-B2E2A704/British-sensation-Adele.jpg',
  },
  {
    id: '2',
    name: 'Adele',
    image:
      'https://cdn.britannica.com/98/163898-050-B2E2A704/British-sensation-Adele.jpg',
  },
  {
    id: '3',
    name: 'Adele',
    image:
      'https://cdn.britannica.com/98/163898-050-B2E2A704/British-sensation-Adele.jpg',
  },
  {
    id: '4',
    name: 'Adele',
    image:
      'https://cdn.britannica.com/98/163898-050-B2E2A704/British-sensation-Adele.jpg',
  },
];
