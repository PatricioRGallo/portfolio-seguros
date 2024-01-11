const nombre = document.getElementById("nombre");
const mail = document.getElementById("mail");
const tel = document.getElementById("tel");
const tipoDeSeguro = document.getElementById("tipoDeSeguro");
const comentarios = document.getElementById("comentarios");
const preferenciaHora = document.getElementById("preferenciaHora");
const preferenciaContacto = document.getElementById("preferenciaContacto");
const mensaje = document.getElementById("mensaje");
const fecha = document.getElementById("fecha");
const hora = document.getElementById("hora");
const lugar = document.getElementById("lugar");
const formaOcurrencia = document.getElementById("formaOcurrencia");
const cedula = document.getElementById("cedula");
const carnetManejo = document.getElementById("carnetManejo");
const fotosAuto = document.getElementById("fotosAuto");
const patenteTercero = document.getElementById("patenteTercero");
const aseguradoraTercero = document.getElementById("aseguradoraTercero");
const polizaTercero = document.getElementById("polizaTercero");
const conductorTercero = document.getElementById("conductorTercero");
const actividad = document.getElementById("actividad");
const cantidadPersonasAp = document.getElementById("cantidadPersonasAp");
const provincia = document.getElementById("provincia");
const modelo = document.getElementById("modelo");
const year = document.getElementById("year");
const marca = document.getElementById("marca");

const formularioVidaCapitalizacion = document.getElementById("formularioVidaCapitalizacion");
const formularioSobreVos = document.getElementById("formularioSobreVos");
const formularioSeguroAutomotor = document.getElementById("formularioSeguroAutomotor");
const formularioSiniestros = document.getElementById("formularioSiniestros");
const formularioContacto = document.getElementById("formularioContacto");
const formularioReunion = document.getElementById("formularioReunion");

const parrafo = document.getElementById("warnings")

formularioSobreVos.addEventListener("submit", e => {
    e.preventDefault();
    let warnings = ""
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let regexTel = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    let entrar = false
    if (!regexTel.test(tel.value)) {
        warnings += `El teléfono no es válido <br>`
        entrar = true
    }
    console.log(regexEmail.test(mail.value))
    if (!regexEmail.test(mail.value)) {
        warnings += `El mail no es válido <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }
})