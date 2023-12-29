import {memo} from 'react';
import {IconButton} from '@mui/material';
import {
  Pause,
  PlayArrow,
  RepeatOne,
  Shuffle,
  SkipNext,
  SkipPrevious,
} from '@mui/icons-material';
import usePlayer from 'src/hooks/usePlayer';
import * as Styled from 'src/components/common/Player/Controls/styles';

function Controls(): JSX.Element {
  const {onPrevious, onNext, onToggleIsPlaying, isPlaying} = usePlayer();

  return (
    <Styled.Container>
      <IconButton>
        <Shuffle />
      </IconButton>

      <IconButton onClick={onPrevious}>
        <SkipPrevious />
      </IconButton>

      <Styled.PlayIconButton onClick={onToggleIsPlaying}>
        {isPlaying ? <Pause /> : <PlayArrow />}
      </Styled.PlayIconButton>

      <IconButton onClick={onNext}>
        <SkipNext />
      </IconButton>

      <IconButton>
        <RepeatOne />
      </IconButton>
    </Styled.Container>
  );
}

export default memo(Controls);
