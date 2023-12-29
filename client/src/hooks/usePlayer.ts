'use client';

import {useCallback, useMemo} from 'react';
import {useDispatch} from 'react-redux';
import {useAppSelector} from 'src/hooks/useRedux';
import {setIsPlaying} from 'src/store/slices/playerSlice';
import setMusicCreator from 'src/store/slices/playerSlice/actionCreator';
import {UsePlayerR} from 'src/types';

function usePlayer(): UsePlayerR {
  const {isPlaying, music} = useAppSelector(state => state.player);
  const dispatch = useDispatch();

  const lastTrackNumber = useMemo(() => 3, []);

  const isMusicPlaying = useCallback(
    (musicNumber: number) => isPlaying && music?.musicNumber === musicNumber,
    [isPlaying, music?.musicNumber],
  );

  const onChangeMusic = useCallback(
    (musicNumber: number | null) => {
      dispatch(setMusicCreator({musicNumber}));
    },
    [dispatch],
  );

  const onToggleIsPlaying = useCallback(() => {
    dispatch(setIsPlaying(!isPlaying));
  }, [dispatch, isPlaying]);

  const onNext = useCallback(() => {
    const currentMusicNumber = music?.musicNumber;

    if (!currentMusicNumber) {
      return;
    }

    if (currentMusicNumber === lastTrackNumber) {
      onChangeMusic(1);

      return;
    }

    onChangeMusic(currentMusicNumber + 1);
  }, [music?.musicNumber, lastTrackNumber, onChangeMusic]);

  const onPrevious = useCallback(() => {
    const currentMusicNumber = music?.musicNumber;

    if (!currentMusicNumber) {
      return;
    }

    if (currentMusicNumber === 1) {
      onChangeMusic(lastTrackNumber);

      return;
    }

    onChangeMusic(currentMusicNumber - 1);
  }, [music?.musicNumber, lastTrackNumber, onChangeMusic]);

  return {
    isPlaying,
    onToggleIsPlaying,
    isMusicPlaying,
    onChangeMusic,
    onNext,
    onPrevious,
  };
}

export default usePlayer;
