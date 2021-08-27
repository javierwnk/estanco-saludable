// Obtener los productos

const productList = (catId) => {
    let html = ``
    let categoryProducts = ""

    if(catId === null) {
        productos.forEach(element => {
            html += `<div class="productCard">
                        <a href="detalle.html?id=${element.id}">
                            <div class="cardImage">
                                <img src="${element.image}" alt="">
                            </div>

                            <div class="productCardInfo">
                                <p class="productCardName">${element.name}</p>
                                <p class="productCardPrice">$${element.price}</p>
                            </div>
                        </a>
                    </div>`
        })
    } else {
        categoryProducts = productos.filter(element => element.category === catId);

        categoryProducts.forEach(element => {
            html += `<div class="productCard">
                        <a href="detalle.html?id=${element.id}">
                            <div class="cardImage">
                                <img src="${element.image}" alt="">
                            </div>

                            <div class="productCardInfo">
                                <p class="productCardName">${element.name}</p>
                                <p class="productCardPrice">$${element.price}</p>
                            </div>
                        </a>
                    </div>`
        })
    }


    document.getElementById("catalogProductList").innerHTML = html
}

// Obtenemos los parámetros de la URL

const valores = window.location.search;

//Creamos la instancia
const urlParams = new URLSearchParams(valores);

// Verificar si existe el parámetro

let id = null

if(urlParams.has("id"))
id = urlParams.get("id")

// Category Selector management

    switch (id) {
        case "mieles":
            document.getElementById("mieles").classList.add("active")
            productList(id)
            break;
    
        case "infusiones":
            document.getElementById("tea").classList.add("active")
            productList(id)
            break;
    
        case "aceites":
            document.getElementById("aceites").classList.add("active")
            productList(id)
            break;

        default:
            document.getElementById("allProducts").classList.add("active")
            productList(id)
            break;
    }    

