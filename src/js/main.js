import "/scss/main.scss"


import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { scrollHeader } from './components/scroll.js';
import { useAccordion } from "./components/accordion.js";
import {
  usePartnersSlider,
  useInsightSlider,
  useTestimonialsSlider,
} from './components/slider.js';

scrollHeader();
useTheme();
useBurger();
usePartnersSlider();
useInsightSlider();
useTestimonialsSlider();
useAccordion();