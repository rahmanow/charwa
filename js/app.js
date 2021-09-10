$(document).ready(function() {
$(window).scroll(function() {
    let position = $(this).scrollTop();
    console.log(position);
    if(position >= 1630) {
      $('.card-list').addClass('fromUp');
    } else {
      $('.card-list').removeClass('fromUp');
    }
  });
});