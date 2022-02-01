ready(() => {

  document.getElementById('projects').innerHTML = projectCards;

  const logoHover = document.querySelector(".hover-animation");
  logoHover.onmouseover = () => {
    addClass('.slogan', 'slogan-animation');
    addClass('.logo', 'logo-animation');
  }
  logoHover.onmouseout = () => {
    removeClass('.slogan', 'slogan-animation');
    removeClass('.logo', 'logo-animation');
  };

  window.onscroll = () => {
    let position = window.scrollY | document.body.scrollTop;
    if (position >= 100) {
      addClass('.navigation-bar', 'nav-scroll');
      addClass('.logo', 'logo-scroll');
    } else {
      removeClass('.navigation-bar', 'nav-scroll');
      removeClass('.logo', 'logo-scroll');
    }
  };

});

// Scroll Fade Animation
const callback = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fadeIn");
    } else {
      entry.target.classList.remove("animate-fadeIn");
    }
  });
};

const observer = new IntersectionObserver(callback);
const targets = document.querySelectorAll(".modules");
targets.forEach(function (target) {
  target.classList.add("opacity-5");
  observer.observe(target);
});

//
// var elem = document.querySelector('.main-carousel');
// var flkty = new Flickity( elem, {
//   // options
//   cellAlign: 'left',
//   contain: true
// });
//
// // element argument can be a selector string
// //   for an individual element
// var flkty = new Flickity( '.main-carousel', {
//   // options
// });


$(document).ready(function () {
  $(".client-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});


// const logoDiv = document.getElementById('logo');
// if ( window.location.pathname === '/index.html' ){
//   logoDiv.innerHTML = "";
//   logoDiv.innerHTML = "<img src='./img/logo-white.svg' alt=''>";
// }else{
//   logoDiv.innerHTML = "";
//   logoDiv.innerHTML = "<img src='./img/logo-dark.svg' alt=''>";
// }