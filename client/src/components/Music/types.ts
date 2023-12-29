import {MusicT} from 'src/types';

export interface MusicProps {
  music: MusicT;
}

export interface UseMusicProps {
  musicNumber: number;
}

export interface UseMusicR {
  isCurrentMusicPlaying: boolean;
  onClick: () => void;
}
