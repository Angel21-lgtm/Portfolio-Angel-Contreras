"use strict";

const clickRepoPortfolio = (idElement) => {
    idElement.addEventListener("click", () => {
        let confirm = window.confirm("¿Seguro de que quieres ir a este sitio web?");
        idElement.style.textShadow = "5px 5px 6px var(--black)";
        idElement.style.color = "var(--white)";
        idElement.style.boxShadow = "none";
        if(confirm){
            return window.open("https://github.com/Angel21-lgtm/Portfolio-Angel-Contreras");
        }
    });

    window.addEventListener("click", e => {
        if(e.target != idElement){
            idElement.style.color = "var(--aqua)";
            idElement.style.textShadow = "none";
            idElement.style.boxShadow = "0 0 1rem 0.2rem var(--black)";
            return idElement;
        }
    });
}

export {
    clickRepoPortfolio
}