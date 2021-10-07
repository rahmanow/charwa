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

    $(".btn-aboutcard").on({
        click: function() {
          $(".img-name").css("display", "none");
          $(".arrow").css("display", "none");
          $(".btn-text-1").css("display", "none");
          $(".btn-text-2").css("display", "inline");
          $(".lock-svg").css("display", "none");
          $(".unlock-svg").css("display", "inline");
          $(".barista-icon").css("display", "inline");
          $(".img-ability").css("display", "inline");
          $(".aboutus-img").css("padding-top", "15%");
        },
        mouseleave: function() {
          
        },
      });


  
    $(window).scroll(function() {
      let position = $(this).scrollTop();
      if (position >= 2375) {
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


var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
    cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
    nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);
