// Manejo de los productos de la home

const slider = (categoria) => {

    if(categoria == undefined) {
        productoSlider = productos.filter(element => element.category === "aceites");
        productoSlider = productoSlider.slice(0,3)
    } else {
        productoSlider = productos.filter(element => element.category === categoria);
        productoSlider = productoSlider.slice(0,3)    
    }

    let html = ""

    productoSlider.forEach(element => {
        html += `<div class="product">
                    <a href="detalle.html?id=${element.id}">
                        <img src="${element.image}" width="186px" height="186px"/>
                    </a>
                 </div>`
    });

        html += `<div class="viewMore" style="background: #F3F3F3">
                    <span class="iconify" data-icon="mdi:arrow-right" data-inline="false"></span>
                    <p>Ver todos</p>
                 </div>`

        
        if (document.getElementById("sliderListProduct")) {
            document.getElementById("sliderListProduct").innerHTML = html
        }

}


// Se obtienen los productos una vez en Firebase y se almacenan en el sessionStorage para ahorrar consumos.

let productos = []

const getData = () => {
    fs.collection("products").orderBy("name").get()
    .then((snapshot) => {
        snapshot.docs.map(element => {
            let producto = {id: element.id, ...element.data()}
            productos = [...productos, producto]
        })
        sessionStorage.setItem("productos", JSON.stringify(productos))
        slider("aceites")
    })
}

if(sessionStorage.getItem("productos")) {
    productos = JSON.parse(sessionStorage.getItem("productos"))
    slider("aceites")
} else {
    getData()
}
