import {SvgIconTypeMap} from '@mui/material';
import {OverridableComponent} from '@mui/material/OverridableComponent';

export interface AuthorT {
  id: string;
  name: string;
  image: string;
}

export interface MusicT {
  id: string;
  musicNumber: number;
  name: string;
  author: string;
  thumbnail: string;
  duration?: string;
}

export interface ChartT {
  id: string;
  musics: MusicT[];
}

export interface MusicCardT extends MusicT {
  src: string;
}

export interface AsideButtonT {
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
  text: string;
  href: string;
}
