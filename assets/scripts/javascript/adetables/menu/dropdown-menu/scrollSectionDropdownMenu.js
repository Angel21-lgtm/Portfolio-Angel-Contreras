"use strict";

const scrollSectionDropdownMenu = (idElement, style, styleSelectIcon) => {
    const firtsElementOfIdElement = idElement.firstElementChild,
        childrenLiContent = firtsElementOfIdElement.children,
        arrayChildrenDiv = [],
        arrayChildrenA = [],
        positions = [0, 1, 2, 3, 4]; // Sections of the portfolio

    for(let i = 0; i < childrenLiContent.length; i++){
        arrayChildrenA.push(childrenLiContent[i].firstElementChild);
        arrayChildrenDiv.push(childrenLiContent[i].lastElementChild);
    }

    const selectSection = positionItem => {
        arrayChildrenA.filter((item, position) => {
            if(position === positionItem){
                item.classList.add(style);
                arrayChildrenDiv[position].classList.add(styleSelectIcon);
            }else{
                item.classList.remove(style);
                arrayChildrenDiv[position].classList.remove(styleSelectIcon);
            }
        });
    }

    // select scrollY of window
    window.addEventListener("scroll", () => {
        const documents = [
            document.getElementById("home").clientHeight - 10, 
            document.getElementById("about").clientHeight - 10,
            document.getElementById("skills").clientHeight - 10,
            document.getElementById("portfolio").clientHeight - 10,
            document.getElementById("contact").clientHeight - 10,
        ];

        const scrollYWindow = window.scrollY;

        // home
        if(scrollYWindow > 0 && scrollYWindow < documents[0]) selectSection(positions[0]);
        // about
        else if(scrollYWindow >= documents[0] && scrollYWindow < (documents[0] + documents[1])) selectSection(positions[1]);
        // skills
        else if(scrollYWindow >= (documents[0] + documents[1]) && scrollYWindow < (documents[0] + documents[1] + documents[2])) selectSection(positions[2]);
        // portfolio
        else if(scrollYWindow >= (documents[0] + documents[1] + documents[2]) && scrollYWindow < (documents[0] + documents[1] + documents[2] + documents[3])) selectSection(positions[3]);
        // contact
        else if(scrollYWindow >= (documents[0] + documents[1] + documents[2] + documents[3]) && scrollYWindow < (documents[0] + documents[1] + documents[2] + documents[3] + documents[4])) selectSection(positions[4]);
    });
}

export {
    scrollSectionDropdownMenu
}