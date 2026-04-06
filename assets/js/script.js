


      


function toggleNavbar() {
  const navbarLinks = document.getElementById('navbarLinks');
  navbarLinks.style.display =
    (navbarLinks.style.display === 'none' || navbarLinks.style.display === '')
      ? 'block'
      : 'none';
}

// Close menu when clicking a link (mobile only)
document.querySelectorAll('#navbarLinks a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navbarLinks').style.display = 'none';
  });
});


const isMobile = window.innerWidth < 1024

let swiper = null

if (isMobile) {
  swiper = new Swiper('.product-grid-swiper', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    grid: {
      rows: 3,
      fill: 'row',
    },
    navigation: {
      nextEl: '.grid-btn-next',
      prevEl: '.grid-btn-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
      }
    },
  })

  swiper2 = new Swiper('.product-grid-swiper-2', {
    slidesPerView: 1.5,
    slidesPerGroup: 1,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2.5,
        centeredSlides: false,
      }
    },
  })
}



  (function initMagnificPopup() {
  function safeInit() {
    // Guard: jQuery + plugin + DOM
    if (
      typeof window.jQuery === 'undefined' ||
      typeof jQuery.fn.magnificPopup === 'undefined'
    ) {
      // Retry after a short delay if scripts not ready yet
      
        console.log('Magnific Popup retrying initialization...');
      return setTimeout(safeInit, 100);
    }

    // Run only after DOM is ready
    jQuery(function($) {
      const $videos = $('.video-popup');
      if ($videos.length) {
        $videos.magnificPopup({ type: 'iframe' });
        // Reveal them if you were hiding them
        $videos.css('visibility', 'visible');
      }
    });
  }

  safeInit();
})();