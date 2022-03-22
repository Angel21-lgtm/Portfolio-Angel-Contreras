"use strict";

const dropdown = (style, button, menu) => {

    return button.addEventListener("click", () => {
        return menu.classList.toggle(style);
    });
}

export { dropdown };