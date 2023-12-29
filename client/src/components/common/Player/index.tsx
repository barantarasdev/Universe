'use client';

import {memo} from 'react';
import {Grid} from '@mui/material';
import Track from 'src/components/common/Player/Track';
import Controls from 'src/components/common/Player/Controls';
import TrackProgress from 'src/components/common/Player/TrackProgress';
import Volume from 'src/components/common/Player/Volume';
import usePlayer from 'src/components/common/Player/usePlayer';
import * as Styled from 'src/components/common/Player/styles';

function Player(): JSX.Element | null {
  const {
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
  } = usePlayer();

  if (!music) {
    return null;
  }

  return (
    <Styled.Player>
      <Styled.Grid container>
        <Grid item xs={3}>
          <Track audioPlayer={audioPlayer} isMute={isMute} music={music} />
        </Grid>

        <Styled.Controls item xs>
          <Controls />

          <TrackProgress
            currentTime={currentTime}
            currentTimeEnd={currentTimeEnd}
            duration={duration}
            elapsed={elapsed}
            onChangeTrackProgress={onChangeTrackProgress}
          />
        </Styled.Controls>

        <Grid item xs={3}>
          <Volume
            isMute={isMute}
            volume={volume}
            onChangeTrackVolume={onChangeTrackVolume}
            onToggleMute={setIsMute}
          />
        </Grid>
      </Styled.Grid>
    </Styled.Player>
  );
}

export default memo(Player);
