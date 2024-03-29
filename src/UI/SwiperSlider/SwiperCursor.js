import React from 'react';
import Swiper from 'react-id-swiper';

export default function SwiperCursor(props) {
  const { children } = props;
  const params = {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  };

  return <Swiper {...params}>{children}</Swiper>;
}
