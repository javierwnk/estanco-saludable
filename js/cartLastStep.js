let cart = []
let total = 0
const createCart = () => {


    carrito = JSON.parse(sessionStorage.getItem("cart"))
    if(carrito === null || carrito.length === 0) {
        // false
    } else {
        let html = ""

        carrito.forEach((element) => {
            html += `<div class="resumenCard">
                        <div>
                            <img src="${element.image}" alt="">
                            <p class="productCant">${element.cantidad}</p>
                        </div>
                        <p class="productName">${element.name}</p>
                        <p class="productPrice">$${element.price}</p>
                    </div>`

                    total += Number(element.cantidad) * Number(element.price)
        });

        html += `<div class="divider"></div>
                <div class="totals">
                    <p class="total">Total</p>
                    <p class="monto">$${total}</p>
                    <p class="money">Pesos Argentinos</p>
                </div>

                <div class="divider"></div>`

                document.getElementById("resumenPedido").innerHTML = html
    }
}

createCart()

// Form del carrito

const validarForm = () => {
    if(document.getElementById("name").value != "" &&
    document.getElementById("email").value != "" &&
    document.getElementById("dni").value != "" &&
    document.getElementById("phone").value != "" &&
    document.getElementById("city").value != "" &&
    document.getElementById("address").value != "") {

        document.getElementById("send").disabled = false
    } else {
        document.getElementById("send").disabled = true

    }
}

document.getElementById("name").addEventListener("input", validarForm)
document.getElementById("email").addEventListener("input", validarForm)
document.getElementById("dni").addEventListener("input", validarForm)
document.getElementById("phone").addEventListener("input", validarForm)
document.getElementById("city").addEventListener("input", validarForm)
document.getElementById("address").addEventListener("input", validarForm)

document.getElementById("send").addEventListener("click", (evt) => {
    evt.preventDefault();
    sentOrder()
    window.open("success.html", "_self")
    sessionStorage.removeItem("cart")
})

const sentOrder = () => {
    // Se completa mensaje de whatsapp

    mensaje = `¡Hola Estanco Saludable!%0ASoy ${document.getElementById("name").value} y me gustaría hacerte este pedido:%0A%0A`

    carrito.forEach(producto => {
        mensaje += `Producto: *${producto.name}* %0APrecio unitario: $${producto.price}%0ACantidad: ${producto.cantidad}%0ASubtotal: $${producto.cantidad * producto.price}%0A%0A`
    });

    mensaje += `%0A*Total de la compra: $${total}*%0A%0AMis datos son:%0ADNI: ${document.getElementById("dni").value}%0ATeléfono:  ${document.getElementById("phone").value}%0ADirección: ${document.getElementById("address").value}, ${document.getElementById("city").value}%0AEmail: ${document.getElementById("email").value}%0A¡Muchas gracias!`

    window.open(`https://api.whatsapp.com/send?phone=541111111111&text=${mensaje}`)
    
}