


      


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



