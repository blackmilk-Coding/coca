import '/scss/about.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { scrollHeader } from './components/scroll.js';
import {
  useAboutHeroSlider,
  blogSlider
} from './components/slider.js';
import { useAccordion } from "./components/accordion.js";


scrollHeader();
useTheme();
useBurger();
useAboutHeroSlider();
blogSlider()
useAccordion();