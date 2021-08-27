// Obtención de los datos del producto clickeado 

let productoAEditar = {
    "name": "",
    "description": "",
    "price": "",
    "image": "",
    "category": ""
}
let imagenActual = ""



let idProd = ""

function obtenerDatos(id) {
    idProd = id
    fs.doc("products/" + id)
        .get()
        .then(doc => {
            completarForm(doc.data()),
                imagenActual = doc.data().image,
                productoAEditar = doc.data()
        })
}



// Completar el formulario

function completarForm(data) {
    let options = ""
    document.getElementById("name2").value = data.name
    document.getElementById("description2").value = data.description
    document.getElementById("price2").value = data.price
    document.getElementById('main-img-2').innerHTML = `<img src=${data.image} alt="Imagen de portada" style="width: 100%; height: auto;">`

    document.getElementById("inputGroupSelect01-2").value = data.category

}


// Validación de los campos editados (Exceptuando imagen, se entiende que ya hay una cargada previamente)

document.getElementById("name2").onblur = validarCamposCompletos2
document.getElementById("description2").onblur = validarCamposCompletos2
document.getElementById("price2").onblur = validarCamposCompletos2

function validarCamposCompletos2() {
    if (document.getElementById("name2").value !== "" && document.getElementById("description2").value !== "" &&
        document.getElementById("price2").value !== "" &&
        document.getElementById("inputGroupSelect01-2").value !== "Seleccione") {

        document.getElementById('confirmarEdicion').classList.remove('disabled')
        return 1

    } else {
        document.getElementById('confirmarEdicion').classList.add('disabled')
        return 0
    }
}

// Obtención y actualización de datos
document.getElementById("confirmarEdicion").onclick = editarProducto;

function editarProducto() {
    let status = validarCamposCompletos2()

    if (status == 1) {
        productoAEditar.name = document.getElementById("name2").value
        productoAEditar.description = document.getElementById("description2").value
        productoAEditar.price = document.getElementById("price2").value
        productoAEditar.category = document.getElementById("inputGroupSelect01-2").value

        if (imagenUrl != "") {
            productoAEditar.image = imagenUrl
        } else {
            productoAEditar.image = imagenActual
        }

        fs.doc("products/" + idProd).update({
            "name": productoAEditar.name,
            "description": productoAEditar.description,
            "price": productoAEditar.price,
            "image": productoAEditar.image,
            "category": productoAEditar.category
        })
            .then(
                toast("edited-toast"),

                fs.collection("products") // Actualiza listado de productos
                    .get()
                    .then((snapshot) => {
                        setupProducts(snapshot.docs),
                            statusSubida = 0,
                            document.getElementById('cargarProd').classList.add('disabled'),
                            document.getElementById('main-img-2').innerHTML = ``,
                            document.getElementById('main-img').innerHTML = ``,
                            limpiarTexto()

                    })

            )
    } else {
        console.error("Campos incompletos")
    }
}