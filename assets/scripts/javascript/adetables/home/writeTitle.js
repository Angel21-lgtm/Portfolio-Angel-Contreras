"use strict";

const writeTitle = (text, idName, buttonOne, buttonTwo) => {
    let textInterval;

    const print = () => {     
        let textString = text.split(""),
        textLength = text.length,
        count = 0;
        textInterval =  setInterval(() => {
            if(count === text.length){
                idName.textContent = text.substring(0, textLength);
                textLength --;
                if(textLength === 0){
                    idName.textContent = "";
                    textLength = text.length;
                    count = 0;
                }
            }else{
                idName.textContent += textString[count];
                count ++;
            }
        }, 350);   
        return textInterval;
    }

    const on = buttonOne.addEventListener("click", () => {
        buttonOne.style.display = "none";
        buttonTwo.style.display = "flex";
        return print();
    });

    const off = buttonTwo.addEventListener("click", () => {
        buttonOne.style.display = "flex";
        buttonTwo.style.display = "none";
        idName.textContent = "";
        return clearInterval(textInterval);
    });

    return `
        ${on}
        ${off}
    `;
}

export { writeTitle };