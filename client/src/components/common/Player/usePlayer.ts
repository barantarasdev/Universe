'use client';

import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';
import formatTime from 'src/components/common/Player/helpers';
import {useAppSelector} from 'src/hooks/useRedux';
import {UsePlayerR} from 'src/components/common/Player/types';

function usePlayer(): UsePlayerR {
  const audioPlayer = useRef<HTMLAudioElement>(null);

  const {isPlaying, music} = useAppSelector(state => state.player);
  const [isMute, setIsMute] = useReducer(value => !value, false);

  const [volume, setVolume] = useState<number>(30);
  const [elapsed, setElapsed] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  const currentTime = useMemo(() => formatTime(elapsed), [elapsed]);

  const currentTimeEnd = useMemo(
    () => formatTime(duration - elapsed),
    [duration, elapsed],
  );

  const onChangeTrackProgress = useCallback(
    (_: unknown, value: number | number[]): void => {
      if (audioPlayer.current) {
        audioPlayer.current.currentTime = parseFloat(value.toString());
      }
    },
    [],
  );

  const onChangeTrackVolume = useCallback(
    (_: unknown, value: number | number[]): void => {
      setVolume(value as number);
    },
    [setVolume],
  );

  useEffect(() => {
    const audio = audioPlayer.current;

    if (!audio) {
      return;
    }

    const updateTime = () => {
      setDuration(Math.floor(audio.duration));
      setElapsed(Math.floor(audio.currentTime));
    };

    if (isPlaying) {
      audio.play();
      audio.addEventListener('timeupdate', updateTime);
    } else {
      audio.pause();
      audio.removeEventListener('timeupdate', updateTime);
    }

    // eslint-disable-next-line consistent-return
    return () => {
      audio.removeEventListener('timeupdate', updateTime);
    };
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioPlayer.current;

    if (audio) {
      audio.volume = volume / 100;
    }
  }, [volume]);

  return {
    audioPlayer,
    isMute,
    currentTime,
    currentTimeEnd,
    duration,
    elapsed,
    volume,
    music,
    onChangeTrackProgress,
    onChangeTrackVolume,
    setIsMute,
  };
}

export default usePlayer;
