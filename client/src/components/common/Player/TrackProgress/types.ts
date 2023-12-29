export interface TrackProgressProps {
  currentTime: string;
  currentTimeEnd: string;
  elapsed: number;
  duration: number;
  onChangeTrackProgress: (_: unknown, value: number | number[]) => void;
}
