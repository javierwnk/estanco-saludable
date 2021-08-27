
// Form de contacto

const ValidarFormContacto = () => {
    if(document.getElementById("name").value !== "" && document.getElementById("email2").value !== "" &&
    document.getElementById("phone").value !== "" && document.getElementById("message").value !== "") {
        document.getElementById("sendContact").disabled = false
    } else {
        document.getElementById("sendContact").disabled = true
    }
}

document.getElementById("name").addEventListener("input", ValidarFormContacto)
document.getElementById("email2").addEventListener("input", ValidarFormContacto)
document.getElementById("phone").addEventListener("input", ValidarFormContacto)
document.getElementById("message").addEventListener("input", ValidarFormContacto)
