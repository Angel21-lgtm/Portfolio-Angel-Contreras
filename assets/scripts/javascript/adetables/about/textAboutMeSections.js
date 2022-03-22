"use strict";

const textAboutMeSections = (contentText, buttonLeft, buttonRight) => {
    const childenContentText = contentText.children;

    let i = 0;

    buttonRight.addEventListener("click", () => {
        i ++;
        contentText.style.right = `${i}00%`;
        if(i === childenContentText.length - 1){
            buttonRight.style.display = "none";
            return i;
        }else if(i > 0){
            buttonLeft.style.display = "flex";
            return i;
        }
    });

    buttonLeft.addEventListener("click", () => {
        i --;
        contentText.style.right = `${i}00%`;
        if(i === 0){
            buttonRight.style.display = "flex";
            buttonLeft.style.display = "none";
            return i = 0;
        }else if(i < (childenContentText.length - 1)){
            buttonRight.style.display = "flex";
            return i;
        }
    });

    return `
        ${buttonRight}
        ${buttonLeft}
    `;
    
}

export { 
    textAboutMeSections 
}