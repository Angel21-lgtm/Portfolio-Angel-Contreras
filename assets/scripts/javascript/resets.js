"use strict";

const resets = () => {
    // buttons-anime
    class ButtonAnimations{
        constructor(classButton, animation, time){
            this.classButton = classButton;
            this.animation = animation;
            this.time = time;
        }
        buttonMouseoverAnimationOne(){
            const buttonAnime = document.querySelectorAll(this.classButton);
            buttonAnime.forEach(item => {
                item.addEventListener("mouseover", () => {
                    item.classList.add(this.animation);
                    setTimeout(() => {
                        return item.classList.remove(this.animation); 
                    }, this.time);
                });
            });
        }

        buttonClickAnimationOne(){
            const buttonAnime = document.querySelectorAll(this.classButton);
            buttonAnime.forEach(item => {
                item.addEventListener("click", () => {
                    item.classList.add(this.animation);
                    setTimeout(() => {
                        return item.classList.remove(this.animation); 
                    }, this.time);
                });
            });
        }
    }

    const buttonAnime = new ButtonAnimations(".button-anime", "anime-button", 500);
    buttonAnime.buttonMouseoverAnimationOne();
    // buttons-anime
}

export {
    resets
}