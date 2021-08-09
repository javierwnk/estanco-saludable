let cart = []

const createCart = () => {


    carrito = JSON.parse(localStorage.getItem("cart"))
    if(carrito === null || carrito.length === 0) {
        // false
    } else {
        let html = ""
        let total = ""

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