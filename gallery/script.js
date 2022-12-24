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
  }
});

// import lightGallery from 'lightgallery';

// lightGallery(document.getElementById('lightgallery'), {
//   plugins: [lgZoom, lgThumbnail],
//   licenseKey: 'your_license_key',
//   thumbnail: true,
//   animateThumb: false,
//   zoomFromOrigin: false,
//   allowMediaOverlap: true,
//   toggleThumb: true,
// });

$("#lightgallery")
  .justifiedGallery({
    captions: false,
    rowHeight: 180,
    lastRow: 'nojustify',
    margins: 7
  })
  .on("jg.complete", function () {
    window.lightGallery(
      document.getElementById("lightgallery"),
      {
        plugins: [lgZoom, lgThumbnail],
        licenseKey: 'your_license_key',
        thumbnail: true,
        animateThumb: false,
        zoomFromOrigin: false,
        allowMediaOverlap: true,
        toggleThumb: true,
      }
    );
  });