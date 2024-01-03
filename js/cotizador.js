const cotizarSeguro = () => {
    let marca = document.querySelector("#marca").value;
    let year = document.querySelector("#year").value;
    let modelo = document.querySelector("#modelo").value;
    let tel = document.querySelector("#tel").value;
    let mail = document.querySelector("#mail").value;
    let provincia = document.querySelector("#provincia").value;
    
    let divResumen = document.querySelector("#resumen");

    if (marca === '' ||
        year === '' ||
        modelo === '' ||
        tel === '' ||
        mail === '') {
        mostrarError("#msj-error-cotizador", "Falta seleccionar opciones");
        return;
    }
    let cotizacion = { marca, year, modelo, tel, mail, provincia };
}

const mostrarError = (elemento, mensaje) => {
    divError = document.querySelector(elemento);
    divError.innerHTML = `<p class="alerta-error">${mensaje}</p>`;
    setTimeout(() => { divError.innerHTML = ``; }, 2000);
}