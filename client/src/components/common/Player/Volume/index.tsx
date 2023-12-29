import {memo, useMemo} from 'react';
import {IconButton} from '@mui/material';
import {Favorite, VolumeOff, VolumeUp} from '@mui/icons-material';
import Progress from 'src/components/common/Progress';
import {VolumeProps} from 'src/components/common/Player/Volume/types';
import * as Styled from 'src/components/common/Player/Volume/styles';

function Volume({
  isMute,
  volume,
  onToggleMute,
  onChangeTrackVolume,
}: VolumeProps): JSX.Element {
  const isVolumeMuted = useMemo(() => isMute || volume === 0, [isMute, volume]);

  return (
    <Styled.Volume>
      <Styled.ButtonsContainer>
        <IconButton>
          <Favorite />
        </IconButton>

        <IconButton onClick={onToggleMute}>
          {isVolumeMuted ? <VolumeOff /> : <VolumeUp />}
        </IconButton>
      </Styled.ButtonsContainer>

      <Progress
        max={100}
        step={6}
        value={volume}
        onChange={onChangeTrackVolume}
      />
    </Styled.Volume>
  );
}

export default memo(Volume);
