export const scrollHeader = () => {
  const header = document.querySelector('header');
  let lastScroll = 0;

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        if (header.classList.contains('header--scroll')) { 
          header.classList.remove('header--scroll');
        }
        return;
      }

      if (currentScroll > lastScroll) {
        if (!header.classList.contains('header--scroll')) {
          header.classList.add('header--scroll');
        }
      } else if (currentScroll < lastScroll) {
        if (header.classList.contains('header--scroll')) {
          header.classList.remove('header--scroll');
        }
      }
      lastScroll = currentScroll;
    });
  }