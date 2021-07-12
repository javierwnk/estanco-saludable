
// Alta de producto

document.getElementById("cargarProd").onclick = cargarProducto;

// funciones para validar que los campos esten completos
document.getElementById("name").onblur = validarCamposCompletos
document.getElementById("description").onblur = validarCamposCompletos
document.getElementById("price").onblur = validarCamposCompletos
document.getElementById("inputGroupSelect01").onchange = validarCamposCompletos
document.getElementById("portada").onblur = validarCamposCompletos



function validarCamposCompletos() {
    if (document.getElementById("name").value !== "" && document.getElementById("description").value !== "" &&
        document.getElementById("price").value !== "" && statusSubida != 0 &&
        document.getElementById("inputGroupSelect01").value !== "Seleccione") {

        document.getElementById('cargarProd').classList.remove('disabled')
        return 1

    } else {
        document.getElementById('cargarProd').classList.add('disabled')
        return 0
    }
}

const altaForm = document.querySelector("#alta-form") // Sirve para limpiar el form mas adelante


// Manejo de subida de la imagen DE PORTADA
document.getElementById("portada").onchange = cargarImagenPortada
document.getElementById("portada2").onchange = cargarImagenPortada


let imagenUrl = "" // url de imagen
let statusSubida = 0

function cargarImagenPortada(event) {

    // Obtener el archivo
    const file = event.target.files[0]

    // Crear referencia en Cloud Storage
    const ref = stg.ref("images/" + file.name)

    // Subir el archivo
    const upload = ref.put(file)

    // Supervición del proceso
    upload.on("state_changed",
        function progress(snapshot) {
            console.warn((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            document.getElementById("statusSubida").innerText = "Subiendo..."
            document.getElementById("statusSubida2").innerText = "Subiendo..."

        },
        function error(error) {
            document.getElementById("statusSubida").innerText = "Error al subir la imagen"
            document.getElementById("statusSubida2").innerText = "Error al subir la imagen"

        },
        function complete() {
            document.getElementById("statusSubida").innerText = "Imagen cargada exitosamente"
            document.getElementById("statusSubida2").innerText = "Imagen cargada exitosamente"
            statusSubida = 1
            validarCamposCompletos()
            console.info("Finished uploading!")
            ref.getDownloadURL()
                .then(url => {
                    imagenUrl = url,
                    document.getElementById('main-img').innerHTML = `<img src=${url} alt="Imagen de portada" style="width: 100%; height: auto;">`
                    document.getElementById('main-img-2').innerHTML = `<img src=${url} alt="Imagen de portada" style="width: 100%; height: auto;">`

                })
                .catch(error => {
                    console.error(error)
                })
        }
    )
}

// Manejo de subida de la imagen OPTATIVA 2
document.getElementById("imagen2").onchange = cargarImagen2
document.getElementById("imagen2-2").onchange = cargarImagen2


let imagenUrl2 = "" // url de imagen

function cargarImagen2(event) {

    // Obtener el archivo
    const file = event.target.files[0]

    // Crear referencia en Cloud Storage
    const ref = stg.ref("images/" + file.name)

    // Subir el archivo
    const upload = ref.put(file)

    // Supervición del proceso
    upload.on("state_changed",
        function progress(snapshot) {
            console.warn((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            document.getElementById("statusImagen2").innerText = "Subiendo..."
            document.getElementById("statusImagen2-2").innerText = "Subiendo..."

        },
        function error(error) {
            document.getElementById("statusImagen2").innerText = "Error al subir la imagen"
            document.getElementById("statusImagen2-2").innerText = "Error al subir la imagen"

        },
        function complete() {
            document.getElementById("statusImagen2").innerText = "Imagen cargada exitosamente"
            document.getElementById("statusImagen2-2").innerText = "Imagen cargada exitosamente"
            statusSubida = 1
            validarCamposCompletos()
            console.info("Finished uploading!")
            ref.getDownloadURL()
                .then(url => {
                  imagenUrl2 = url,
                  document.getElementById('imagen-2').innerHTML = `<img src=${url} alt="Imagen de portada" style="width: 100%; height: auto;">`
                  document.getElementById('imagen-2-2').innerHTML = `<img src=${url} alt="Imagen de portada" style="width: 100%; height: auto;">`
                })
                .catch(error => {
                    console.error(error)
                })
        }
    )
}

// Manejo de subida de la imagen OPTATIVA 3
document.getElementById("imagen3").onchange = cargarImagen3
document.getElementById("imagen3-2").onchange = cargarImagen3


let imagenUrl3 = "" // url de imagen

function cargarImagen3(event) {

    // Obtener el archivo
    const file = event.target.files[0]

    // Crear referencia en Cloud Storage
    const ref = stg.ref("images/" + file.name)

    // Subir el archivo
    const upload = ref.put(file)

    // Supervición del proceso
    upload.on("state_changed",
        function progress(snapshot) {
            console.warn((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            document.getElementById("statusImagen3").innerText = "Subiendo..."
            document.getElementById("statusImagen3-2").innerText = "Subiendo..."

        },
        function error(error) {
            document.getElementById("statusImagen3").innerText = "Error al subir la imagen"
            document.getElementById("statusImagen3-2").innerText = "Error al subir la imagen"

        },
        function complete() {
            document.getElementById("statusImagen3").innerText = "Imagen cargada exitosamente"
            document.getElementById("statusImagen3-2").innerText = "Imagen cargada exitosamente"
            statusSubida = 1
            validarCamposCompletos()
            console.info("Finished uploading!")
            ref.getDownloadURL()
                .then(url => {
                  imagenUrl3 = url,
                  document.getElementById('imagen-3').innerHTML = `<img src=${url} alt="Imagen de portada" style="width: 100%; height: auto;">`
                  document.getElementById('imagen-3-2').innerHTML = `<img src=${url} alt="Imagen de portada" style="width: 100%; height: auto;">`

                })
                .catch(error => {
                    console.error(error)
                })
        }
    )
}

// Manejo de subida de la imagen OPTATIVA 4
document.getElementById("imagen4").onchange = cargarImagen4
document.getElementById("imagen4-2").onchange = cargarImagen4


let imagenUrl4 = "" // url de imagen

function cargarImagen4(event) {

    // Obtener el archivo
    const file = event.target.files[0]

    // Crear referencia en Cloud Storage
    const ref = stg.ref("images/" + file.name)

    // Subir el archivo
    const upload = ref.put(file)

    // Supervición del proceso
    upload.on("state_changed",
        function progress(snapshot) {
            console.warn((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            document.getElementById("statusImagen4").innerText = "Subiendo..."
            document.getElementById("statusImagen4-2").innerText = "Subiendo..."

        },
        function error(error) {
            document.getElementById("statusImagen4").innerText = "Error al subir la imagen"
            document.getElementById("statusImagen4-2").innerText = "Error al subir la imagen"

        },
        function complete() {
            document.getElementById("statusImagen4").innerText = "Imagen cargada exitosamente"
            document.getElementById("statusImagen4-2").innerText = "Imagen cargada exitosamente"
            statusSubida = 1
            validarCamposCompletos()
            console.info("Finished uploading!")
            ref.getDownloadURL()
                .then(url => {
                  imagenUrl4 = url,
                  document.getElementById('imagen-4').innerHTML = `<img src=${url} alt="Imagen de portada" style="width: 100%; height: auto;">`
                  document.getElementById('imagen-4-2').innerHTML = `<img src=${url} alt="Imagen de portada" style="width: 100%; height: auto;">`
                })
                .catch(error => {
                    console.error(error)
                })
        }
    )
}


function cargarProducto() {

    let status = validarCamposCompletos()

    if (status == 1) {
        let productoNuevo = {
            "name": "",
            "description": "",
            "price": "",
            "image": "",
            "image2": "",
            "image3": "",
            "image4": "",
            "category": ""
        }

        productoNuevo.name = document.getElementById("name").value
        productoNuevo.description = document.getElementById("description").value
        productoNuevo.price = document.getElementById("price").value
        productoNuevo.category = document.getElementById("inputGroupSelect01").value

        productoNuevo.image = imagenUrl
        productoNuevo.image2 = imagenUrl2
        productoNuevo.image3 = imagenUrl3
        productoNuevo.image4 = imagenUrl4


        fs.collection('products').add(productoNuevo)
            .then(
                toast("created-toast"),

                altaForm.reset(), // Resetea formulario de alta

                fs.collection("products") // Actualiza listado de productos
                    .get()
                    .then((snapshot) => {
                        setupProducts(snapshot.docs),
                            statusSubida = 0,
                            document.getElementById('cargarProd').classList.add('disabled'),
                            document.getElementById('main-img').innerHTML = ``,
                            document.getElementById('imagen-2').innerHTML = ``,
                            document.getElementById('imagen-3').innerHTML = ``,
                            document.getElementById('imagen-4').innerHTML = ``,
                            document.getElementById('main-img-2').innerHTML = ``,
                            document.getElementById('imagen-2-2').innerHTML = ``,
                            document.getElementById('imagen-3-2').innerHTML = ``,
                            document.getElementById('imagen-4-2').innerHTML = ``,
                            limpiarTexto()
                        })
            )

    } else {
        console.error("Campos incompletos")
    }


}

function limpiarTexto () {
    document.getElementById("statusImagen4").innerText = ""
    document.getElementById("statusImagen4-2").innerText = ""
    document.getElementById("statusImagen3").innerText = ""
    document.getElementById("statusImagen3-2").innerText = ""
    document.getElementById("statusImagen2").innerText = ""
    document.getElementById("statusImagen2-2").innerText = ""
    document.getElementById("statusSubida").innerText = ""
    document.getElementById("statusSubida2").innerText = ""

    productoAEditar = {
        "name": "",
        "description": "",
        "price": "",
        "image": "",
        "image2": "",
        "image3": "",
        "image4": "",
        "category": ""
    }
    imagenActual = ""
    imagen2Actual = ""
    imagen3Actual = ""
    imagen4Actual = ""

    document.getElementById("title").value = ""
    document.getElementById("body").value = ""
    document.getElementById("title2").value = ""
    document.getElementById("body2").value = ""

    postAEditar = {
        "title": "",
        "body": "",
        "fecha": "",
        "image": ""
    }

    document.getElementById("estadoImagen2").innerText = ""
    document.getElementById("estadoImagen").innerText = ""


    document.getElementById("portada-post-preview").innerHTML = ""
    }