import {ForkEffect, call, put, select, takeEvery} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import MusicsService from 'src/services/musicsService';
import {
  setIsPlaying,
  setMusic as setMusicSlice,
} from 'src/store/slices/playerSlice';
import {PlayerCreators} from 'src/store/slices/playerSlice/types';
import {SetMusicPayload} from 'src/store/sagas/PlayerSaga/types';

function* setMusic(
  action: PayloadAction<SetMusicPayload>,
): Generator<any, void, any> {
  const {
    player: {isPlaying, music},
  } = yield select();
  const {musicNumber} = action.payload;

  if (!musicNumber) {
    yield put(setIsPlaying(false));
    yield put(setMusicSlice(null));

    return;
  }

  if (music && musicNumber === music.musicNumber) {
    yield put(setIsPlaying(!isPlaying));

    return;
  }

  const currentMusic = yield call(MusicsService.getMusicCard, musicNumber);
  const fullMusic = {
    ...currentMusic,
    src: `${process.env.NEXT_PUBLIC_BASE_URL}music/${musicNumber}`,
  };

  yield put(setMusicSlice(fullMusic));
  yield put(setIsPlaying(true));
}

function* playerWatcher(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(PlayerCreators.ASYNC_SET_MUSIC, setMusic);
}

export default playerWatcher;
