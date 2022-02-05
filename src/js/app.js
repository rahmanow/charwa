ready(() => {
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

//addInnerHTML('#home-team1', teamMap);

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