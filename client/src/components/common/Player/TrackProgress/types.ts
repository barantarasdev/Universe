export interface TrackProgressProps {
  currentTime: string;
  currentTimeEnd: string;
  elapsed: number;
  duration: number;
  onChangeTrackProgress: (_: any, value: number | number[]) => void;
}
