"use strict";

const animationSubtitleHome = (idList, classAdd) => {

    idList.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.classList.add(classAdd);
        });

        window.addEventListener("mouseover", e => {
            if(e.target != item){
                item.classList.remove(classAdd);
            }
        });
    });
}

export {
    animationSubtitleHome
}