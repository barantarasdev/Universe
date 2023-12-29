export interface ProgressProps {
  value: number;
  max: number;
  step?: number;
  onChange: (_: unknown, value: number | number[]) => void;
}
