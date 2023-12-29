import {FreeMode} from 'swiper/modules';
import {SwiperProps} from 'swiper/react';

export const ASIDE_WIDTH: number = 225;

export const PLAYER_HEIGHT: number = 90;

export const FULL_SLIDER_PROPS: SwiperProps = {
  slidesPerView: 'auto',
  spaceBetween: 40,
  modules: [FreeMode],
  freeMode: true,
};
