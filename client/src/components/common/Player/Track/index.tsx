import {memo} from 'react';
import usePlayer from 'src/hooks/usePlayer';
import {TrackProps} from 'src/components/common/Player/Track/types';
import * as Styled from 'src/components/common/Player/Track/styles';

function Track({
  audioPlayer,
  isMute,
  music: {src, thumbnail, name, author},
}: TrackProps): JSX.Element {
  const {onNext} = usePlayer();

  return (
    <>
      <audio
        src={src}
        ref={audioPlayer}
        muted={isMute}
        onEnded={onNext}
        autoPlay
      >
        <track kind="captions" />
      </audio>

      <Styled.Container>
        <Styled.Thumbnail width={65} height={65} src={thumbnail} alt={name} />

        <Styled.InfoContainer>
          <Styled.Name>{name}</Styled.Name>
          <Styled.Author>{author}</Styled.Author>
        </Styled.InfoContainer>
      </Styled.Container>
    </>
  );
}

export default memo(Track);
