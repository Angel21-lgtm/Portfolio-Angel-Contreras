"use strict";

const createFormContainer = (idContainer, submit, errorMessage) => {

    // input info
    const itemInfo = [
        {
            id: "name",
            type: "text",
            placeholder: "Nombre",
            name: "name",
            value: "",
        },
        {
            id: "email",
            type: "email",
            placeholder: "Correo",
            name: "email",
            value: "",
        },
        {
            id: "subject",
            type: "text",
            placeholder: "Asunto",
            name: "subject",
            value: "",
        },
        {
            id: "submit",
            type: "submit",
            placeholder: "Enviar",
            name: "submit",
            value: "Enviar",
        },
    ];

    // form action
    const  formChildren = idContainer.children;
    
    const values = [];

    submit.addEventListener("click", e => {
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
                    errorMessage.style.color = "var(--white)";
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
                    errorMessage.style.color = "var(--white)";
                    return errorMessage.innerHTML = "Se debe de poner un asunto mayor a 5 carácteres y menor a 50 carácteres.<br>";
                }
            }else if(formChildren[i].id === "message"){
                if(formChildren[i].value != "" && (formChildren[i].value.length > 10 && formChildren[i].value.length < 600)){
                    values.messageForm = formChildren[i].value;
                    errorMessage.innerHTML = "";
                }else{
                    formChildren[i].value = "";
                    values.messageForm = "";
                    errorMessage.style.color = "var(--white)";
                    return errorMessage.innerHTML = "Se debe de poner un mensaje mayor a 10 carácteres y menor a 600 carácteres.<br>";
                }
            }
        }

        errorMessage.style.color = "black";

        for(let i = 0; i < formChildren.length; i++){
            if(formChildren[i].id === itemInfo[3].id){
                itemInfo[3].value = itemInfo[3].value;
            }else{
                formChildren[i].value = "";
            }
        }

        const confirm = window.confirm(`¿Son correctos tus datos?\nNombre: ${values.nameForm}\nCorreo: ${values.emailForm}\nAsunto: ${values.subjectForm}\nMensaje: ${values.messageForm}`);

        if(confirm){
            errorMessage.style.color = "var(--aqua)";
            errorMessage.innerHTML = "Mensaje enviado correctamente.<br>";
            return e.defaultPrevented();
        }else{
            values.nameForm = "",
            values.emailForm = "",
            values.subjectForm = "",
            values.messageForm = "";
            errorMessage.style.color = "var(--aqua)";
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