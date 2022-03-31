"use strict";

const insertItemDropdownMenu = (idContent) => {
    const itemInfo = [
        {
            href: `#home`,
            textA: `Inicio`,
            src: `./assets/images/icons/dropdown-menu/home.svg`,
            alt: `Home`,
        },
        {
            href: `#about`,
            textA: `Acerca`,
            src: `./assets/images/icons/dropdown-menu/about.svg`,
            alt: `About`,
        },
        {
            href: `#skills`,
            textA: `Habilidades`,
            src: `./assets/images/icons/dropdown-menu/skills.svg`,
            alt: `Skills`,
        },
        {
            href: `#portfolio`,
            textA: `Portafolio`,
            src: `./assets/images/icons/dropdown-menu/portfolio.svg`,
            alt: `Portfolio`,
        },
        {
            href: `#contact`,
            textA: `Contacto`,
            src: `./assets/images/icons/dropdown-menu/contact.svg`,
            alt: `Contact`,
        },
    ];

    let htmlFragment = "";

    itemInfo.filter((item, positionItem) => {
        if(positionItem === 0){
            htmlFragment += `
            <li class="flex align-center relative">
                <a href="${item.href}" class="select-option-dropdown-menu-color">
                    ${item.textA}
                </a>
                <div class="absolute select-option-dropdown-menu">
                    <img class="col-w-12 col-h-12" src="${item.src}" alt="${item.alt}">
                </div>
            </li>
            `;
        }else{
            htmlFragment += `
            <li class="flex align-center relative">
                <a href="${item.href}">
                    ${item.textA}
                </a>
                <div class="absolute">
                    <img class="col-w-12 col-h-12" src="${item.src}" alt="${item.alt}">
                </div>
            </li>
            `;
        }
    });

    const idContentFirstElementChild = idContent.firstElementChild;

    return idContentFirstElementChild.innerHTML = htmlFragment;
}

export {
    insertItemDropdownMenu
}