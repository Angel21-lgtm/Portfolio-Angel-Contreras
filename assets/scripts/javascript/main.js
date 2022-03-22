"use strict";

const root = document.getElementById("root");

// library
import { dropdown } from "./library/menu.js";
import { scrollMenuFixed } from "./library/scroll.js";

// dropdown-menu
import { selectOptionDropdownMenu } from "./adetables/menu/dropdown-menu/selectOptionDropdownMenu.js";

// static-menu
import { selectOptionStaticMenu } from "./adetables/menu/static-menu/selectOptionStaticMenu.js";

// home
import { writeTitle } from "./adetables/home/writeTitle.js";
import { clickCv } from "./adetables/home/clickCv.js";
import { navSocial } from "./adetables/home/navSocial.js";

// about
import { textAboutMeSections } from "./adetables/about/textAboutMeSections.js";
import { zommPhoto } from "./adetables/about/zoomPhoto.js";

// skills
import { insertIsometric } from "./adetables/skills/insertIsometric.js";
import { insertCurrentlyStudying } from "./adetables/skills/insertCurrentlyStudying.js";
import { insertSkillItem } from "./adetables/skills/insertSkillItem.js";

// portfolio
import { insertButtonsPortfolio } from "./adetables/portfolio/insertButtonsPortfolio.js";
import { insertProjects } from "./adetables/portfolio/insertProjects.js";

// contact
import { createFormContainer } from "./adetables/contact/createFormContact.js";

const main = function(root){

    // dropdown-menu
    const styleDropdownMenu = "active-dropdown-menu",
          buttonMenu = document.querySelector(".button-menu"),
          imgMenu = document.querySelector(".image-menu"),
          dropdownMenu = document.getElementById("dropdown-menu");

    const scrollImageDropdownMenu = "scroll-image-dropdown-menu";

    const styleOneSelectOptionDropdownMenu = "select-option-dropdown-menu",
          styleTwoSelectOprtionDropdownMenu = "select-option-dropdown-menu-color";
          
    // static-menu
    const homeLogo = document.getElementById("home-logo"),
          positionLogo ="position-logo";

    const staticMenu = document.getElementById("static-menu"),
          scrollStaticMenu = "scroll-static-menu";
        
    const styleSelectOptionStaticMenu = "select-option-static-menu";

    // home
    const text = "Ángel Contreras",
          title = document.querySelector("h1"),
          activeTitle = document.getElementById("active-title"),
          buttonTitleTwo = document.querySelector(".button-title-two");

    const cv = document.getElementById("cv"),
          classCv = "cv";

    const navSocialContainer = document.getElementById("nav-social");
    
    // about
    const textAboutMeSectionsContent = document.querySelector(".text-about-me-sections"),
          leftArrow = document.getElementById("left-arrow"),
          rightArrow = document.getElementById("right-arrow");

    const photo = document.getElementById("photo"),
          zoomMyPhoto = document.querySelector(".zoom-my-photo"),
          zoomPhotoStyle = "zoom-photo-style",
          rightZoomPhotoButton = "right-zoom-photo-button",
          closePhoto = document.getElementById("close-photo");

    // skills
    const isometric = document.querySelector(".isometric"),
          currentlyStudying = document.querySelector(".currently-studying");

    const skillsPro = document.querySelector(".skills-pro"),
          activeButtonSkill = "active-button-skill";

    // portfolio
    const navSectionsProjects = document.querySelector(".nav-sections-projects");

    const websSectionProjects = document.getElementById("webs-section-projects"),
          gamesSectionProjects = document.getElementById("games-section-projects");

    const selectSection = "select-section";

    // contact
    const formContainer = document.getElementById("form-container"),
          errorMessage = document.getElementById("error-message");

    return `
        ${dropdown(styleDropdownMenu, buttonMenu, dropdownMenu)}
        ${scrollMenuFixed(imgMenu, scrollImageDropdownMenu)}
        ${selectOptionDropdownMenu(styleOneSelectOptionDropdownMenu, styleTwoSelectOprtionDropdownMenu, styleDropdownMenu, dropdownMenu)}

        ${scrollMenuFixed(homeLogo, positionLogo)}
        ${scrollMenuFixed(staticMenu, scrollStaticMenu)}
        ${selectOptionStaticMenu(staticMenu, styleSelectOptionStaticMenu)}
    
        ${writeTitle(text, title, activeTitle, buttonTitleTwo)}
        ${clickCv(cv, classCv)}
        ${navSocial(navSocialContainer)}

        ${textAboutMeSections(textAboutMeSectionsContent, leftArrow, rightArrow)}
        ${zommPhoto(photo, zoomMyPhoto, zoomPhotoStyle, rightZoomPhotoButton, closePhoto)}

        ${insertIsometric(isometric)}
        ${insertCurrentlyStudying(currentlyStudying)}
        ${insertSkillItem(skillsPro, activeButtonSkill)}

        ${insertButtonsPortfolio(navSectionsProjects)}
        ${insertProjects([websSectionProjects, gamesSectionProjects], navSectionsProjects, selectSection)}

        ${createFormContainer(formContainer, errorMessage)}
        `;
}(root);