"use strict";

const insertCurrentlyStudying = (containerId) => {

    const infoItem = [
        {
            src: "./assets/images/icons/skills/nodejs.svg",
            alt: "Node.js",
        },
        {
            src: "./assets/images/icons/skills/react.svg",
            alt: "React.js",
        },
        {
            src: "./assets/images/icons/skills/python.svg",
            alt: "Python",
        },
        {
            src: "./assets/images/icons/skills/csharp.svg",
            alt: "C#",
        },
        {
            src: "./assets/images/icons/skills/networks.svg",
            alt: "Networks",
        },
        {
            src: "./assets/images/icons/skills/unity.svg",
            alt: "Unity",
        },
    ];

    let htmlFragment = "";

    infoItem.forEach(item => {
        htmlFragment += `
            <div class="col-w-6">
                <img class="col-w-12 col-h-12" src="${item.src}" alt="${item.alt}">
            </div>
        `;
    });

    containerId.innerHTML = htmlFragment;

    return containerId;
}

export {
    insertCurrentlyStudying
}