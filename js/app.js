$(document).ready(function() {
    $(window).scroll(function() {
      let position = $(this).scrollTop();
      if (position >= 100) {
        $('.navbar').addClass('custom-navbar');
      } else {
        $('.navbar').removeClass('custom-navbar');
      }
    });
  
    $(".hover-animation").on({
      mouseenter: function() {
        $(".slogan").addClass("slogan-animation");
        $(".logo").addClass("logo-top-animation");
  
      },
      mouseleave: function() {
        $(".slogan").removeClass("slogan-animation");
        $(".logo").removeClass("logo-top-animation");
      },
    });
  
  
    $(window).scroll(function() {
      let position = $(this).scrollTop();
      console.log(position);
      if (position >= 2175) {
        $('.card-list').addClass('fromUp');
      } else {
        $('.card-list').removeClass('fromUp');
      }
    });
  });
  
  
  $(document).ready(function() {
    $('.client-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1000,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
  
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });
  });