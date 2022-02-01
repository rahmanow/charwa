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

  $(".btn-aboutcard-1").on({
    click: function () {
      $(".img-name-1").css("display", "none");
      $(".arrow-1").css("display", "none");
      $(".btn-text-azat-1").css("display", "none");
      $(".btn-text-azat-2").css("display", "inline");
      $(".lock-svg-1").css("display", "none");
      $(".unlock-svg-1").css("display", "inline");
        //$(".tea-icon").css("display", "inline");
      //   $(".img-ability").css("display", "inline");
        //$(".fan-icon").css("display", "inline");
      //   $(".img-ability-2").css("display", "inline");
      $(".aboutus-img-1").css("padding-top", "15%");
    },
  });

  // $(".btn-aboutcard-2").on({
  //   click: function () {
  //     $(".img-name-2").css("display", "none");
  //     $(".arrow-2").css("display", "none");
  //     $(".btn-text-sevda-1").css("display", "none");
  //     $(".btn-text-sevda-2").css("display", "inline");
  //     $(".lock-svg-2").css("display", "none");
  //     $(".unlock-svg-2").css("display", "inline");
  //     $(".barista-icon").css("display", "inline");
  //     $(".ability").css("display", "inline");
  //     $(".sevda-ability").css("display", "inline");
  //     $(".barista-icon-2").css("display", "inline");
  //     $(".sevda-ability-2").css("display", "inline");
  //     $(".arrow2").css("display", "inline");
  //     $(".aboutus-img-2").css("padding-top", "28%");
  //   },
  // });

  $(".btn-aboutcard-3").on({
    click: function () {
      $(".img-name-3").css("display", "none");
      $(".arrow-3").css("display", "none");
      $(".btn-text-kakajan-1").css("display", "none");
      $(".btn-text-kakajan-2").css("display", "inline");
      $(".lock-svg-3").css("display", "none");
      $(".unlock-svg-3").css("display", "inline");
      //   $(".barista-icon").css("display", "inline");
      //   $(".img-ability").css("display", "inline");
      //   $(".barista-icon-2").css("display", "inline");
      //   $(".img-ability-2").css("display", "inline");
      $(".aboutus-img-3").css("padding-top", "15%");
    },
  });

  $(".btn-aboutcard-4").on({
    click: function () {
      $(".img-name-4").css("display", "none");
      $(".arrow-4").css("display", "none");
      $(".btn-text-sona-1").css("display", "none");
      $(".btn-text-sona-2").css("display", "inline");
      $(".lock-svg-4").css("display", "none");
      $(".unlock-svg-4").css("display", "inline");
      //   $(".barista-icon").css("display", "inline");
      //   $(".img-ability").css("display", "inline");
      //   $(".barista-icon-2").css("display", "inline");
      //   $(".img-ability-2").css("display", "inline");
      $(".aboutus-img-4").css("padding-top", "15%");
    },
  });

  // $(window).scroll(function () {
  //   let position = $(this).scrollTop();
  //   if (position >= 2175) {
  //     $(".card-list").addClass("fromUp");
  //   } else {
  //     $(".card-list").removeClass("fromUp");
  //   }
  // });
//});

// const mouseOver = (selector, newClass) => {
//   document.querySelector(selector).classList.add(newClass);
//   document.querySelector(selector).classList.add(newClass);
// }

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


// const logoDiv = document.getElementById('logo');
// if ( window.location.pathname === '/index.html' ){
//   logoDiv.innerHTML = "";
//   logoDiv.innerHTML = "<img src='./img/logo-white.svg' alt=''>";
// }else{
//   logoDiv.innerHTML = "";
//   logoDiv.innerHTML = "<img src='./img/logo-dark.svg' alt=''>";
// }