import {RefObject} from 'react';
import {MusicT} from 'src/types';

export interface TrackProps {
  audioPlayer: RefObject<HTMLAudioElement>;
  isMute: boolean;
  music: MusicT & {src: string};
}
