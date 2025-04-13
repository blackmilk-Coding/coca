import '/scss/blog.scss';


import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { scrollHeader } from './components/scroll.js';
import { useAccordion } from "./components/accordion.js";


scrollHeader();
useTheme();
useBurger();
//-----------



//-----------
useAccordion();