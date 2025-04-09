import '/scss/contact.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { scrollHeader } from './components/scroll.js';
import { useAccordion } from "./components/accordion.js";
import { usePartnersSlider } from "./components/slider.js"
import { usePhone } from './components/contacts/phone.js';
import { useValidation } from "./components/contacts/formValid.js"





scrollHeader();
useTheme();
useBurger();
usePartnersSlider();
useAccordion();
useValidation()
usePhone();