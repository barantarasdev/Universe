import {RefObject} from 'react';
import {MusicCardT} from 'src/types';

export interface UsePlayerR {
  audioPlayer: RefObject<HTMLAudioElement>;
  isMute: boolean;
  currentTime: string;
  currentTimeEnd: string;
  duration: number;
  elapsed: number;
  volume: number;
  music: MusicCardT | null;
  onChangeTrackProgress: (_: any, value: number | number[]) => void;
  onChangeTrackVolume: (_: any, value: number | number[]) => void;
  setIsMute: () => void;
}
