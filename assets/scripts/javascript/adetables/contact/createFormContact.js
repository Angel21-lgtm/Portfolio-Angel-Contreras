"use strict";

const createFormContainer = (idContainer, errorMessage) => {
    class form{
        constructor(id, classList, method, autocomplete, action){
            this.id = id;
            this.classList = classList;
            this.method = method;
            this.autocomplete = autocomplete;
            this.action = action;
        }
        static createForm(id, classListString, method, autocomplete, action){
            this.id = id;
            this.classList = classListString;
            this.method = method;
            this.autocomplete = autocomplete;
            this.action = action;

            const form = document.createElement("FORM");

            form.id = id,
            form.method = method,
            form.autocomplete = autocomplete,
            form.action = action;

            classListString.forEach(item => {
                form.classList.add(item);
            });

            return form;
        }
    }

    // create form
    const formContainer = form.createForm("", ["col-w-12", "flex", "flex-wrap", "justify-between", "align-center"], "get", "off", "");

    // input info
    const itemInfo = [
        {
            id: "name",
            classList: "name-form col-w-12",
            type: "text",
            placeholder: "Nombre",
            name: "name",
            value: "",
        },
        {
            id: "email",
            classList: "email-form col-w-12",
            type: "email",
            placeholder: "Correo",
            name: "email",
            value: "",
        },
        {
            id: "subject",
            classList: "col-w-12",
            type: "text",
            placeholder: "Asunto",
            name: "subject",
            value: "",
        },
        {
            id: "submit",
            classList: "submit-form",
            type: "submit",
            placeholder: "Enviar",
            name: "submit",
            value: "Enviar",
        },
    ];

    let htmlFragment = "";

    itemInfo.forEach((item, itemPosition) => {
        htmlFragment += `
        <input id="${item.id}" class="${item.classList}" type="${item.type}" placeholder="${item.placeholder}" name="${item.name}" value="${item.value}">
        `;
        if(itemPosition === 2){
            htmlFragment += `
                <p id="message" class="message-form col-w-12" contenteditable="true" id="">Tu Mensaje</p>
            `;
        }
    });

    formContainer.innerHTML = htmlFragment;
    idContainer.appendChild(formContainer);

    // form action
    const  formChildren = formContainer.children;
    
    const values = [];

    const submit = document.getElementById("submit");

    submit.addEventListener("click", e => {
        e.preventDefault();
        errorMessage.innerHTML = "";

        for(let i = 0; i < formChildren.length; i++){
            if(formChildren[i].id === itemInfo[0].id){
                if(formChildren[i].value.length > 10){
                    errorMessage.innerHTML = "";
                    values.nameForm = formChildren[i].value;
                }else{
                    values.nameForm = "",
                    formChildren[i].value = "";
                    errorMessage.style.color = "rgb(255, 247, 247)";
                    return errorMessage.innerHTML = "El nombre debe contener al menos 10 carácteres.<br>";
                }
            }else if(formChildren[i].id === itemInfo[1].id){
                if(formChildren[i].value.includes("@") && formChildren[i].value.includes(".")){
                    errorMessage.innerHTML = "";
                    values.emailForm = formChildren[i].value;
                }else{
                    formChildren[i].value = "";
                    errorMessage.style.color = "rgb(255, 247, 247)";
                    return errorMessage.innerHTML = "El correo debe de contener \"@\" y \".\" .<br>";
                }
            }else if(formChildren[i].id === itemInfo[2].id){
                if(formChildren[i].value != "" && (formChildren[i].value.length > 5 && formChildren[i].value.length < 50)){
                    values.subjectForm = formChildren[i].value;
                    errorMessage.innerHTML = "";
                }
                else{
                    formChildren[i].value = "";
                    values.subjectForm = "";
                    errorMessage.style.color = "rgb(255, 247, 247)";
                    return errorMessage.innerHTML = "Se debe de poner un asunto mayor a 5 carácteres y menor a 50 carácteres.<br>";
                }
            }else if(formChildren[i].id === "message"){
                if(formChildren[i].textContent != "" && (formChildren[i].textContent.length > 10 && formChildren[i].textContent.length < 600)){
                    values.messageForm = formChildren[i].textContent;
                    errorMessage.innerHTML = "";
                }else{
                    formChildren[i].textContent = "";
                    values.messageForm = "";
                    errorMessage.style.color = "rgb(255, 247, 247)";
                    return errorMessage.innerHTML = "Se debe de poner un mensaje mayor a 10 carácteres y menor a 600 carácteres.<br>";
                }
            }
        }

        errorMessage.style.color = "black";

        for(let i = 0; i < formChildren.length; i++){
            if(formChildren[i].id === "message"){
                formChildren[i].textContent = "Tu Mensaje";
            }else if(formChildren[i].id === itemInfo[3].id){
                itemInfo[3].value = itemInfo[3].value;
            }else{
                formChildren[i].value = "";
            }
        }

        const confirm = window.confirm(`¿Son correctos tus datos? Nombre: ${values.nameForm}, Correo: ${values.emailForm}, Asunto: ${values.subjectForm}, Mensaje: ${values.messageForm}`);

        if(confirm){
            return `
                ${errorMessage.innerHTML = "Mensaje enviado correctamente.<br>"}
            `;
        }else{
            values.nameForm = "",
            values.emailForm = "",
            values.subjectForm = "",
            values.messageForm = "";
            return `
                ${errorMessage.innerHTML = "Vuelve a escribir el mensaje con los datos correctos.<br>"}
            `;
        }
    });

    return idContainer;
}

export{
    createFormContainer
}