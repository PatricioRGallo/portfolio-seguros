// Validar formulario de accidentes personales
function validarAccidentesPersonales() {
    var actividad = document.getElementById('actividad').value;
    var cantidadPersonas = document.getElementById('cantidad-personas-ap').value;
    var telefono = document.getElementById('tel').value;
    var email = document.getElementById('mail').value;
    var provincia = document.getElementById('provincia').value;

    if (actividad === '' || cantidadPersonas === '' || telefono === '' || provincia === '') {
        alert('Por favor, completa todos los campos obligatorios.');
        return false;
    }

    // Puedes realizar más validaciones según tus necesidades

    return true;
}

// Validar formulario de seguro automotor
function validarSeguroAutomotor() {
    var marca = document.getElementById('marca').value;
    var año = document.getElementById('año').value;
    var modelo = document.getElementById('modelo').value;
    var telefono = document.getElementById('tel').value;
    var email = document.getElementById('mail').value;
    var provincia = document.getElementById('provincia').value;

    if (marca === '' || año === '' || modelo === '' || telefono === '' || provincia === '') {
        alert('Por favor, completa todos los campos obligatorios.');
        return false;
    }

    // Puedes realizar más validaciones según tus necesidades

    return true;
}

// Validar formulario de seguro de vida y capitalización
function validarSeguroVidaCapitalizacion() {
    var actividad = document.getElementById('actividad').value;
    var cantidadPersonas = document.getElementById('cantidad-personas-ap').value;
    var telefono = document.getElementById('tel').value;
    var email = document.getElementById('mail').value;
    var provincia = document.getElementById('provincia').value;

    if (actividad === '' || cantidadPersonas === '' || telefono === '' || provincia === '') {
        alert('Por favor, completa todos los campos obligatorios.');
        return false;
    }

    // Puedes realizar más validaciones según tus necesidades

    return true;
}

// Asignar funciones de validación a los formularios
document.querySelector('#formularioAccidentesPersonales').addEventListener('submit', function (e) {
    if (!validarAccidentesPersonales()) {
        e.preventDefault();
    }
});

document.querySelector('#datosVehiculoForm').addEventListener('submit', function (e) {
    if (!validarSeguroAutomotor()) {
        e.preventDefault();
    }
});

document.querySelector('#formularioVidaCapitalizacion').addEventListener('submit', function (e) {
    if (!validarSeguroVidaCapitalizacion()) {
        e.preventDefault();
    }
});