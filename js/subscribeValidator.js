// Validación del form de suscripción

const validarSuscribeForm = () => {

    if(document.getElementById("email").value == "") {
        document.getElementById("handleSuscribe").disabled = true
    } else {
        document.getElementById("handleSuscribe").disabled = false
    }
}

document.getElementById("email").addEventListener("input", validarSuscribeForm)