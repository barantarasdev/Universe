import {MusicCardT} from 'src/types';

export enum PlayerCreators {
  ASYNC_SET_MUSIC = 'ASYNC_SET_MUSIC',
}

export interface PlayerStateT {
  isPlaying: boolean;
  music: MusicCardT | null;
}

export interface SetMusicCreatorProps {
  musicNumber: number | null;
}

export interface SetMusicCreatorR {
  type: PlayerCreators;
  payload: SetMusicCreatorProps;
}
