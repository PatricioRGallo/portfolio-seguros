function solicitarCotizacion() {
    const marca = document.getElementById('marca').value;
    const año = document.getElementById('año').value;
    const modelo = document.getElementById('modelo').value;

    const telefono = document.getElementById('tel').value;
    const email = document.getElementById('mail').value;
    const provincia = document.getElementById('provincia').value;

    if (!marca || !año || !modelo || !telefono || !email || !provincia) {
        alert('Por favor, completa todos los campos del formulario.');
        return;
    }

    if (isNaN(año) || año.toString().length !== 4 || año < 1900 || año > new Date().getFullYear()) {
        alert('Ingresa un año de vehículo válido.');
        return;
    }

    const telefonoPattern = /^\d{10}$/;
    if (!telefonoPattern.test(telefono)) {
        alert('Ingresa un número de teléfono válido (10 dígitos sin espacios ni guiones).');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Ingresa una dirección de correo electrónico válida.');
        return;
    }

    const solicitud = {
        vehiculo: {
            marca,
            año,
            modelo
        },
        datosPersonales: {
            telefono,
            email,
            provincia
        }
    };

    // Puedes enviar la solicitud al servidor o realizar alguna acción adicional aquí
    // (por ejemplo, almacenar la solicitud en una base de datos, enviar un correo electrónico, etc.)

    console.log(solicitud);

    alert('Solicitud de cotización enviada con éxito. Te contactaremos pronto.');
}