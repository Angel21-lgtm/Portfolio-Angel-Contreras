"use strict";

const scrollSectionDropdownMenu = (idElement, style, styleSelectIcon) => {
    const idFirtsElementUl = idElement.firstElementChild;
    const idChildrenLi = idFirtsElementUl.children;

    const arrayIdChildrenDiv = [];
    const arrayIdChildrenA = [];

    for(let i = 0; i < idChildrenLi.length; i++){
        arrayIdChildrenA.push(idChildrenLi[i].firstElementChild);
        arrayIdChildrenDiv.push(idChildrenLi[i].lastElementChild);
    }

    const positions = [0, 1, 2, 3, 4];

    const selectSection = positionItem => {
        arrayIdChildrenA.filter((item, position) => {
            if(position === positionItem){
                item.classList.add(style);
                arrayIdChildrenDiv[position].classList.add(styleSelectIcon);
            }else{
                item.classList.remove(style);
                arrayIdChildrenDiv[position].classList.remove(styleSelectIcon);
            }
        });
    }

    // select scrollY of window
    window.addEventListener("scroll", () => {
        const documents = [
            document.getElementById("home").clientHeight - 2, 
            document.getElementById("about").clientHeight - 2,
            document.getElementById("skills").clientHeight - 2,
            document.getElementById("portfolio").clientHeight - 2,
            document.getElementById("contact").clientHeight - 2,
        ];

        const scrollYWindow = window.scrollY;

        // home
        if(scrollYWindow > 0 && scrollYWindow < documents[0]){
            return selectSection(positions[0]);
        // about
        }else if(scrollYWindow >= documents[0] && scrollYWindow < (documents[0] + documents[1])){
            return selectSection(positions[1]);
        // skills
        }else if(scrollYWindow >= (documents[0] + documents[1]) && scrollYWindow < (documents[0] + documents[1] + documents[2])){
            return selectSection(positions[2]);
        // portfolio
        }else if(scrollYWindow >= (documents[0] + documents[1] + documents[2]) && scrollYWindow < (documents[0] + documents[1] + documents[2] + documents[3])){
            return selectSection(positions[3]);
        // contact
        }else if(scrollYWindow >= (documents[0] + documents[1] + documents[2] + documents[3]) && scrollYWindow < (documents[0] + documents[1] + documents[2] + documents[3] + documents[4])){
            return selectSection(positions[4]);
        }
    });
}

export {
    scrollSectionDropdownMenu
}