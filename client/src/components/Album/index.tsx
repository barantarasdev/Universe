'use client';

/* eslint-disable react/jsx-props-no-spreading */

import {memo} from 'react';
import Section from 'src/components/common/Section';
import Author from 'src/components/Author';
import {FULL_SLIDER_PROPS} from 'src/constants';
import {AlbumProps} from 'src/components/Album/types';
import * as Styled from 'src/styles';

function Album({album}: AlbumProps): JSX.Element {
  return (
    <Section title="Top Album">
      <Styled.Swiper {...FULL_SLIDER_PROPS}>
        {album.map(item => (
          <Styled.SwiperSlide key={item.id}>
            <Author card={item} />
          </Styled.SwiperSlide>
        ))}
      </Styled.Swiper>
    </Section>
  );
}

export default memo(Album);
