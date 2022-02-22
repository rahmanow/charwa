// add new class element
const addClass = (selector, newClass) => {
    Array.isArray(selector) ? selector.forEach(item => {
        document.querySelector(item).classList.add(newClass);
    }) : (document.querySelector(selector)) ?
        document.querySelector(selector).classList.add(newClass) : '';
}

// remove class element
const removeClass = (selector, remove) => {
    Array.isArray(selector) ? selector.forEach(item => {
        document.querySelector(item).classList.remove(remove)
    }) : (document.querySelector(selector)) ?
        document.querySelector(selector).classList.remove(remove) : '';
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