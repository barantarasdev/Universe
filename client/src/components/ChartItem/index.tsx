/* eslint-disable no-nested-ternary */

import {memo} from 'react';
import {Pause, PlayArrow} from '@mui/icons-material';
import {Box, Fade} from '@mui/material';
import useChartItem from 'src/components/ChartItem/useChartItem';
import {ChartItemProps} from 'src/components/ChartItem/types';
import * as Styled from 'src/components/ChartItem/styles';

function ChartItem({
  item: {id, musicNumber, name, author, duration},
  index,
}: ChartItemProps): JSX.Element {
  const {
    hoveredId,
    isPlaying,
    playerId,
    onChangeHoverId,
    onRemoveHover,
    onChangePlayerId,
  } = useChartItem({id, musicNumber});

  return (
    <Styled.ListItemButton
      onMouseEnter={onChangeHoverId}
      onMouseLeave={onRemoveHover}
      onClick={onChangePlayerId}
    >
      <Styled.CardIndexBox>
        {playerId === id ? (
          isPlaying ? (
            <Pause color="primary" />
          ) : (
            <PlayArrow color="primary" />
          )
        ) : hoveredId === id ? (
          <Fade in>
            <PlayArrow color="primary" />
          </Fade>
        ) : (
          index + 1
        )}
      </Styled.CardIndexBox>
      <Box>
        <Styled.Name>{name}</Styled.Name>

        <Styled.MusicInfo>
          {author} &#8729; {duration}
        </Styled.MusicInfo>
      </Box>
    </Styled.ListItemButton>
  );
}

export default memo(ChartItem);
