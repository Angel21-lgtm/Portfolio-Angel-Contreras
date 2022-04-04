"use strict";

const root = document.getElementById("root");

// library
import { dropdown } from "./library/menu.js";
import { scrollMenuFixed } from "./library/scroll.js";

// resets
import { resets } from "./resets.js";

// dropdown-menu
import { insertItemDropdownMenu } from "./adetables/menu/dropdown-menu/insertItemDropdownMenu.js";
import { selectOptionDropdownMenu } from "./adetables/menu/dropdown-menu/selectOptionDropdownMenu.js";
import { scrollSectionDropdownMenu } from "./adetables/menu/dropdown-menu/scrollSectionDropdownMenu.js";

// static-menu
import { insertItemStaticMenu } from "./adetables/menu/static-menu/insertItemStaticMenu.js";
import { selectOptionStaticMenu } from "./adetables/menu/static-menu/selectOptionStaticMenu.js";
import { selectIcon } from "./adetables/menu/static-menu/selectIcon.js";
import { scrollSectionStaticMenu } from "./adetables/menu/static-menu/scrollSectionStaticMenu.js";

// home
import { writeTitle } from "./adetables/home/writeTitle.js";
import { animationSubtitleHome } from "./adetables/home/animationSubtitleHome.js";
import { ClickButtonCv } from "./adetables/home/clickButtons.js";
import { clickRepoPortfolio } from "./adetables/home/clickRepoPortfolio.js";
import { navSocial } from "./adetables/home/navSocial.js";

// about
import { zommPhoto } from "./adetables/about/zoomPhoto.js";
import { textAboutMeSectionsInsertText } from "./adetables/about/textAboutMeSectionsInsertText.js";
import { textAboutMeSections } from "./adetables/about/textAboutMeSections.js";

// skills
import { insertIsometric } from "./adetables/skills/insertIsometric.js";
import { insertCurrentlyStudying } from "./adetables/skills/insertCurrentlyStudying.js";
import { insertSkillItem } from "./adetables/skills/insertSkillItem.js";

// portfolio
import { insertButtonsPortfolio } from "./adetables/portfolio/insertButtonsPortfolio.js";
import { insertProjects } from "./adetables/portfolio/insertProjects.js";

// contact
import { createFormContainer } from "./adetables/contact/createFormContact.js";

const main = (function(root){

    // dropdown-menu
    const styleDropdownMenu = "active-dropdown-menu",
          buttonMenu = document.querySelector(".button-menu"),
          imgMenu = document.querySelector(".image-menu"),
          dropdownMenu = document.getElementById("dropdown-menu");

    const scrollImageDropdownMenu = "scroll-image-dropdown-menu";

    const styleOneSelectOptionDropdownMenu = "select-option-dropdown-menu",
          styleTwoSelectOprtionDropdownMenu = "select-option-dropdown-menu-color";

    insertItemDropdownMenu(dropdownMenu);
    dropdown(styleDropdownMenu, buttonMenu, dropdownMenu);
    scrollMenuFixed(imgMenu, scrollImageDropdownMenu);
    selectOptionDropdownMenu(styleOneSelectOptionDropdownMenu, styleTwoSelectOprtionDropdownMenu, styleDropdownMenu, dropdownMenu);
    scrollSectionDropdownMenu(dropdownMenu, styleTwoSelectOprtionDropdownMenu, styleOneSelectOptionDropdownMenu);
          
    // static-menu
    const homeLogo = document.getElementById("home-logo"),
          positionLogo ="position-logo";

    const staticMenu = document.getElementById("static-menu"),
          scrollStaticMenu = "scroll-static-menu";
        
    const styleSelectOptionStaticMenu = "select-option-static-menu";

    insertItemStaticMenu(staticMenu);
    scrollMenuFixed(homeLogo, positionLogo);
    scrollMenuFixed(staticMenu, scrollStaticMenu);
    selectOptionStaticMenu(staticMenu, styleSelectOptionStaticMenu);
    selectIcon(staticMenu);
    scrollSectionStaticMenu(staticMenu, styleSelectOptionStaticMenu);

    // home
    const text = "Ángel Contreras",
          title = document.querySelector("h1"),
          activeTitle = document.getElementById("active-title"),
          buttonTitleTwo = document.querySelector(".button-title-two");

    const textSubtitles = document.querySelectorAll(".text-subtitle"),
          textSubtitlesAnimation = "text-subtitles-animation";

    const cv = document.getElementById("cv"),
          animeButton = "anime-button",
          buttonCv = new ClickButtonCv(cv, animeButton);

    const repPortfolio = document.querySelector(".repo-portfolio");

    const navSocialContainer = document.getElementById("nav-social");

    writeTitle(text, title, activeTitle, buttonTitleTwo);
    animationSubtitleHome(textSubtitles, textSubtitlesAnimation);
    buttonCv.clickButon();
    clickRepoPortfolio(repPortfolio, animeButton);
    navSocial(navSocialContainer);
    
    // about
    const photo = document.getElementById("photo"),
          zoomMyPhoto = document.querySelector(".zoom-my-photo"),
          zoomPhotoStyle = "zoom-photo-style",
          rightZoomPhotoButton = "right-zoom-photo-button",
          closePhoto = document.getElementById("close-photo");

    const textAboutMeSectionsContent = document.querySelector(".text-about-me-sections"),
          leftArrow = document.getElementById("left-arrow"),
          rightArrow = document.getElementById("right-arrow");

      zommPhoto(photo, zoomMyPhoto, zoomPhotoStyle, rightZoomPhotoButton, closePhoto);
      textAboutMeSectionsInsertText(textAboutMeSectionsContent);
      textAboutMeSections(textAboutMeSectionsContent, leftArrow, rightArrow);

    // skills
    const isometric = document.querySelector(".isometric"),
          currentlyStudying = document.querySelector(".currently-studying");

    const skillsPro = document.querySelector(".skills-pro"),
          activeButtonSkill = "active-button-skill";

    insertIsometric(isometric);
    insertCurrentlyStudying(currentlyStudying);
    insertSkillItem(skillsPro, activeButtonSkill);

    // portfolio
    const navSectionsProjects = document.querySelector(".nav-sections-projects");

    const websSectionProjects = document.getElementById("webs-section-projects"),
          gamesSectionProjects = document.getElementById("games-section-projects"),
          appsWebSectionProjects = document.getElementById("apps-web-section-projects");

    const selectSection = "select-section";

    insertButtonsPortfolio(navSectionsProjects);
    insertProjects([websSectionProjects, gamesSectionProjects, appsWebSectionProjects], navSectionsProjects, selectSection);

    // contact
    const formContainer = document.getElementById("form"),
          submit = document.getElementById("submit"),
          errorMessage = document.getElementById("error-message");

      createFormContainer(formContainer, submit, errorMessage);

      resets();
})(root);