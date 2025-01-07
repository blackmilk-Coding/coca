import '/scss/pricing.scss';

// components

import { useTheme } from './components/theme.js';
import { scrollHeader } from './components/scroll.js';
import { useBurger } from './components/burger.js';
import { usePriceSwitcher } from './components/priceSwticher.js';
import { useAccordion } from "./components/accordion.js";

useTheme();
useBurger();
usePriceSwitcher();
useAccordion();
scrollHeader();