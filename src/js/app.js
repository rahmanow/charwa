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

const modulesByPage = () => {
  addInnerHTML('#nav-list', menuMap);
  Promise.all(Object.entries(modulesList[page]).map(async(item) => {
    const [key, value] = item;
    addInnerHTML(key, await value);
  })).then(r => {
  })
}

const modulesList = {
  index : {                               // page name without extention
    '#projects': projectCardsMap,       // id of the parent element : function
    '#client-slider': clientsMap,
    '#home-team': teamMap
  },
  aboutus : {
    '#sliding-items': slidingMap(slidingTextAboutUs),
    '#team-cards': teamCardsMap
  },
  work: {
    '#work-projects': projectCardsMap
  }
}
modulesByPage();

const navBar = () => {
  //let color = document.querySelector('.light-navbar');
  if(page === 'index') {
    addClass('.header-class', 'bg-ch-dark');
    addClass('.navigation-bar', 'dark-navbar');
  } else {
    addClass('.header-class', 'bg-ch-background');
    addClass('.navigation-bar', 'light-navbar');
  }
}
navBar();