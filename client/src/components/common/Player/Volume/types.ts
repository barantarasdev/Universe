export interface VolumeProps {
  isMute: boolean;
  volume: number;
  onToggleMute: () => void;
  onChangeTrackVolume: (_: unknown, value: number | number[]) => void;
}
