// Obtención de los datos del producto clickeado 

let productoAEditar = {
    "name": "",
    "description": "",
    "price": "",
    "image": "",
    "image2": "",
    "image3": "",
    "image4": "",
    "category": "",
}
let imagenActual = ""
let imagen2Actual = ""
let imagen3Actual = ""
let imagen4Actual = ""



let idProd = ""

function obtenerDatos(id) {
    idProd = id
    fs.doc("products/" + id)
        .get()
        .then(doc => {
            completarForm(doc.data()),
                imagenActual = doc.data().image,
                imagen2Actual = doc.data().image2,
                imagen3Actual = doc.data().image3,
                imagen4Actual = doc.data().image4,
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

    if (data.image2 != "") {
        document.getElementById('imagen-2-2').innerHTML = `<img src=${data.image2} alt="Imagen de portada" style="width: 100%; height: auto;">`
    } else {
        document.getElementById('imagen-2-2').innerHTML = ``
    }

    if (data.image3 != "") {
        document.getElementById('imagen-3-2').innerHTML = `<img src=${data.image3} alt="Imagen de portada" style="width: 100%; height: auto;">`
    } else {
        document.getElementById('imagen-3-2').innerHTML = ``
    }

    if (data.image4 != "") {
        document.getElementById('imagen-4-2').innerHTML = `<img src=${data.image4} alt="Imagen de portada" style="width: 100%; height: auto;">`
    } else {
        document.getElementById('imagen-4-2').innerHTML = ``
    }

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

        if (imagenUrl2 != "") {
            productoAEditar.image2 = imagenUrl2
        } else {
            productoAEditar.image2 = imagen2Actual
        }

        if (imagenUrl3 != "") {
            productoAEditar.image3 = imagenUrl3
        } else {
            productoAEditar.image3 = imagen3Actual
        }

        if (imagenUrl4 != "") {
            productoAEditar.image4 = imagenUrl4
        } else {
            productoAEditar.image4 = imagen4Actual
        }

        fs.doc("products/" + idProd).update({
            "name": productoAEditar.name,
            "description": productoAEditar.description,
            "price": productoAEditar.price,
            "image": productoAEditar.image,
            "image2": productoAEditar.image2,
            "image3": productoAEditar.image3,
            "image4": productoAEditar.image4,
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
                            document.getElementById('imagen-2-2').innerHTML = ``,
                            document.getElementById('imagen-3-2').innerHTML = ``,
                            document.getElementById('imagen-4-2').innerHTML = ``,
                            document.getElementById('main-img').innerHTML = ``,
                            document.getElementById('imagen-2').innerHTML = ``,
                            document.getElementById('imagen-3').innerHTML = ``,
                            document.getElementById('imagen-4').innerHTML = ``,
                            limpiarTexto()

                    })

            )
    } else {
        console.error("Campos incompletos")
    }
}