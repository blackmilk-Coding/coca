import '/scss/about.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { scrollHeader } from './components/scroll.js';
import {
  useAboutHeroSlider,
} from './components/slider.js';


scrollHeader();
useTheme();
useBurger();
useAboutHeroSlider();