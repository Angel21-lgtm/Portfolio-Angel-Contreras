"use strict";

const selectOptionStaticMenu = (idElement, style) => {
    const idFirstElement = idElement.firstElementChild,
          idChildrenElement = idFirstElement.children;

    const idFirstElementChild = [];

    for(let i = 0; i < idChildrenElement.length; i++){
        idFirstElementChild.push(idChildrenElement[i]);
    }

    idFirstElementChild.forEach((item, position) => {
        item.addEventListener("click", () => {
            idFirstElementChild.filter((itemAddClass, positionAddClass) => {
                if(position != positionAddClass){
                    itemAddClass.classList.remove(style);
                }else{
                    itemAddClass.classList.add(style);
                }
            });
        });
    });



    return `
        ${idFirstElementChild}
    `;
}

export { 
    selectOptionStaticMenu
}