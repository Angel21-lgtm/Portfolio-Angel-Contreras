"use strict";

const insertProjects = (idContainer, buttonsContainer, classSection) => {

    // functions
    const insertElemenstProjects = (items, container) => {
        let htmlFragment = "";

        items.forEach(item => {
            htmlFragment += `
                <div class="project-container flex justify-center align-self-center col-w-12 relative">
                    <img class="col-w-12 col-h-12" src="${item.src}" alt="${item.alt}">
    
                    <div class="hover-project-1 flex justify-center align-center absolute col-w-12 col-h-6">
                    </div>
                    <div class="hover-project-2 flex justify-center align-center absolute col-w-12 col-h-6">
                    </div>
    
                    <h3 class="col-w-11 absolute">${item.tile}</h3>
                    <p class="col-w-11 absolute">${item.description}</p>
                    <div id="${item.clickIdUrl}" class="eye absolute">
                        <img class="col-w-12 col-h-12" src="./assets/images/icons/portfolio/eye.svg" alt="Eye">
                    </div>
                </div>
            `;
        });
    
        container.innerHTML = htmlFragment;
    
        items.forEach(item => {
            document.getElementById(item.clickIdUrl).addEventListener("click", () => {
                const confirm = window.confirm("¿Quieres continuar con la web del proyecto seleccionado?");
                if(confirm){
                    window.open(item.url);
                }
            });
        });

        return container;
    }

    const selectProject = (buttons) => {

        for(let i = 0; i < buttons.length; i++){
            document.getElementById(buttons[i].id).addEventListener("click", () => {
                const buttonsLength = buttons[i].id.length;
                for(let j = 0; j < idContainer.length; j++){
                    const containerId = idContainer[j].id.substring(0, buttonsLength);
                    if(buttons[i].id === buttons[0].id){
                        document.getElementById(idContainer[j].id).classList.remove(classSection);
                    }else if(buttons[i].id === containerId){
                        document.getElementById(idContainer[j].id).classList.remove(classSection);
                    }else{
                        document.getElementById(idContainer[j].id).classList.add(classSection);
                    }
                }
            });
        }
    }

    const buttons = buttonsContainer.children;

    // webs
    const infoItemWebs = [
        {
            src: "./assets/images/photos/portfolio/webs/EduCont Gastronomy Events.jpg",
            alt: "EduCont Gastronomy Events",
            tile: "EduCont Gastronomy Events",
            description: "Web de pequeña empresa de servicios de cocina (da click en el ojo para ir al proyecto).",
            url: "https://condescending-stonebraker-58e36d.netlify.app/",
            clickIdUrl: "eye-1",
        },
        {
            src: "./assets/images/photos/portfolio/webs/Fast Online Shopping - FOSH.jpg",
            alt: "Fast Online Shopping - FOSH",
            tile: "Fast Online Shopping - FOSH",
            description: "Ejemplo de una pequeña tienda de productos online (da click en el ojo para ir al proyecto).",
            url: "https://nostalgic-hypatia-bd78dc.netlify.app/",
            clickIdUrl: "eye-2",
        },
    ];

    insertElemenstProjects(infoItemWebs, idContainer[0]);

    // games

    
    return `
        ${idContainer}
        ${selectProject(buttons)}
    `;
}

export {
    insertProjects
}