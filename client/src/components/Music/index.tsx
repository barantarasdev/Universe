'use client';

import {memo} from 'react';
import {Pause, PlayArrow} from '@mui/icons-material';
import {CardContent} from '@mui/material';
import useMusicCard from 'src/components/Music/useMusic';
import {MusicProps} from 'src/components/Music/types';
import * as Styled from 'src/components/Music/styles';

function Music({
  music: {thumbnail, name, author, musicNumber},
}: MusicProps): JSX.Element {
  const {onClick, isCurrentMusicPlaying} = useMusicCard({
    musicNumber,
  });

  return (
    <Styled.Card>
      <Styled.CardMedia image={thumbnail} title={name}>
        <Styled.CardMediaButton onClick={onClick}>
          {isCurrentMusicPlaying ? <Pause /> : <PlayArrow />}
        </Styled.CardMediaButton>
      </Styled.CardMedia>

      <CardContent>
        <Styled.Name>{name}</Styled.Name>

        <Styled.AuthorName>{author}</Styled.AuthorName>
      </CardContent>
    </Styled.Card>
  );
}

export default memo(Music);
