"use strict";

const clickRepoPortfolio = (idElement, classAdd) => {
    idElement.addEventListener("click", () => {
        let confirm = window.confirm("¿Seguro de que quieres ir a este sitio web?");
        idElement.classList.add(classAdd);
        if(confirm){
            return window.open("https://github.com/Angel21-lgtm/Portfolio-Angel-Contreras");
        }
    });

    window.addEventListener("click", e => {
        if(e.target != idElement){
            return idElement.classList.remove(classAdd);
        }
    });
}

export {
    clickRepoPortfolio
}