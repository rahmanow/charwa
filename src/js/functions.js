function ready (fn) { (document.readyState !== 'loading') ? fn() : document.addEventListener('DOMContentLoaded', fn);}

const path = location.pathname;
let page = (path === '' || path === '/') ? 'index' : path.substring(1).split('.')[0];

const log = (item) => {console.log(item)}

// add new class element
const addClass = (selector, newClass) => {
    Array.isArray(selector) ? selector.forEach(item => {
        document.querySelector(item).classList.add(newClass);
    }) : document.querySelector(selector).classList.add(newClass)
}

// remove class element
const removeClass = (selector, remove) => {
    Array.isArray(selector) ? selector.forEach(item => {
        document.querySelector(item).classList.remove(remove)
    }) : document.querySelector(selector).classList.remove(remove)
}

// hide an element
const hideElement = (selector) => {
    Array.isArray(selector) ? selector.forEach(item => {
        addClass(item, 'hidden')
    }) : addClass(selector, 'hidden');
}

// add style to an element
const addStyle = (selector, style) => {
    document.querySelector(selector).style = style.join(';');
}
// add HTML into a certain class or id
const addInnerHTML = (selector, value) => {
    selector ? document.querySelector(selector).innerHTML = value : '';
}

///// Custom Functions
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