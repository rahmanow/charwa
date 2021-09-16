$(document).ready(function() {
$(window).scroll(function() {
    let position = $(this).scrollTop();
    console.log(position);
    if(position >= 2175) {
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
        responsive: [
        {
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