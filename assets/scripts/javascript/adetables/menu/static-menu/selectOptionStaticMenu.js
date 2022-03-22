"use strict";

const selectOptionStaticMenu = (idElement, style) => {
    const idFirstElement = idElement.firstElementChild,
          idChildrenElement = idFirstElement.children;

    const idFirstElementChild = [];

    for(let i = 0; i < idChildrenElement.length; i++){
        idFirstElementChild.push(idChildrenElement[i]);
    }

    const idFirstElementChildOne = idFirstElementChild[0].addEventListener("click", () => {
        idFirstElementChild[0].classList.add(style);
        idFirstElementChild[1].classList.remove(style);
        idFirstElementChild[2].classList.remove(style);
        idFirstElementChild[3].classList.remove(style);
        idFirstElementChild[4].classList.remove(style);
    }),
          idFirstElementChildTwo = idFirstElementChild[1].addEventListener("click", () => {
              idFirstElementChild[0].classList.remove(style);
              idFirstElementChild[1].classList.add(style);
              idFirstElementChild[2].classList.remove(style);
              idFirstElementChild[3].classList.remove(style);
              idFirstElementChild[4].classList.remove(style);  
    }),
          idFirstElementChildThree = idFirstElementChild[2].addEventListener("click", () => {
              idFirstElementChild[0].classList.remove(style);
              idFirstElementChild[1].classList.remove(style);
              idFirstElementChild[2].classList.add(style);
              idFirstElementChild[3].classList.remove(style);
              idFirstElementChild[4].classList.remove(style);  
    }),
          idFirstElementChildFour = idFirstElementChild[3].addEventListener("click", () => {
              idFirstElementChild[0].classList.remove(style);
              idFirstElementChild[1].classList.remove(style);
              idFirstElementChild[2].classList.remove(style);
              idFirstElementChild[3].classList.add(style);
              idFirstElementChild[4].classList.remove(style);  
    }),
          idFirstElementChildFive = idFirstElementChild[4].addEventListener("click", () => {
              idFirstElementChild[0].classList.remove(style);
              idFirstElementChild[1].classList.remove(style);
              idFirstElementChild[2].classList.remove(style);
              idFirstElementChild[3].classList.remove(style);
              idFirstElementChild[4].classList.add(style);  
    });

    return `
        ${idFirstElementChildOne}
        ${idFirstElementChildTwo}
        ${idFirstElementChildThree}
        ${idFirstElementChildFour}
        ${idFirstElementChildFive}
    `;
}

export { selectOptionStaticMenu };