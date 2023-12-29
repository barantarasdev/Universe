import {memo} from 'react';
import {Grid, Typography} from '@mui/material';
import Progress from 'src/components/common/Progress';
import {TrackProgressProps} from 'src/components/common/Player/TrackProgress/types';
import * as Styled from 'src/components/common/Player/TrackProgress/styles';

function TrackProgress({
  currentTime,
  currentTimeEnd,
  elapsed,
  duration,
  onChangeTrackProgress,
}: TrackProgressProps): JSX.Element {
  return (
    <Styled.Grid container>
      <Grid item xs={1}>
        <Typography>{currentTime}</Typography>
      </Grid>

      <Grid item xs>
        <Progress
          value={elapsed}
          max={duration}
          onChange={onChangeTrackProgress}
        />
      </Grid>

      <Grid item xs={1}>
        <Styled.Time>{currentTimeEnd}</Styled.Time>
      </Grid>
    </Styled.Grid>
  );
}

export default memo(TrackProgress);
