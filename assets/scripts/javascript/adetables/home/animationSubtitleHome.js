"use strict";

 const animationSubtitleHome = (idList, classAdd) => {

    class ClassAnimatiosSubtitleHome{
        constructor(htmlCollectionId, classAdd, time){
            this.htmlCollectionId = htmlCollectionId;
            this.classAdd = classAdd;
            this.time = time;
        }
        
        windowLoadInsertHtmlCollectionLetters(text, letterColorOne, letterColorTwo, time){
            let count = 0;

            window.addEventListener("load", () => {

                this.htmlCollectionId.forEach((item, position) => {
                    item.style.opacity = "0";
                    item.innerHTML = text[position];
                });
                
                const timeSetInterval = setInterval(() => {
                    this.htmlCollectionId[count].innerHTML = text[count];
                    this.htmlCollectionId[count].classList.add(this.classAdd);
                    this.htmlCollectionId[count].style.color = letterColorOne;
                    this.htmlCollectionId[count].style.opacity = "1";
                    count ++;

                    if(count === text.length){
                        this.htmlCollectionId.forEach(item => {
                            item.classList.remove(this.classAdd);
                            item.style.color = letterColorTwo;
                            item.style.transition = `color ${(this.time / 100) * 0.2}s`;
                        });

                        return clearInterval(timeSetInterval);
                    }
                }, time);
            });
        }

        htmlCollectionLettersMouseover(){
            this.htmlCollectionId.forEach((item) => {
                item.addEventListener("mouseover", () => {
                    item.classList.add(this.classAdd);
                    setTimeout(() => {
                        item.style.transition = "none";
                        return item.classList.remove(this.classAdd);
                    }, this.time);
                });
            });
        };
    }

    const objectSubtitleHome = new ClassAnimatiosSubtitleHome(idList, classAdd, 600);

    return `
        ${objectSubtitleHome.windowLoadInsertHtmlCollectionLetters("¡Desarrollador Web!", "var(--aqua)", "var(--white-da)", objectSubtitleHome.time / 3)}
        ${objectSubtitleHome.htmlCollectionLettersMouseover()}
    `;
}

export {
    animationSubtitleHome
}