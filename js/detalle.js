// Obtenemos los parámetros de la URL

const valores = window.location.search;

//Creamos la instancia
const urlParams = new URLSearchParams(valores);

// Verificar si existe el parámetro

let idProd = null

if (urlParams.has("id"))
    idProd = urlParams.get("id")

let productoDetalle = ""

const getProducto = () => {
    fs.doc("products/" + idProd).get()
        .then(doc => {
            productoDetalle = doc.data()
            window.document.title = doc.data().name       
            buildProducto()
        })
}

const buildProducto = () => {
    // Breadcrumb
    document.getElementById("breadcrumbDetalle").innerHTML = `
    <ul>
        <li><a href="productos.html">Productos</a> <span class="iconify" data-icon="mdi:chevron-right" data-inline="false"></span></li>
        <li><a href="productos.html?id=${productoDetalle.category}">${productoDetalle.category}</a> <span class="iconify" data-icon="mdi:chevron-right" data-inline="false"></span></li>
        <li>${productoDetalle.name}</li>
    </ul>    
    `

    // Detalle del producto

    document.getElementById("productDetail").innerHTML = `
            <div class="imageProductDetail">
            <img src="${productoDetalle.image}" alt="">
        </div>
        <div class="infoProductDetail">
            <h2>${productoDetalle.name}</h2>
            <h3>$${productoDetalle.price}</h3>

            <div class="qty">
                <p>Cantidad:</p>

                    <button id="subtract">-</button>    
                <input type="number" name="quantityInput" id="quantityInput" value="1">
                    <button id="add">+</button>
            </div>

            <button class="btnPrimary" id="addToCart" onclick="addToCart()">AÑADIR AL CARRITO</button>

            <div class="productDescription">
                <p>${productoDetalle.description}</p>
            </div>

        </div>

    `
    // Funcionalidad del input de Cantidad

    let btnAdd = document.querySelector("#add")
    let btnSubstract = document.querySelector("#subtract")
    let quantityInput = document.querySelector("#quantityInput")

    btnAdd.addEventListener('click', () => {
        quantityInput.value = parseInt(quantityInput.value) + 1;
    })

    btnSubstract.addEventListener('click', () => {
        if (quantityInput.value > 1)
            quantityInput.value = parseInt(quantityInput.value) - 1;
    })

    // Productos Recomendados

    let releatedProducts = productos.filter(element => element.category == productoDetalle.category && element.name !== productoDetalle.name)
    releatedProducts = releatedProducts.splice(0, 3)

    let html = ""

    releatedProducts.forEach(element => {
        html += `
        <div class="productCard">
        <a href="detalle.html?id=${element.id}">
            <div class="cardImage">
                <img src="${element.image}" alt="">
            </div>

            <div class="productCardInfo">
                <p class="productCardName">${element.name}</p>
                <p class="productCardPrice">$${element.price}</p>
            </div>
        </a>
    </div>
`
    });

    document.getElementById("releatedProductList").innerHTML = html

}

getProducto()

// Add to Cart 

const addToCart = () => {
    let cargaProducto = { cantidad: document.getElementById("quantityInput").value, id: idProd, ...productoDetalle }


    let carrito = JSON.parse(sessionStorage.getItem("cart"))

    if (carrito === null) {
        sessionStorage.setItem("cart", JSON.stringify([cargaProducto]))
    } else {
            carrito.push(cargaProducto)
            sessionStorage.setItem("cart", JSON.stringify(carrito))
    }

    let toastHTMLElement = document.getElementById("added-toast");
    var toastElement = new bootstrap.Toast(toastHTMLElement, { animation: true, delay: 2000 })
    window.scrollTo(0, 0);
    toastElement.show()

}
