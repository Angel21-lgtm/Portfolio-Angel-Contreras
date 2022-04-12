"use strict";

let values = {};

const submitData = (formContainer, errorMessage) => {

    // children for fromContainer
    const nameValue = document.getElementById("name"), emailValue = document.getElementById("email"),
        subjectValue = document.getElementById("subject"), messageValue = document.getElementById("message"),
        submit = document.getElementById("submit");
    // children for fromContainer


    const nameUser = (id) => {
        return new Promise((resolve, reject) => {
            if(id.value.length < 10){
                id.value = "";
                values.name = "";
                reject("¡El nombre debe de contener mas de 10 carácteres!");
            }else resolve(id.value);
        });
    }

    const emailUser = (id) => {
        return new Promise((resolve, reject) => {
            const str = id.value;
            if(!(str.includes(".") && str.includes("@"))){
                id.value = "";
                values.email = "";
                reject(`¡El correo debe de contener "." y "@"!`);
            }else resolve(id.value);
        });
    }

    const subjectUser = (id) => {
        return new Promise((resolve, reject) => {
            if(!(id.value.length > 5 && id.value.length < 60)){
                id.value = "";
                values.subject = "";
                reject("¡El asunto debe de contener mas de 5 carácteres y menos de 60!");
            }else resolve(id.value);
        });
    }

    const messageUser = (id) => {
        return new Promise((resolve, reject) => {
            if(!(id.value.length > 10 && id.value.length < 600)){
                id.value = "";
                values.message = "";
                reject("¡El mensaje debe de contener mas de 10 carácteres y menos de 600!");
            }else resolve(id.value);
        });
    }

    const createDiv = (id) => {
        const div = document.createElement("DIV");
        div.classList.add("flex", "justify-center", "align-center", "fixed");
        div.id = "confirm-message";
        div.innerHTML = `
            <div class="loading relative">
                <div class="ball-loading-1 ball absolute"></div>
                <div class="ball-loading-2 ball absolute"></div>
                <div class="ball-loading-3 ball absolute"></div>
                <div class="ball-loading-4 ball absolute"></div>
                <div class="ball-loading-5 ball absolute"></div>
                <div class="ball-loading-6 ball absolute"></div>
                <div class="ball-loading-7 ball absolute"></div>
                <div class="ball-loading-8 ball absolute"></div>
            </div>
            <p class="loading-text absolute">Loading</p>
        `;
        id.appendChild(div);

        return setTimeout(() => {
            id.removeChild(div);
        }, 10000);
    }

    const buttonConfirm = (id) => {
        return new Promise((resolve, reject) => {
            const questionConfirm = confirm(`¿Tus datos son correctos?
                \nNombre: ${values.name}
                \nCorreo: ${values.email}
                \nAsunto: ${values.subject}
                \nMensaje: ${values.message}`);
            if(questionConfirm){
                createDiv(id);
                setTimeout(() => {
                    resolve("¡Mensaje enviado correctamente!");
                }, 10000);
            }else reject("¡Vuelve a escribir el mensaje correctamente!");
        });
    }

    submit.addEventListener("click", e => {
        e.preventDefault();
        nameUser(nameValue).then(name => {
            values.name = name;
            return emailUser(emailValue);
        }).then(email => {
            values.email = email;
            return subjectUser(subjectValue);
        }).then(subject => {
            values.subject = subject;
            return messageUser(messageValue);
        }).then(message => {
            values.message = message;
            return buttonConfirm(formContainer);
        }).then(confirm => {
            nameValue.value = "", emailValue.value = "", subjectValue.value = "", messageValue.value = "";
            errorMessage.innerHTML = `<b style="color: var(--aqua);">${confirm}</b>`;
        }).catch(err => errorMessage.innerHTML = `<b style="color: var(--aqua);">${err}</b>`);
    });
}

export{
    submitData, values
}