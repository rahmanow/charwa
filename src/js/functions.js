function ready (fn) { (document.readyState !== 'loading') ? fn() : document.addEventListener('DOMContentLoaded', fn);}

const path = location.pathname;

const l = (item) => {console.log(item)}

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
const addStyle = (selector, property, value) => {
    document.querySelector(selector).style = property + ':' + value;
}

// add HTML into a certain class or id
const addInnerHTML = (selector, value) => {
    selector ? document.querySelector(selector).innerHTML = value : '';
}




///// Custom Functions

const unlockCard = (id) => {
    hideElement(['.'+ id + '-card-inner', '.'+ id + '-locked']);
    removeClass(['.'+ id + '-random-fact', '.'+ id + '-unlocked'], 'hidden');
    addClass('.'+ id + '-avatar', 'avatar');
}

const modulesList = {
    index : {                           // page name without extention
        '#projects': projectCardsMap,     // id of the parent element : function
        '#client-slider': clientsMap,
        '#home-team': teamMap
    },
    aboutus : {
        '#team-cards': teamCardsMap
    },
    work: {
        '#work-projects': projectCardsMap
    }
}

console.log(path);
const modulesByPage = () => {
    addInnerHTML('#nav-list', menuMap);
    let page = (path === '' || path === '/') ? 'index' : path.substring(1).split('.')[0];
    console.log(page);
    //console.log(path);
    Object.entries(modulesList[page]).forEach(item => {
        const [key, value] = item;
        addInnerHTML(key, value);
    })
}
modulesByPage();

const logoMouseOver = () => {
    addClass('.slogan', 'slogan-animation');
    addClass('.logo', 'logo-animation');
}

const logoMouseOut = () => {
    removeClass('.slogan', 'slogan-animation');
    removeClass('.logo', 'logo-animation');
};

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
