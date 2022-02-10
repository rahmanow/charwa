ready(() => {
  window.onscroll = () => {
    let position = window.scrollY | document.body.scrollTop;
    if (position >= 100) {
      addClass('.navigation-bar', 'nav-scroll');
      addClass('.logo', 'logo-scroll');
      addClass('.mouse-container', 'md:opacity-0');

    } else {
      removeClass('.navigation-bar', 'nav-scroll');
      removeClass('.logo', 'logo-scroll');
      removeClass('.mouse-container', 'md:opacity-0');
    }
  };
});



const modulesList = {
  index : {                               // page name without extention
    '#projects': projectCardsMap,       // id of the parent element : function
    '#client-slider': clientsMap,
    '#home-team': teamMap,
    '#slider-text': sliderTextMap
  },
  aboutus : {
    '#sliding-items': slidingMap(slidingTextAboutUs),
    '#team-cards': teamCardsMap
  },
  work: {
    '#sliding-logo': slidingMap(slidingLogos),
    '#work-projects': projectCardsMap
  }
}

modulesByPage();

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