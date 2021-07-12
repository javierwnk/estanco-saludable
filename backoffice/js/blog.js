
// Carga de imagen
let estadoImagenPortada = 0; // para la validación
let imagenPortada = "" // url de la imagen

const cargarPortada = (event) => {
        // Obtener el archivo
        const file = event.target.files[0]

        // Crear referencia en Cloud Storage
        const ref = stg.ref("blog/" + file.name)
    
        // Subir el archivo
        const upload = ref.put(file)
    
        // Supervición del proceso
        upload.on("state_changed",
            function progress(snapshot) {
                console.warn((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                document.getElementById("estadoImagen").innerText = "Subiendo..."
                document.getElementById("estadoImagen2").innerText = "Subiendo..."
            },
            function error(error) {
                document.getElementById("estadoImagen").innerText = "Error al subir la imagen"
                document.getElementById("estadoImagen2").innerText = "Error al subir la imagen"
            },
            function complete() {
                document.getElementById("estadoImagen").innerText = "Imagen cargada exitosamente"
                document.getElementById("estadoImagen2").innerText = "Imagen cargada exitosamente"
                estadoImagenPortada = 1
                validarCamposPost()
                console.info("Finished uploading!")
                ref.getDownloadURL()
                    .then(url => {
                        imagenPortada = url,
                        document.getElementById('portada-post-preview').innerHTML = `<img src=${url} alt="Imagen de portada" style="width: 100%; height: auto;">`
                        document.getElementById('portada-post-preview2').innerHTML = `<img src=${url} alt="Imagen de portada" style="width: 100%; height: auto;">`
                    })
                    .catch(error => {
                        console.error(error)
                    })
            }
        )
    
}

// Funcion validadora

const validarCamposPost = () => {

    if(document.getElementById("title").value !== "" && document.getElementById("body").value !== "" && estadoImagenPortada !==0) {
        document.getElementById("altaPosts").classList.remove("disabled")
        return true
    } else {
        document.getElementById("altaPosts").classList.add("disabled")
        return false
    }

}



// Publicar post
const publicarPost = () => {


    let status = validarCamposPost()

    if(status) {

        const fecha = new Date()

        let entrada = {
            "title": document.getElementById("title").value,
            "body": document.getElementById("body").value,
            "image": imagenPortada,
            "fecha": fecha.toLocaleDateString()
        }

        fs.collection("blog").add(entrada)
        .then(
            fs.collection("blog")
            .get()
            .then((snapshot) => {
                setupPosts(snapshot.docs),
                estadoImagenPortada = 0
                imagenPortada = ""
                limpiarTexto(),
                document.querySelector("#create-post").reset()
            })
        )
    } else {
        console.error("Campos incompletros")
    }

}

// Alta de posteo

document.getElementById("altaPosts").onclick = publicarPost;

// funciones para validar datos completos
document.getElementById("title").onchange = validarCamposPost
document.getElementById("body").onchange = validarCamposPost
document.getElementById("portada-post").onchange = cargarPortada


// Consumo de los posts

const setupPosts = data => {
    let html = ``

    data.forEach(doc => {
        const post = doc.data()
        const card = `
        <div class="card" id="${doc.id}" style="width: 18rem; height: fit-content;">
            <img src="${post.image}" class="card-img-top" alt="${post.title}">
            <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">Fecha publicación: ${post.fecha}</p>
                <a href="#" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#editPosts" onclick="obtenerPost('${doc.id}')">Editar</a>
                <a href="#" class="btn btn-danger" id="delete-btn" onclick="eliminarPost('${doc.id}', '${post.title}')">Eliminar</a>

            </div>
        </div>`;

        html += card
    })

    document.getElementById("postsList").innerHTML = html

}

// Eliminación de post

const eliminarPost = (id, name) => {
    let m = confirm(`¿Está seguro que desea eliminar el posteo ${name}? Esta acción no se puede revertir.`)
    if (m == 1) {
        fs.collection("blog").doc(id).delete()
            .then(
                eliminarCard(id),
                toast("delete-toast")
            )
    }
}

// Edición de Post

let postAEditar = {
    "title": "",
    "body": "",
    "fecha": "",
    "image": ""
}

let postId = ""

let imagenPortadaActual = ""

const obtenerPost = (id) => {

    postId = id

    fs.doc("blog/" + id).get()
    .then(doc => {
        completarPost(doc.data()),
        postAEditar = doc.data()
        imagenPortadaActual = doc.data().image
    })
}

const completarPost = data => {
    document.getElementById("title2").value = data.title
    document.getElementById("body2").value = data.body
    document.getElementById('portada-post-preview2').innerHTML = `<img src=${data.image} alt="Imagen de portada" style="width: 100%; height: auto;">`
}

document.getElementById("portada-post2").onchange = cargarPortada


// Validación de los campos editados (exceptuando imagen, se entiende que hay una previamente cargada)


const validarCamposPost2 = () => {

    if(document.getElementById("title2").value !== "" && document.getElementById("body2").value !== "" ) {
        document.getElementById("editPost").classList.remove("disabled")
        return true
    } else {
        document.getElementById("editPost").classList.add("disabled")
        return false
    }

}

document.getElementById("title2").onblur = validarCamposPost2
document.getElementById("body2").onblur = validarCamposPost2



const editarPost = () => {
    let status = validarCamposPost2()

    if(status == 1) {

        postAEditar.title = document.getElementById("title2").value
        postAEditar.body = document.getElementById("body2").value
        postAEditar.fecha = postAEditar.fecha
        
        if(imagenPortada != "") {
            postAEditar.image = imagenPortada
        } else {
            postAEditar.image = imagenPortadaActual
        }
    
        fs.doc("blog/"+ postId). update({
            "title": postAEditar.title,
            "body": postAEditar.body,
            "fecha": postAEditar.fecha,
            "image": postAEditar.image
        })
        .then(
            toast("edited-toast"),
            fs.collection("blog")
            .get()
            .then((snapshot) => {
                setupPosts(snapshot.docs),
                estadoImagenPortada = 0,
                imagenPortada = "",
                limpiarTexto()

            })

        )
    
    }

}

document.getElementById("editPost").onclick = editarPost;
