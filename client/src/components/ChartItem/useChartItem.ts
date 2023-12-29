import {useCallback, useState} from 'react';
import usePlayer from 'src/hooks/usePlayer';
import {UseChartItemProps, UseChartItemR} from 'src/components/ChartItem/types';
import {useAppSelector} from 'src/hooks/useRedux';

function useChartItem({id, musicNumber}: UseChartItemProps): UseChartItemR {
  const {music} = useAppSelector(state => state.player);

  const {onChangeMusic, isMusicPlaying} = usePlayer();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const onRemoveHover = useCallback(() => {
    setHoveredId(null);
  }, []);

  const onChangeHoverId = useCallback(() => {
    setHoveredId(id);
  }, [id]);

  const onChangePlayerId = useCallback(() => {
    onChangeMusic(musicNumber);
  }, [onChangeMusic, musicNumber]);

  return {
    playerId: music?.id,
    hoveredId,
    isPlaying: isMusicPlaying(musicNumber),
    onChangeHoverId,
    onRemoveHover,
    onChangePlayerId,
  };
}

export default useChartItem;
