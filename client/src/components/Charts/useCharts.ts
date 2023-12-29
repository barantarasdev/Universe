import {useCallback, useMemo, useRef} from 'react';
import {SwiperRef} from 'swiper/react';
import {UseChartsProps, UseChartsR} from 'src/components/Charts/types';

function useCharts({dataLength}: UseChartsProps): UseChartsR {
  const swiper = useRef<SwiperRef | null>(null);

  const isButtonDisabled = useMemo(() => dataLength <= 2, [dataLength]);

  const onNextSlide = useCallback(() => {
    swiper.current?.swiper.slideNext();
  }, []);

  return {swiper, isButtonDisabled, onNextSlide};
}

export default useCharts;
