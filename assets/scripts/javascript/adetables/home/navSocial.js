const navSocial = (idContainer) => {

    // nav social
    const infoItem = [
        {
            src: "./assets/images/icons/home/social-icon/linkedin.svg",
            alt: "Linkedin",
            url: "https://www.linkedin.com/in/miguel-%C3%A1ngel-contreras-osorio-1060a6225/",
            classInfo: "social-media",
            id: "linkedin",
        },
        {
            src: "./assets/images/icons/home/social-icon/github.svg",
            alt: "GitHub",
            url: "https://github.com/Angel21-lgtm",
            classInfo: "social-media",
            id: "github",
        },
        {
            src: "./assets/images/icons/home/social-icon/facebook.svg",
            alt: "Facebook",
            url: "https://web.facebook.com/profile.php?id=100008271795935",
            classInfo: "social-media",
            id: "facebook",
        },
        {
            src: "./assets/images/icons/home/social-icon/instagram.svg",
            alt: "Instagram",
            url: "https://www.instagram.com/angeal_contreras/?hl=es-la",
            classInfo: "social-media",
            id: "instagram",
        },
        {
            src: "./assets/images/icons/home/social-icon/tiktok.svg",
            alt: "TikTok",
            url: "",
            classInfo: "social-media",
            id: "tiktok",
        },
        {
            src: "./assets/images/icons/home/social-icon/twitter.svg",
            alt: "Twitter",
            url: "",
            classInfo: "social-media",
            id: "twitter",
        },
    ];

    const firstElementIdContainer = idContainer.firstElementChild;
    let htmlFragment = "";

    infoItem.forEach(item => {
        htmlFragment += `
            <li class="${item.classInfo}" id="${item.id}">
                <img class="col-w-12 col-h-12" src="${item.src}" alt="${item.alt}">
            </li>
        `;
    });

    firstElementIdContainer.innerHTML = htmlFragment;

    infoItem.forEach(item => {
        document.getElementById(item.id).addEventListener("click", () => {
            const windowOpen = window.open(item.url);
            return windowOpen;
        });
    });

    return idContainer;
}

export {
    navSocial
}