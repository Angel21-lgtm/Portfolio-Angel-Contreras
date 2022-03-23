"use strict";

const insertIsometric = (containerId) => {
    const infoItem = [
        {
            src: "./assets/images/photos/skills/Designer_Isometric.svg", 
            alt: "Designer isometric",
            id: "designer-isometric",
            url: "https://www.youtube.com/watch?v=sAZ2A1bztwQ",
            text: "¡Da click en la imagen para saber más de UI and UX Design!",
        },
        {
            src: "./assets/images/photos/skills/Javascript_Isometric.svg",
            alt: "Javascript isometric",
            id: "javascript-isometric",
            url: "https://codepen.io/Angeal",
            text: "¡Da click en la imagen para ir a mi perfil de Codepen!",
        },
    ];

    let htmlFragment = "";

    infoItem.forEach(item => {
        htmlFragment += `
            <div id="${item.id}" class="col-w-12 relative">
                <div class="link-isometric absolute">
                    <p>${item.text}</p>
                </div>
                <img class="col-w-12 col-h-12" src="${item.src}" alt="${item.src}">
            </div>
        `;
    });

    containerId.innerHTML = htmlFragment;

    infoItem.forEach(item => {
        document.getElementById(item.id).addEventListener("click", () => {
            const confirm = window.confirm("¿Seguro de que quieres ir a este sitio web?");
            if(confirm){
                return window.open(item.url);
            }

            return confirm;
        });
    });

    return containerId;
}

export {
    insertIsometric
}