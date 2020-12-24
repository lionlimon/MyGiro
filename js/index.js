window.addEventListener('load', () =>  {

  // Slider

  if (document.querySelectorAll('.swiper-container')) {
    const slider = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 4,
      navigation: {
        nextEl: '.adv__next',
        prevEl: '.adv__prev',
      },
    });
  }
  

  // Tabs
  const tabContainers = document.querySelectorAll('.tabs');

  if (tabContainers.length > 0) {
    
    tabContainers.forEach(tabContainer => {
      const tabPages = tabContainer.querySelectorAll('.tabs__page'); 
      const tabs = tabContainer.querySelectorAll('.tabs__tab');
      
      if (tabs.length < 1 || tabPages.length < 1)
        return false;
      
      tabs.forEach(tab => {
        
        tab.addEventListener('click', event => {
          if (tab.classList.contains('tabs__tab--active'))
            return false;
 
          const index = [...tabs].indexOf(event.target);

          tabPages.forEach(page => page.classList.remove('tabs__page--active'));
          tabs.forEach(tab => tab.classList.remove('tabs__tab--active'));
          
          tab.classList.add('tabs__tab--active');
          tabPages[index].classList.add('tabs__page--active');
        });
      });

    });
  }

  // To top button
  const toTopButton = document.querySelector('.to-top');
  const header = document.querySelector('.header');

  window.addEventListener('scroll', event => {
    if (!isVisible(header)) {
      toTopButton.classList.add('to-top--visible');
    } else {
      toTopButton.classList.remove('to-top--visible');
    }
  });

  toTopButton.addEventListener('click', event => {
    window.scrollTo(0, 0);
  });
});



function isVisible(elem) {
  const elementBoundary = elem.getBoundingClientRect();
  const top = elementBoundary.top;
  const bottom = elementBoundary.bottom;
  return ((top >= 0) && (bottom <= window.innerHeight));
}
