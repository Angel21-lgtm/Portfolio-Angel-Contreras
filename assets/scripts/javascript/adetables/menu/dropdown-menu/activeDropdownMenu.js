"use strict";

const activeDropdownMenu = (style, button, menu) => {
    button.addEventListener("click", () => {
        return menu.classList.toggle(style);
    });
}

export {
    activeDropdownMenu
}