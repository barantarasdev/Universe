import {Theme} from '@mui/material';
import {ChangeEvent, RefObject} from 'react';

export interface UsePlayerR {
  isPlaying: boolean;
  onToggleIsPlaying: () => void;
  isMusicPlaying: (musicNumber: number) => boolean;
  onChangeMusic: (musicNumber: number) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export interface UseThemeR {
  theme: Theme;
}

export interface UseInputR {
  value: unknown;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
  ref: RefObject<HTMLInputElement>;
}

export interface UseInputProps {
  initialValue?: unknown;
}
