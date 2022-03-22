"use strict";

const clickCv = (idButton, classButton) => {

    const buttonCv = idButton,
          windowClick = window;

    buttonCv.addEventListener("click", () => {
        buttonCv.classList.add(classButton);
    });
    
    windowClick.addEventListener("click", e => {
        if(e.target != buttonCv){
            buttonCv.classList.remove(classButton);
        }
    });

    return `
        ${buttonCv}
        ${windowClick}
    `;
}

export { clickCv };