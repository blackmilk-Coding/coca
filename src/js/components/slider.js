import { Autoplay } from 'swiper/modules';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

export const usePartnersSlider = () => {
  new Swiper('.partners__slider', {
    modules: [Autoplay],
    slidesPerView: 1,
    autoplay:{
      delay: 1000,
      disableOnInteraction: false,
    },
    speed:800,
    loop:true,
  
    breakpoints: {
      100:{
        slidesPerView: 1.5,
      },
      500:{
        slidesPerView: 2,
      },
      800:{
        slidesPerView: 3,
      },
      993: {
        slidesPerView: 8,
      },
    },
  });
};


export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    slidesPerView: "auto",
    spaceBetween:32,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 22,
    loop: true,
    navigation: {
      prevEl: '.testimonials__btn--prev',
      nextEl: '.testimonials__btn--next',
    },
  });
};