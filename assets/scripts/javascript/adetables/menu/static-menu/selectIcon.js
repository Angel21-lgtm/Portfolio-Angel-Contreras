"use strict";

const selectIcon = (idElement) => {
    const firstElementChild = idElement.firstElementChild;

    const firstElemenChildren = firstElementChild.firstElementChild;
    const divElement = firstElemenChildren.lastElementChild;
    const firstElementDivElement = divElement.firstElementChild;

    const collectionElementsChildren = firstElementChild.children;
    const arrayElementsChildren = [];

    for(let i = 0; i < collectionElementsChildren.length ; i++){
        arrayElementsChildren.push(collectionElementsChildren[i]);
    }

    arrayElementsChildren.forEach((item, position) => {
        item.addEventListener("click", () => {
            arrayElementsChildren.filter(() => {
                if(position === 0){
                    document.getElementById(divElement.id).style.left = "0";
                    document.getElementById(divElement.id).style.border = "9px solid var(--body)";
                    firstElementDivElement.src = "./assets/images/icons/static-menu/home.svg",
                    firstElementDivElement.alt = "Home";
                }else if(position === 1){
                    document.getElementById(divElement.id).style.left = "100%";
                    document.getElementById(divElement.id).style.border = "9px solid var(--white-da)";
                    firstElementDivElement.src = "./assets/images/icons/static-menu/about.svg",
                    firstElementDivElement.alt = "About";
                }else if(position === 2){
                    document.getElementById(divElement.id).style.left = "250%";
                    document.getElementById(divElement.id).style.border = "9px solid var(--body)";
                    firstElementDivElement.src = "./assets/images/icons/static-menu/skills.svg",
                    firstElementDivElement.alt = "Skills";
                }else if(position === 3){
                    document.getElementById(divElement.id).style.left = "450%";
                    document.getElementById(divElement.id).style.border = "9px solid var(--white-da)";
                    firstElementDivElement.src = "./assets/images/icons/static-menu/portfolio.svg",
                    firstElementDivElement.alt = "Portfolio";
                }else if(position === 4){
                    document.getElementById(divElement.id).style.left = "650%";
                    document.getElementById(divElement.id).style.border = "9px solid var(--body)";
                    firstElementDivElement.src = "./assets/images/icons/static-menu/contact.svg",
                    firstElementDivElement.alt = "Contact";
                }
            });
        });
    });

    return idElement;
}

export {
    selectIcon
}