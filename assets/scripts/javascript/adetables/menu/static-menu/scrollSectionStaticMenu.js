" use strict";

const scrollSectionStaticMenu = (idElement, style) => {

    const idFirtsElementUl = idElement.firstElementChild;
    const idChildrenLi = idFirtsElementUl.children;
    const arrayIdChildrenLi = [];

    const divElement = idChildrenLi[0].lastElementChild;
    const firstElementDivElement = divElement.firstElementChild;

    for(let i = 0; i < idChildrenLi.length; i++){
        arrayIdChildrenLi.push(idChildrenLi[i]);
    }

    const infoItems = [
        {
            position: 0,
            leftStyle: "0",
            borderStyle:"9px solid var(--body)",
            src: "./assets/images/icons/static-menu/home.svg",
            alt: "Home",
        },
        {
            position: 1,
            leftStyle: "100%",
            borderStyle: "9px solid var(--white-da)",
            src: "./assets/images/icons/static-menu/about.svg",
            alt: "About",
        },
        {
            position: 2,
            leftStyle: "250%",
            borderStyle:"9px solid var(--body)",
            src: "./assets/images/icons/static-menu/skills.svg",
            alt: "Skills",
        },
        {
            position: 3,
            leftStyle: "450%",
            borderStyle:"9px solid var(--white-da)",
            src: "./assets/images/icons/static-menu/portfolio.svg",
            alt: "Portfolio",
        },
        {
            position: 4,
            leftStyle: "650%",
            borderStyle:"9px solid var(--body)",
            src: "./assets/images/icons/static-menu/contact.svg",
            alt: "Contact",
        },
    ];

    const selectSection = (positionArray, leftStyle, borderStyle, src, alt) => {
        arrayIdChildrenLi.filter((item, position) => {
            if(position === positionArray){
                item.classList.add(style);
                document.getElementById(divElement.id).style.left = leftStyle;
                document.getElementById(divElement.id).style.border = borderStyle;
                firstElementDivElement.src = src,
                firstElementDivElement.alt = alt;
            }else{
                item.classList.remove(style);
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

        if(scrollYWindow > 0 && scrollYWindow < documents[0]){
            return selectSection(infoItems[0].position, infoItems[0].leftStyle, infoItems[0].borderStyle, infoItems[0].src, infoItems[0].alt);
        // about
        }else if(scrollYWindow >= documents[0] && scrollYWindow < (documents[0] + documents[1])){
            selectSection(infoItems[1].position, infoItems[1].leftStyle, infoItems[1].borderStyle, infoItems[1].src, infoItems[1].alt);
        // skills
        }else if(scrollYWindow >= (documents[0] + documents[1]) && scrollYWindow < (documents[0] + documents[1] + documents[2])){
            return selectSection(infoItems[2].position, infoItems[2].leftStyle, infoItems[2].borderStyle, infoItems[2].src, infoItems[2].alt);
        // portfolio
        }else if(scrollYWindow >= (documents[0] + documents[1] + documents[2]) && scrollYWindow < (documents[0] + documents[1] + documents[2] + documents[3])){
            return selectSection(infoItems[3].position, infoItems[3].leftStyle, infoItems[3].borderStyle, infoItems[3].src, infoItems[3].alt);
        // contact
        }else if(scrollYWindow >= (documents[0] + documents[1] + documents[2] + documents[3]) && scrollYWindow < (documents[0] + documents[1] + documents[2] + documents[3] + documents[4])){
            return selectSection(infoItems[4].position, infoItems[4].leftStyle, infoItems[4].borderStyle, infoItems[4].src, infoItems[4].alt);
        }
    });
}

export { 
    scrollSectionStaticMenu 
}