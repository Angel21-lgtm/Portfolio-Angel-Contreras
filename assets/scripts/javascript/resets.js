"use strict";

const resets = () => {
    // window load
    addEventListener("load", () => {
        document.getElementById("root").style.opacity = "1";
        document.getElementById("root").style.transition = "all 0.5s";
    });
    // window load

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

// universal scroll
const styleFixedScroll = (menu, style) => {
    const windowScroll = window.addEventListener("scroll", () => {
        menu.classList.toggle(style, window.scrollY > 0);
    });

    return windowScroll;
}
// universal scroll

export {
    resets, styleFixedScroll
}