"use strict";

const zommPhoto = (idPhotoContent, photoIdZoom, styleOne, styleTwo, closeStyleButton) => {
    idPhotoContent.addEventListener("click", () => {
        photoIdZoom.classList.toggle(styleOne);
        closeStyleButton.classList.toggle(styleTwo);
    });
}

export { 
    zommPhoto
 }