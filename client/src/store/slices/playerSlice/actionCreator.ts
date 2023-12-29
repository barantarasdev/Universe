import {
  PlayerCreators,
  SetMusicCreatorProps,
  SetMusicCreatorR,
} from 'src/store/slices/playerSlice/types';

const setMusicCreator = ({
  musicNumber,
}: SetMusicCreatorProps): SetMusicCreatorR => ({
  type: PlayerCreators.ASYNC_SET_MUSIC,
  payload: {musicNumber},
});

export default setMusicCreator;
