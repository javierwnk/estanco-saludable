// Obtenemos los parámetros de la URL

const valores = window.location.search;

//Creamos la instancia
const urlParams = new URLSearchParams(valores);

// Verificar si existe el parámetro

let idProd = null

if(urlParams.has("id"))
idProd = urlParams.get("id")

let productoDetalle = ""

const getProducto = () => {
    fs.doc("products/"+ idProd).get()
    .then(doc => {
        productoDetalle = doc.data()
        console.log(productoDetalle)
        buildProducto()
    })
}

const buildProducto = () => {
    // Breadcrumb
    document.getElementById("breadcrumbDetalle").innerHTML = `
    <ul>
        <li><a href="detalle.html">Productos</a> <span class="iconify" data-icon="mdi:chevron-right" data-inline="false"></span></li>
        <li><a href="detalle.html?id=${productoDetalle.category}">${productoDetalle.category}</a> <span class="iconify" data-icon="mdi:chevron-right" data-inline="false"></span></li>
        <li>${productoDetalle.name}</li>
    </ul>    
    `

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

            <button class="btnPrimary">AÑADIR AL CARRITO</button>

            <div class="productDescription">
                <p>${productoDetalle.description}</p>
            </div>

        </div>

    `
// FICHA DE PRODUCTO - INPUT DE CANTIDAD

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


}

getProducto()



