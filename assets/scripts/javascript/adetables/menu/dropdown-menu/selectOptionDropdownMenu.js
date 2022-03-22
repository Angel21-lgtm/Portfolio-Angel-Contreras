"use strict";

const selectOptionDropdownMenu = (styleOne, styleTwo, styleIdElement, idElement) => {
    const idElementFirstChild = idElement.firstElementChild,
          idElementChildren = idElementFirstChild.children;

    const idFirstElementChild = [],
          idLastElementChild = [];

    for(let i = 0; i < idElementChildren.length; i++){
        idFirstElementChild.push(idElementChildren[i].firstElementChild);
        idLastElementChild.push(idElementChildren[i].lastElementChild);
    }

    const idFistElementChildOne = idFirstElementChild[0].addEventListener("click", () => {
        idLastElementChild[0].classList.add(styleOne);
        idLastElementChild[1].classList.remove(styleOne);
        idLastElementChild[2].classList.remove(styleOne);
        idLastElementChild[3].classList.remove(styleOne);
        idLastElementChild[4].classList.remove(styleOne);

        idFirstElementChild[0].classList.add(styleTwo);
        idFirstElementChild[1].classList.remove(styleTwo);
        idFirstElementChild[2].classList.remove(styleTwo);
        idFirstElementChild[3].classList.remove(styleTwo);
        idFirstElementChild[4].classList.remove(styleTwo);
        
        idElement.classList.remove(styleIdElement);
    }),
          idFistElementChildTwo = idFirstElementChild[1].addEventListener("click", () => {
              idLastElementChild[0].classList.remove(styleOne);
              idLastElementChild[1].classList.add(styleOne);
              idLastElementChild[2].classList.remove(styleOne);
              idLastElementChild[3].classList.remove(styleOne);
              idLastElementChild[4].classList.remove(styleOne);

              idFirstElementChild[0].classList.remove(styleTwo);
              idFirstElementChild[1].classList.add(styleTwo);
              idFirstElementChild[2].classList.remove(styleTwo);
              idFirstElementChild[3].classList.remove(styleTwo);
              idFirstElementChild[4].classList.remove(styleTwo);

              idElement.classList.remove(styleIdElement);
    }),
          idFistElementChildThree = idFirstElementChild[2].addEventListener("click", () => {
              idLastElementChild[0].classList.remove(styleOne);
              idLastElementChild[1].classList.remove(styleOne);
              idLastElementChild[2].classList.add(styleOne);
              idLastElementChild[3].classList.remove(styleOne);
              idLastElementChild[4].classList.remove(styleOne);

              idFirstElementChild[0].classList.remove(styleTwo);
              idFirstElementChild[1].classList.remove(styleTwo);
              idFirstElementChild[2].classList.add(styleTwo);
              idFirstElementChild[3].classList.remove(styleTwo);
              idFirstElementChild[4].classList.remove(styleTwo);

              idElement.classList.remove(styleIdElement);
    }),
          idFistElementChildFour = idFirstElementChild[3].addEventListener("click", () => {
              idLastElementChild[0].classList.remove(styleOne);
              idLastElementChild[1].classList.remove(styleOne);
              idLastElementChild[2].classList.remove(styleOne);
              idLastElementChild[3].classList.add(styleOne);
              idLastElementChild[4].classList.remove(styleOne);

              idFirstElementChild[0].classList.remove(styleTwo);
              idFirstElementChild[1].classList.remove(styleTwo);
              idFirstElementChild[2].classList.remove(styleTwo);
              idFirstElementChild[3].classList.add(styleTwo);
              idFirstElementChild[4].classList.remove(styleTwo);

              idElement.classList.remove(styleIdElement);
    }),
          idFistElementChildFive = idFirstElementChild[4].addEventListener("click", () => {
              idLastElementChild[0].classList.remove(styleOne);
              idLastElementChild[1].classList.remove(styleOne);
              idLastElementChild[2].classList.remove(styleOne);
              idLastElementChild[3].classList.remove(styleOne);
              idLastElementChild[4].classList.add(styleOne);

              idFirstElementChild[0].classList.remove(styleTwo);
              idFirstElementChild[1].classList.remove(styleTwo);
              idFirstElementChild[2].classList.remove(styleTwo);
              idFirstElementChild[3].classList.remove(styleTwo);
              idFirstElementChild[4].classList.add(styleTwo);

              idElement.classList.remove(styleIdElement);
    });

    return `
        ${idFistElementChildOne}
        ${idFistElementChildTwo}
        ${idFistElementChildThree}
        ${idFistElementChildFour}
        ${idFistElementChildFive}
    `;
}

export { selectOptionDropdownMenu };