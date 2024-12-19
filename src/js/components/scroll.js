export const scrollHeader = () => {
  const header = document.querySelector('.header')

  let lastScroll = 0;
  window.addEventListener('scroll', function () {
    let currentScroll = this.pageYOffset
    const scrollPosition = document.documentElement.scrollTop;
    
 
      if (currentScroll < lastScroll) {
        console.log(lastScroll)
        header.style.position = "fixed"
        header.style.backgroundColor = "inherit"
      }
    


    lastScroll = currentScroll;

  });
  
}