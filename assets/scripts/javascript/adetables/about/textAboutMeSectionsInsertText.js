"use strict";

const textAboutMeSectionsInsertText = (idContent) => {
    const textContent = [
        {
            title: `1.- ¡Hola!`,
            text: `Mi nombre completo es Miguel Ángel Contreras Osorio.<br>
                ¡Bienvenidos a mi sitio web personal tipo portafolio!
                En el encontrarán todos mis proyectos, webs y videojuegos (web, de escritorio y móviles).<br>
                Tambien pueden visitar mi perfil de GitHub donde encontrarán todo el código fuente del proyecto, 
                aparte de visitar mi perfil de Codepen, donde me dedico a hacer "Arte en CSS3 y JavaScript" (animaciones
                y algunos pequeños programas de interactividad).<br>
                También no olvides seguirme en Instagram, Facebook, Twitter y Tik-Tok, donde estaré subiendo contenido 
                con respecto a la programación, informática y la tecnología actual. Tampoco olvides dejar tu 
                like a mi contenido.`,
        },
        {
            title: `2.- ¡Mis proyectos!`,
            text: `Los proyectos que tengo realizados hasta al momento son muy pocos,
                ya que apenas soy un estudiante que trata de llegar al nivel "Senior" en
                la programación. <br>
                Este portafolio web es mi primer proyecto real echo en código nativo y sin 
                librerías, frameworks y ninguna otra tecnología.
                Los lenguajes empleados en este sitio web son: HTML5, CSS3 y JavaScript ES6 al más reciente.<br>
                Los próximos proyectos que tengo pensados realizar son: un blog para este sitio web (mi portafolio web), 
                un sitio web de videojuegos online echo con Ract.js, Node.js, Bootstrap y SQL para poder registrarse en la web y 
                poder guardar tu progreso en el videojuego que se esté jugando o los videojuegos que se estén jugando.<br>
                Los proyectos que se encontrarán en la sección "Portafolio" son muy pocos y muy sencillos.`,
        },
        {
            title: `3.- ¡Soy un Desarrollador Web!`,
            text: `Antes de llegar al hámbito de la programación primero me estaba dedicando
                al hámbito de la seguridad informática y hacking ético en Kali Linux, aparte de 
                manejar distintas distibuciones de Linux, como; Ubuntu, Debian, etc... Cuando quería seguir avanzando 
                empecé con mi primer lenguaje de programación, el cual es C#, con este lenguaje quería dedicarme
                al desarrollo de videojuegos y aplicaciones de escritorio, aparte de hacer un buen Back-End 
                en este lenguaje y cuando me estaba adentrando en las auditorías de páginas web me encontré con Javascript.<br>
                Primero empecé por HTML5, luego CSS3 y actualmente me encuentro tratando de dominar JavaScript y tratar de saberlo 
                al menos casi al 100%. ¡Me enamoré de este lenguaje de programación!`,
        },
        {
            title: `4.- ¡Desarrollo de Videojuegos!`,
            text: `Estoy tratando de enfocarme también al desarrollo de videojuegos, 
                principalmente empezar por los videojuegos web, luego los juegos de escritorio y de consola videojuegos,
                y por último los videojuegos móviles. Para poder dominar esta rama del desarrollo de software 
                estoy tratando de estudiar bien lo que es C#, Python y Unity (cuando acabe de estudar a fondo JavaScript, Node y React) 
                y crear videojuegos de muy buena calidad, con gráficos excepcionales y una jugabilidad excelente.<br>
                También estoy estudiando lo que son las redes de computadoras para poder ser 
                programador Full-Stack :b .`,
        },
        {
            title: `5.- ¡Mi trabajo!`,
            text: `Mi trabajo actualmente se basa en el desarrollo web del lado del cliente
                (Front-End) con algo de experiencia en el diseño UI and UX que actualmente me encuentro estudiando, 
                también me encuentro manejando lo que es Git y GitHub, 
                en un futuro dominaré el Back-End para convertirme en Desarrollador Web Full-Stack,
                dominando las tecnologías que son: JS; React.js, Node.js, Express.js, CSS3; Bootstrap, HTML5, SQL; PostgreSQL, MongoDB, 
                Python3 (del lado del servidor) y C# (del lado del servidor).<br>
                Las ramas que también estoy tratando de dominar son: el desarrollo de videojuegos (web, de escritorio, de consola de videojuegos y móviles), 
                desarrollo de aplicaciones (web, de escritorio y móviles), consultor de bases de datos, experto en redes de 
                computadoras, desarrollo de IA (Inteligencia Artificial) en Python y experto en sistemas Linux.`,
        },
        {
            title: `6.- ¡Lenguajes Dominantes!`,
            text: `Próximamente...`,
        },
    ];

    let htmlFragment = "";

    textContent.forEach(item => {
        htmlFragment += `<p>
            <b class="inline-block">${item.title}</b><br>
                ${item.text}
            </p>`;
    });

    idContent.innerHTML = htmlFragment;

    return idContent;

}

export {
    textAboutMeSectionsInsertText
}