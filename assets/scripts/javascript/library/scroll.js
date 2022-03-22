"use strict";

const scrollMenuFixed = (menu, style) => {
    const windowScroll = window.addEventListener("scroll", () => {
        menu.classList.toggle(style, window.scrollY > 0);
    });

    return windowScroll;
}

export { scrollMenuFixed };