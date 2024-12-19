import "../scss/main.scss"


import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { scrollHeader } from './components/scroll.js';

scrollHeader();
useTheme();
useBurger();