


      
  const clima = new Swiper(".clima", {
    slidesPerView: 1.5,       // MOBILE default
    spaceBetween: 16,
    loop: true,

    breakpoints: {
      768: {
        slidesPerView: 1.5,
        spaceBetween: 10,
        centeredSlides: true,
      }
    },

    pagination: {
      el: ".swiper-pagination.climapagination",
      clickable: true,
    },
      autoplay: {
    delay: 2500,
    disableOnInteraction: false, // keeps autoplay after swipes/clicks
    pauseOnMouseEnter: true,     // optional (desktop)
  },
  });

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