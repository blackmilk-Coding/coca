
export const useAccordion = () => {
  const accordionTitles = document.querySelectorAll(".footer__item");
  accordionTitles.forEach((accordionTitle) => {
    accordionTitle.addEventListener("click", () => {
      if (accordionTitle.classList.contains('footer__item--active')) {
        accordionTitle.classList.remove('footer__item--active');
      } else {
        const accordionTitlesWithIsOpen = document.querySelectorAll('.footer__item--active');
        accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
          accordionTitleWithIsOpen.classList.remove('footer__item--active');
        });
        accordionTitle.classList.add('footer__item--active');
      }
    });
  });

}