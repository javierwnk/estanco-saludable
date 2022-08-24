const sendContact = () => {
    let nombre = document.getElementById("name").value
    let email = document.getElementById("email2").value
    let tel = document.getElementById("phone").value
    let mensaje = document.getElementById("message").value

    let texto = `¡Hola Estanco Saludable!%0AMi nombre es ${nombre}. Te hago la siguiente consulta:%0A${mensaje}.%0A%0A Mi email es: ${email}. Mi teléfono es: ${tel}.%0A%0AGracias`

    window.open(`https://api.whatsapp.com/send?phone=541111111&text=${texto}`)
}

document.getElementById("sendContact").addEventListener("click", (evt) => {
    evt.preventDefault();
    sendContact()
    window.open("contacto-exitoso.html", "_self")
})