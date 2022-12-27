let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.add('active');
};

document.querySelector('#nav-close').onclick = () => {
  navbar.classList.remove('active');
};

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.add('active');
};

document.querySelector('#close-search').onclick = () => {
  searchForm.classList.remove('active');
};

window.onscroll = () => {
  navbar.classList.remove('active');

  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

window.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};


var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});

window.scrollTo(0, 0);

var swiper = new Swiper(".clients-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

AOS.init();