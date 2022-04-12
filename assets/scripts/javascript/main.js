"use strict";

const root = document.getElementById("root");

// back

// resets
import { resets } from "./resets.js";
import { styleFixedScroll } from "./resets.js";

// dropdown-menu
import { insertItemDropdownMenu } from "./adetables/menu/dropdown-menu/insertItemDropdownMenu.js";
import { activeDropdownMenu } from "./adetables/menu/dropdown-menu/activeDropdownMenu.js";
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
import { submitData } from "./adetables/contact/submitData.js";

const main = (function(root){

    // dropdown-menu
    const styleDropdownMenu = "active-dropdown-menu",
      buttonMenu = document.querySelector(".button-menu"),
      imgMenu = document.querySelector(".image-menu"),
      dropdownMenu = document.getElementById("dropdown-menu");

    const scrollImageDropdownMenu = "scroll-image-dropdown-menu";

    const selecOptionDropdowMenu = "select-option-dropdown-menu",
      selectOptionDropdownMenuColor = "select-option-dropdown-menu-color";

    styleFixedScroll(imgMenu, scrollImageDropdownMenu); // resets
    insertItemDropdownMenu(dropdownMenu);
    activeDropdownMenu(styleDropdownMenu, buttonMenu, dropdownMenu); // Active dropdown menu whith click in the button
    selectOptionDropdownMenu(selecOptionDropdowMenu, selectOptionDropdownMenuColor, styleDropdownMenu, dropdownMenu);
    scrollSectionDropdownMenu(dropdownMenu, selectOptionDropdownMenuColor, selecOptionDropdowMenu);
          
    // static-menu
    const homeLogo = document.getElementById("home-logo"),
          positionLogo ="position-logo";

    const staticMenu = document.getElementById("static-menu"),
          scrollStaticMenu = "scroll-static-menu";
        
    const styleSelectOptionStaticMenu = "select-option-static-menu";

    insertItemStaticMenu(staticMenu);
    styleFixedScroll(homeLogo, positionLogo);
    styleFixedScroll(staticMenu, scrollStaticMenu);
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
    const form = document.getElementById("form"),
      errorMessage = document.getElementById("error-message");

    submitData(form, errorMessage);

    resets();
})(root);