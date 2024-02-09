document.addEventListener("DOMContentLoaded", function () {
    let titulo = document.querySelector('h1');
    titulo.classList.add('visible');

    document.getElementById('chatBot').onclick = toggleChat;
    document.querySelector('.boton').onclick = toggleChat;
});

function Cliente(info) {
    this.nombre = info.nombre || "";
    this.patente = info.patente || "";
    this.compania = info.compania || "";
}

function toggleChat() {
    let chatBox = document.getElementById('chatBox');
    let botonWsp = document.querySelector('.boton-wsp');

    if (chatBox.style.display === 'block') {
        chatBox.style.display = 'none';
        botonWsp.style.bottom = '1rem';
    } else {
        chatBox.style.display = 'block';
        botonWsp.style.bottom = '2rem';
    }
}

function mostrarRespuesta(respuesta) {
    let respuestaChat = document.getElementById('respuestaChat');
    respuestaChat.value = respuesta;
}

document.querySelector('.boton').onclick = function() {
    reportarSiniestroIntro('Reportar un siniestro');
};

function enviarMensaje() {
    console.log("Enviando mensaje...");

    let mensaje = document.getElementById('respuestaChat').value;

    let chatMensajes = document.getElementById('chatMensajes');

    let nuevoMensaje = document.createElement('div');
    nuevoMensaje.className = 'mensaje';

    const regex = /(\w+)\s*[, ]\s*(\w+)\s*[, ]\s*(\w+)/;

    const match = mensaje.match(regex);

    if (match) {
        if (etapaReporteSiniestro > 0) {
            reportarSiniestro();
            return;
        }

        let infoCliente = {
            nombre: capitalizeFirstLetter(match[1]),
            patente: match[2],
            compania: match[3].toLowerCase()
        };

        const cliente1 = new Cliente(infoCliente);
        console.log(cliente1);

        nuevoMensaje.textContent = `¡Bienvenido, ${cliente1.nombre}! Dime, ¿en qué puedo ayudarte hoy?`;
        let opciones = document.createElement('ul');
        opciones.innerHTML = `
            <li><button onclick="descargarDocument('Descargar documentos')">📄 Descargar documentos</button></li>
            <li><button onclick="contratarNuevoSeguro('Contratar un seguro')">🛡️ Contratar un seguro</button></li>
            <li><button onclick="reportarSiniestroIntro('Reportar un siniestro')">🚗 Reportar un siniestro</button></li>
            <li><button onclick="solicitarRemolque('${cliente1.compania}')">🚑 Solicitar servicio de remolque</button></li>
            <li><button onclick="transferencias('Transferir un vehículo')">📝 Transferir un vehículo</button></li>
            <li><button onclick="otraPregunta('Tengo otra pregunta')">🤔 Tengo otra pregunta</button></li>
        `;
        nuevoMensaje.appendChild(opciones);
    } else {
        nuevoMensaje.textContent = mensaje;
    }

    chatMensajes.appendChild(nuevoMensaje);
    document.getElementById('respuestaChat').value = "";
}

function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function reportarSiniestroIntro(respuesta) {
    let chatMensajes = document.getElementById('chatMensajes');

    switch (respuesta) {
        case 'Descargar documentos':
            agregarMensaje('A continuación te enviaremos un enlace para descargar los documentos.');
            break;
        case 'Contratar un seguro':
            agregarMensaje('¿Deseas cotizar un nuevo seguro o renovar uno existente?');
            break;
        case 'Reportar un siniestro':
            agregarMensaje('Por favor, proporciónanos la fecha del siniestro (Formato: DD/MM/AAAA)');
            etapaReporteSiniestro = 1;
            break;
        case 'Solicitar servicio de remolque':
            agregarMensaje('¿Podrías indicarnos la compañía de seguros con la que estás afiliado?');
            break;
        case 'Transferir un vehículo':
            agregarMensaje('Por favor, proporciónanos los detalles del vehículo que deseas transferir.');
            break;
        case 'Tengo otra pregunta':
            agregarMensaje('Por favor, pregunta lo que necesites y te ayudaremos.');
            break;
        default:
            agregarMensaje('Lo siento, no entendí tu solicitud. ¿En qué más puedo ayudarte?');
    }
}

let etapaReporteSiniestro = 0;

function reportarSiniestro() {
    switch (etapaReporteSiniestro) {
        case 1:
            let fechaSiniestro = document.getElementById('respuestaChat').value;
            agregarMensaje(`La fecha del siniestro es: ${fechaSiniestro}. ¡Bien! Ahora, dinos a qué hora ocurrió tu siniestro (Formato: HH:MM)`);
            etapaReporteSiniestro = 2;
            break;
        case 2:
            let horaSiniestro = document.getElementById('respuestaChat').value;
            agregarMensaje(`La hora del siniestro es: ${horaSiniestro}. ¿Podrías indicarnos el lugar donde ocurrió el siniestro?`);
            etapaReporteSiniestro = 3;
            break;
        case 3:
            let lugarSiniestro = document.getElementById('respuestaChat').value;
            agregarMensaje(`El siniestro ocurrió en: ${lugarSiniestro}. Por favor, danos un relato de cómo ocurrió el siniestro.`);
            etapaReporteSiniestro = 4;
            break;
        case 4:
            let relatoSiniestro = document.getElementById('respuestaChat').value;
            agregarMensaje(`¡Gracias por proporcionar la información sobre el siniestro! Nos pondremos en contacto contigo pronto.`);
            etapaReporteSiniestro = 0;
            break;
        default:
            agregarMensaje('Lo siento, ha ocurrido un error en el proceso de reporte de siniestro. Por favor, intenta nuevamente.');
            etapaReporteSiniestro = 0;
    }
}

function solicitarRemolque(compania) {
    let respuesta = "";

    switch (compania) {
        case 'copan':
        case 'copán':
        case 'copan seguros':
            respuesta = `🚗 Servicio de Remolque con Copan Seguros\n\nLínea Principal: 0800-333-0487\nTeléfono Alternativo: (054)-(011) 5352-9120\n\nEste servicio es exclusivo para seguros de autos. Las motos, lamentablemente, no tienen cobertura de remolque. Además, ten en cuenta que tu seguro debe tener más de 8 días desde la contratación para acceder al servicio de remolque.\n¡Estamos aquí para ayudarte! 😊🛠️ ¡No dudes en contactarnos si tienes alguna pregunta o necesitas más información!`;
            break;
        case 'parana':
        case 'paraná':
        case 'parana seguros':
        case 'paraná seguros':
            respuesta = `🚗 Asistencia Mecánica y Remolque con Paraná Seguros\n\nAsistencia por WhatsApp y Telegram: Envía un mensaje de WhatsApp al número: 011-5601-3539 y sigue las instrucciones!\n\nEste servicio es exclusivo para seguros de autos. Las motos, lamentablemente, no tienen cobertura de remolque. Además, ten en cuenta que tu seguro debe tener más de 8 días desde la contratación para acceder al servicio de remolque.\n¡Estamos aquí para ayudarte! 😊🛠️ No dudes en ponerte en contacto si tienes alguna pregunta o necesitas más información.`;
            break;
        case 'swiss medical':
        case 'smg':
        case 'swiss medical seguros':
            respuesta = `🚗 Asistencia Mecánica y Remolque con Swiss Medical\n\nLínea Principal: Comunícate al 0810-333-3764, disponible las 24hs, los 365 días del año.\nDesde países limítrofes: Contacta directamente al 0054-11-4363-4048. Indica datos del vehículo, número de póliza, lugar exacto y motivo de la asistencia.\n\nEste servicio es válido tanto para autos como motos.\n¡Estamos aquí para ayudarte! 😊🛠️ No dudes en ponerte en contacto si tienes alguna pregunta o necesitas más información.`;
            break;
        default:
            respuesta = '¡Lo siento! Yo no trabajo con esa compañía.';
    }

    agregarMensaje(respuesta);
}

function agregarMensaje(mensaje) {
    let chatMensajes = document.getElementById('chatMensajes');

    let nuevoMensaje = document.createElement('div');
    nuevoMensaje.className = 'mensaje';
    nuevoMensaje.textContent = mensaje;

    chatMensajes.appendChild(nuevoMensaje);
    document.getElementById('respuestaChat').value = "";
}