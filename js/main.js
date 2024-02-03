document.addEventListener("DOMContentLoaded", function () {
    let titulo = document.querySelector('h1');
    titulo.classList.add('visible');

    document.getElementById('chatBot').onclick = toggleChat;
    document.querySelector('.boton').onclick = toggleChat;
});

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

function enviarMensaje() {
    // Obtén el valor del campo de entrada
    let mensaje = document.getElementById('respuestaChat').value;

    // Obtén el elemento donde se mostrarán los mensajes del chat
    let chatMensajes = document.getElementById('chatMensajes');

    // Crea un nuevo elemento de mensaje y agrega el contenido
    let nuevoMensaje = document.createElement('div');
    nuevoMensaje.className = 'mensaje';
    nuevoMensaje.textContent = mensaje;

    // Agrega el nuevo mensaje al chatMensajes
    chatMensajes.appendChild(nuevoMensaje);

    // Limpiar el campo de entrada después de enviar el mensaje
    document.getElementById('respuestaChat').value = "";
}

function ocultarCaja() {
    document.getElementById('chatBox').style.display = 'none';
    let botonWsp = document.querySelector('.boton-wsp');
    botonWsp.style.bottom = '1rem';
}