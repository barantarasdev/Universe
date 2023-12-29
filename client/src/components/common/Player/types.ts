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
  onChangeTrackProgress: (_: unknown, value: number | number[]) => void;
  onChangeTrackVolume: (_: unknown, value: number | number[]) => void;
  setIsMute: () => void;
}
