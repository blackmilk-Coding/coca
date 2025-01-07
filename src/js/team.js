import '/scss/team.scss';

// components
import { useTheme } from './components/theme.js';
import { scrollHeader } from './components/scroll.js';
import { useBurger } from './components/burger.js';
import { useAccordion } from "./components/accordion.js";
import {
  useTeamSlider,
} from './components/slider.js';


useTheme();
useBurger();
scrollHeader();
useTeamSlider();
useAccordion();
