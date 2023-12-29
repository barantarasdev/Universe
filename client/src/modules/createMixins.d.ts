import {CSSProperties} from '@mui/material/styles/createMixins';

declare module '@mui/material/styles/createMixins' {
  interface Mixins {
    flexCenter: CSSProperties;
    positionCenter: CSSProperties;
    textEllipsis: CSSProperties;
  }
}
