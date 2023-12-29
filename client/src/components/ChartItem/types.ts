import {MusicT} from 'src/types';

export interface ChartItemProps {
  index: number;
  item: MusicT;
}

export interface UseChartItemProps {
  id: string;
  musicNumber: number;
}

export interface UseChartItemR {
  hoveredId: string | null;
  playerId: string | undefined;
  isPlaying: boolean;
  onChangeHoverId: () => void;
  onRemoveHover: () => void;
  onChangePlayerId: () => void;
}
