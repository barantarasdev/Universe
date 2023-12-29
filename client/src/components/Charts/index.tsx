'use client';

import {memo} from 'react';
import {NavigateNext} from '@mui/icons-material';
import {SwiperSlide} from 'swiper/react';
import {A11y, Navigation} from 'swiper/modules';
import Section from 'src/components/common/Section';
import Chart from 'src/components/Chart';
import useCharts from 'src/components/Charts/useCharts';
import {ChartsProps} from 'src/components/Charts/types';
import * as Styled from 'src/components/Charts/styles';

function Charts({charts}: ChartsProps): JSX.Element {
  const {swiper, isButtonDisabled, onNextSlide} = useCharts({
    dataLength: charts.length,
  });

  return (
    <Section title="Top Chart This Week">
      <Styled.Content>
        <Styled.Swiper
          ref={swiper}
          loop
          slidesPerView={2}
          modules={[Navigation, A11y]}
          spaceBetween={33}
          allowTouchMove={false}
        >
          {charts.map(({id, musics}) => (
            <SwiperSlide key={id}>
              <Chart musics={musics} />
            </SwiperSlide>
          ))}
        </Styled.Swiper>

        <Styled.NextButton onClick={onNextSlide} disabled={isButtonDisabled}>
          <NavigateNext />
        </Styled.NextButton>
      </Styled.Content>
    </Section>
  );
}

export default memo(Charts);
