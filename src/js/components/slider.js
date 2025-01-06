import { Autoplay } from 'swiper/modules';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

export const usePartnersSlider = () => {
  new Swiper('.partners__slider', {
    modules: [Autoplay],
    slidesPerView:"auto",
    // centeredSlides: true,
    spaceBetween: 10,
    loop: true,
    speed:600,
    autoplay:{
      delay: 600,
      disableOnInteraction: false,
    },
    breakpoints: {
      100:{
      },
      300:{
        spaceBetween: 10,
      },
      500:{
        spaceBetween: 20,
      },
      900:{
        slidesPerView:8,
        spaceBetween: 6,
      },
    }
  });
};


export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    modules: [Navigation, Pagination],
    slidesPerView: "auto",
    spaceBetween:32,
    loop: true,
    centeredSlides: true,
    dragSize:100,
    pagination: {
      el: '.insight__pagination',
      clickable: true,
      dragClass: "insight__drag",
    },

    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    modules: [Navigation, EffectFade],
    slidesPerView: 'auto',
    spaceBetween: 22,
    effect: "fade",
    loop:true,
    fadeEffect: {
        crossFade: true,
    },
    // loop:true,
    navigation: {
      prevEl: '.testimonials__btn--prev',
      nextEl: '.testimonials__btn--next',
    },
  });
};