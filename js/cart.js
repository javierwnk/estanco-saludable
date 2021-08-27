let carrito = []

const createCart = () => {
    carrito = JSON.parse(sessionStorage.getItem("cart"))

    if(carrito === null || carrito.length === 0) {
        document.getElementById("previewProductList").innerHTML = `<p class="noneProduct">El carrito se encuentra vacío</p>
        <button class="btnPrimary" id="close" class="noneProduct">Seguir navegando</button>`
        document.getElementById("rest").style.display = "none";

    } else {

        let html = ""
        let subtotal = 0

        carrito.forEach((element, index) => {
            html += `
            <div class="previewCard">
                <img class="productImg" src="${element.image}" alt="">
                <p class="productName">${element.name}</p>
                <p class="productCant">Cantidad: ${element.cantidad}</p>
                <p class="productPrice">$${element.price}</p>
                <span class="iconify deleteIcon" data-icon="mdi:trash-can-outline" data-inline="false" onclick="deleteItem(${index})"></span>
            </div>`

            subtotal += Number(element.cantidad) * Number(element.price)
        });

        let html2 = `<div class="subtotal">
                    <p>Subtotal</p>
                    <p>$${subtotal}</p>
                </div>

        <a href="cart.html" class="btnPrimary" id="buy">Continuar</a>`

        document.getElementById("previewProductList").innerHTML = html
        document.getElementById("rest").innerHTML = html2
        document.getElementById("rest").style.display = "block";

    }
}

document.getElementById("cartIcon").addEventListener("click", () => {
    document.getElementById("cartPreview").style.width = "100%";
   createCart()

    document.getElementById("closeBtn").addEventListener("click", () => {
        document.getElementById("cartPreview").style.width = "0%";
    })

    document.getElementById("close").addEventListener("click", () => {
        document.getElementById("cartPreview").style.width = "0%";
    })

})


// Eliminar producto
const deleteItem = (index) => {
    carrito.splice(index, 1)
    console.log(carrito)
    if (carrito.length === 0) {
        sessionStorage.removeItem("cart")
    } else {
        sessionStorage.setItem("cart", JSON.stringify(carrito))
    }

    createCart()

}