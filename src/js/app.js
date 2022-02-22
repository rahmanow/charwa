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

let slidingMap = sliding(slidingTextAboutUs);

addInnerHTML('#nav-list', menuMap)
if (page === 'index') {
  addClass('.header-class', 'bg-ch-dark')
  addClass('.navigation-bar', 'dark-navbar')
  addInnerHTML('#projects', projectCardsMap)
  addInnerHTML('#home-team', teamMap)
  addInnerHTML('#client-slider', clientsMap)
} else if (page === 'aboutus') {
  addClass('.header-class', 'bg-ch-background')
  addClass('.navigation-bar', 'light-navbar')
  addInnerHTML('#sliding-items', slidingMap)
  addInnerHTML('#team-cards', teamCardsMap)
} else if (page === 'work') {
  addClass('.header-class', 'bg-ch-background');
  addClass('.navigation-bar', 'light-navbar');
  addInnerHTML('#work-projects', projectCardsMap)
}

const unlockCard = (id) => {
  hideElement(['.'+ id + '-card-inner', '.'+ id + '-locked']);
  removeClass(['.'+ id + '-random-fact'], 'opacity-0');
  removeClass(['.'+ id + '-unlocked'], 'hidden');
  addClass('.'+ id + '-avatar', 'avatar');
}

const logoMouseOver = () => {
  addClass('.slogan', 'slogan-animation');
  addClass('.logo', 'logo-animation');
}

const logoMouseOut = () => {
  removeClass('.slogan', 'slogan-animation');
  removeClass('.logo', 'logo-animation');
};