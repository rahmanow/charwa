function ready (fn) { (document.readyState !== 'loading') ? fn() : document.addEventListener('DOMContentLoaded', fn);}

const addClass = (selector, newClass) => {
    document.querySelector(selector).classList.add(newClass);
}

const removeClass = (selector, remove) => {
    document.querySelector(selector).classList.remove(remove);
}

const hideElement = (selector) => {
    addClass(selector, 'hidden')
}

const displayInlineElement = (selector) => {
    document.querySelector(selector).style = "display:inline";
}

const addStyle = (selector, property, value) => {
    document.querySelector(selector).style = property + ':' + value;
}