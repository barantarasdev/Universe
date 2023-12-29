import {useCallback} from 'react';
import usePlayer from 'src/hooks/usePlayer';
import {UseMusicProps, UseMusicR} from 'src/components/Music/types';

function useMusic({musicNumber}: UseMusicProps): UseMusicR {
  const {isMusicPlaying, onChangeMusic} = usePlayer();

  const onClick = useCallback(() => {
    onChangeMusic(musicNumber);
  }, [musicNumber, onChangeMusic]);

  return {isCurrentMusicPlaying: isMusicPlaying(musicNumber), onClick};
}

export default useMusic;
