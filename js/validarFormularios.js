const formularioData = {
    nombre: document.getElementById("nombre"),
    mail: document.getElementById("mail"),
    tel: document.getElementById("tel"),
    tipoDeSeguro: document.getElementById("tipoDeSeguro"),
    comentarios: document.getElementById("comentarios"),
    preferenciaHora: document.getElementById("preferenciaHora"),
    preferenciaContacto: document.getElementById("preferenciaContacto"),
    mensaje: document.getElementById("mensaje"),
    fecha: document.getElementById("fecha"),
    hora: document.getElementById("hora"),
    lugar: document.getElementById("lugar"),
    formaOcurrencia: document.getElementById("formaOcurrencia"),
    cedula: document.getElementById("cedula"),
    carnetManejo: document.getElementById("carnetManejo"),
    fotosAuto: document.getElementById("fotosAuto"),
    patenteTercero: document.getElementById("patenteTercero"),
    aseguradoraTercero: document.getElementById("aseguradoraTercero"),
    polizaTercero: document.getElementById("polizaTercero"),
    conductorTercero: document.getElementById("conductorTercero"),
    actividad: document.getElementById("actividad"),
    cantidadPersonasAp: document.getElementById("cantidadPersonasAp"),
    provincia: document.getElementById("provincia"),
    modelo: document.getElementById("modelo"),
    year: document.getElementById("year"),
    marca: document.getElementById("marca"),
};

const regexMarca = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexTel = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const formularioSobreVos = document.getElementById("formularioSobreVos");
const parrafo = document.getElementById("warnings");

function validarCampo(campo, regex, mensajeError) {
    if (!regex.test(campo.value)) {
        return mensajeError;
    }
    return "";
}

function validarFormulario(data) {
    let warnings = "";
    warnings += validarCampo(data.marca, regexMarca, "La marca no es válida <br>");
    warnings += validarCampo(data.tel, regexTel, "El teléfono no es válido <br>");
    warnings += validarCampo(data.mail, regexEmail, "El mail no es válido <br>");

    parrafo.innerHTML = warnings;
}

formularioSobreVos.addEventListener("submit", (e) => {
    e.preventDefault();
    validarFormulario(formularioData);
});