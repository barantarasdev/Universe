import {MutableRefObject} from 'react';
import {SwiperRef} from 'swiper/react';
import {ChartT} from 'src/types';

export interface UseChartsProps {
  dataLength: number;
}

export interface UseChartsR {
  swiper: MutableRefObject<SwiperRef | null>;
  isButtonDisabled: boolean;
  onNextSlide: () => void;
}

export interface ChartsProps {
  charts: ChartT[];
}
