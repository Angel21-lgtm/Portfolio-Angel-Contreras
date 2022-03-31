"use strict";

const insertSkillItem = (containerId) => {

    const infoItem = [
        {
            src: "./assets/images/icons/skills/javascript.svg",
            alt: "Javascript",
            idOn: "on-skill-1",
            idOff: "off-skill-1",
            idLevelSkill: "active-level-skill-1",
            level: "-40", // 60%
            idLevelNumber: "level-number-1",
            levelNumber: 60,
        },
        {
            src: "./assets/images/icons/skills/html5.svg",
            alt: "HTML5",
            idOn: "on-skill-2",
            idOff: "off-skill-2",
            idLevelSkill: "active-level-skill-2",
            level: "-20", // 80%
            idLevelNumber: "level-number-2",
            levelNumber: 80,
        },
        {
            src: "./assets/images/icons/skills/css3.svg",
            alt: "CSS3",
            idOn: "on-skill-3",
            idOff: "off-skill-3",
            idLevelSkill: "active-level-skill-3",
            level: "-25", // 75%
            idLevelNumber: "level-number-3",
            levelNumber: 75,
        },
        {
            src: "./assets/images/icons/skills/ui_ux_web_design.svg",
            alt: "UI and UX Design",
            idOn: "on-skill-4",
            idOff: "off-skill-4",
            idLevelSkill: "active-level-skill-4",
            level: "-40", // 60%
            idLevelNumber: "level-number-4",
            levelNumber: 60,
        },
        {
            src: "./assets/images/icons/skills/git.svg",
            alt: "Git and GitHub",
            idOn: "on-skill-5",
            idOff: "off-skill-5",
            idLevelSkill: "active-level-skill-5",
            level: "-15", // 85%
            idLevelNumber: "level-number-5",
            levelNumber: 85,
        },
        {
            src: "./assets/images/icons/skills/linux.svg",
            alt: "Linux Basics",
            idOn: "on-skill-6",
            idOff: "off-skill-6",
            idLevelSkill: "active-level-skill-6",
            level: "-20", // 80%
            idLevelNumber: "level-number-6",
            levelNumber: 80,
        },
    ];

    let  htmlContainer = "";
    const numberInitLevel = 0;

    infoItem.forEach(item => {
        htmlContainer += `
            <div class="skill-item flex flex-column align-center justify-center col-w-12">
                <div class="img-skill col-w-4">
                    <img class="col-w-12 col-h-12" src="${item.src}" alt="${item.alt}">
                </div>
                <div class="col-w-12 flex justify-around align-center">
                    <p id="${item.idLevelNumber}" class="relative">${numberInitLevel}%
                    </p>
                    <div class="level-skill col-w-5 relative">
                        <div id="${item.idLevelSkill}" class="active-level-skill col-w-12 col-h-12 absolute"></div>
                    </div>
                    <button id="${item.idOn}" class="button-anime">On</button>
                    <button id="${item.idOff}" class="button-anime none">Off</button>
                </div>
            </div>
        `;
    });

    containerId.innerHTML = htmlContainer;

    infoItem.forEach(item => {
        document.getElementById(item.idOn).addEventListener("click", () => {
            let time;
            document.getElementById(item.idOn).style.display = "none";
            document.getElementById(item.idOff).style.display = "flex";
            document.getElementById(item.idLevelSkill).style.left = `${item.level}%`;
            for(let i = 0; i <= item.levelNumber + 1; i++){
                time = setTimeout(() => {
                    document.getElementById(item.idLevelNumber).textContent = ``;
                    document.getElementById(item.idLevelNumber).textContent = `${i}%`;
                }, 3000);
            }
            return clearTimeout(time);
        });

        document.getElementById(item.idOff).addEventListener("click", () => {
            document.getElementById(item.idOn).style.display = "flex";
            document.getElementById(item.idOff).style.display = "none";
            document.getElementById(item.idLevelSkill).style.left = "-100%";

            return document.getElementById(item.idLevelNumber).textContent = `${numberInitLevel}%`;
        });
    });

    return `
        ${containerId}
        ${infoItem}
    `;
}

export {
    insertSkillItem
}