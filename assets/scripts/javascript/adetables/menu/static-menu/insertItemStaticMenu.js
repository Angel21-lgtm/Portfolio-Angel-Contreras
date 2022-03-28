"use strict";

const insertItemStaticMenu = (idElement) => {
    // create <ul></ul> element
    const ulClassList = ["flex", "relative"];

    const ul = document.createElement("UL");

    ulClassList.forEach(item => {
        ul.classList.add(item);
    });

    // create <li></li> element and insert element in <ul></ul>
    const liItem = [
        {
            text: "Inicio",
            href: "#home",
        },
        {
            text: "Acerca",
            href: "#about",
        },
        {
            text: "Habilidades",
            href: "#skills",
        },
        {
            text: "Portafolio",
            href: "#portfolio",
        },
        {
            text: "Contacto",
            href: "#contact",
        },
    ];

    let htmlFragment = "";

    liItem.filter((item, position) => {
        if(position === 0){
            htmlFragment += `
            <li class="select-option-static-menu relative">
                <a href="${item.href}">
                    ${item.text}
                </a>
                <div id="select" class="absolute">
                    <img class="col-w-12 col-h-12" src="./assets/images/icons/static-menu/home.svg" alt="Home">
                </div>
            </li>
            `;
        }else{
            htmlFragment += `
            <li>
                <a href="${item.href}">
                    ${item.text}
                </a>
            </li>
            `;
        }
    });

    ul.innerHTML = htmlFragment;

    idElement.appendChild(ul);

    return idElement;
}

export {
    insertItemStaticMenu
}