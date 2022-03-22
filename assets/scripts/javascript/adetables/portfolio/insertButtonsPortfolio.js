"use strict";

const insertButtonsPortfolio = (containerId) => {
    const infoItem = [
        {
            id: "all",
            text: "Todo",
            classList: "select-section-projects-button",
        },
        {
            id: "webs",
            text: "Webs",
            classList: "",
        },
        {
            id: "games",
            text: "Juegos",
            classList: "",
        },
    ];

    let htmlContent = "";

    infoItem.forEach(item => {
        htmlContent += `
            <button id="${item.id}" class="${item.classList}">${item.text}</button>
        `;
    });

    containerId.innerHTML = htmlContent;

    infoItem.forEach(item => {
        document.getElementById(item.id).addEventListener("click", () => {
            document.getElementById(item.id).classList.add("select-section-projects-button");
            
            infoItem.filter(itemFilter => {
                if(itemFilter.id != item.id){
                    document.getElementById(itemFilter.id).classList.remove("select-section-projects-button");
                }
            });

        });
    });

    return containerId;
}

export {
    insertButtonsPortfolio
}