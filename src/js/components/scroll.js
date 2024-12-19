export const scrollHeader = () => {
  const header = document.querySelector('.header')
  let lastScroll = 0;
  console.log(header.offsetHeight)
  window.addEventListener('scroll', function () {
    let currentScroll = this.pageYOffset
    const scrollPosition = document.documentElement.scrollTop;
    console.log(scrollPosition);
    if(currentScroll <= 1){
      header.style.position = "static"
      
    }
    if(currentScroll < 100){
      header.style.position = "fixed"
    }
    
    if(currentScroll > 100){
      header.style.position = "static"
    }

    if (currentScroll < lastScroll) {
      header.style.position = "fixed"
    }
    lastScroll = currentScroll;

  });
  
}