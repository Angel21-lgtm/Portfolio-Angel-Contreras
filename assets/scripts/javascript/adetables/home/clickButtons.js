"use strict";

class ClickButtonCv{
    constructor(idContent, classAdd){
        this.idContent = idContent;
        this.classAdd = classAdd;
    }
    clickButon(){
        this.idContent.addEventListener("click", () => {
            return this.idContent.classList.add(this.classAdd);
        });

        window.addEventListener("click", e => {
            if(e.target != this.idContent){
                return this.idContent.classList.remove(this.classAdd);
            }
        });
    }
}

export { ClickButtonCv };