// Obtenemos los parámetros de la URL

const valores = window.location.search;

//Creamos la instancia
const urlParams = new URLSearchParams(valores);

// Verificar si existe el parámetro

let idPost = null

if (urlParams.has("id"))
    idPost = urlParams.get("id")


let postDetalle = ""

const getPosteo = () => {
    fs.doc("blog/" + idPost).get()
        .then(doc => {
            postDetalle = doc.data()
            window.document.title = doc.data().name       
            buildblog()
        })
}

const buildblog = () => {
   
       // Detalle del producto
   
       document.getElementById("postContent").innerHTML = `
       <p class="fecha">${postDetalle.fecha}</p>
       <h2>${postDetalle.title}</h2>
       <img src="${postDetalle.image}" alt="${postDetalle.title}">
       <div class="cuerpoPosteo">
       ${postDetalle.body}
       </div>
       `
}

getPosteo()