'use client';

/* eslint-disable react/jsx-props-no-spreading */

import {memo} from 'react';
import Music from 'src/components/Music';
import {RecommendedProps} from 'src/components/Recommended/types';
import Section from 'src/components/common/Section';
import {FULL_SLIDER_PROPS} from 'src/constants';
import * as Styled from 'src/styles';

function Recommended({recommended}: RecommendedProps): JSX.Element {
  return (
    <Section title="Recommended">
      <Styled.Swiper {...FULL_SLIDER_PROPS}>
        {recommended.map(card => (
          <Styled.SwiperSlide key={card.id}>
            <Music music={card} />
          </Styled.SwiperSlide>
        ))}
      </Styled.Swiper>
    </Section>
  );
}

export default memo(Recommended);
