"use strict";

const selectOptionDropdownMenu = (styleOne, styleTwo, styleIdElement, container) => {
    const firstChildContainer = container.firstElementChild,
        childrenContainer = firstChildContainer.children,
        arrayFirstElementChild = [],
        arrayLastElementChild = [];

    for(let i = 0; i < childrenContainer.length; i++){
        arrayFirstElementChild.push(childrenContainer[i].firstElementChild);
        arrayLastElementChild.push(childrenContainer[i].lastElementChild)
    }

    return arrayFirstElementChild.forEach((item, position) => {
        item.addEventListener("click", () => {
            arrayFirstElementChild.filter(firstItem => {
                if(item != firstItem) firstItem.classList.remove(styleTwo);
                else firstItem.classList.add(styleTwo);
            });

            arrayLastElementChild.filter((lastItem, lastPosition) => {
                if(position != lastPosition) lastItem.classList.remove(styleOne);
                else lastItem.classList.add(styleOne);
            });

            container.classList.remove(styleIdElement);
        });
    });
}

export { selectOptionDropdownMenu };