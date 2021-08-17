let posteos = []

// Creación de listado de posteos

const postList = () => {
    let html = ``

        posteos.forEach(element => {
            html += `<div class="postCard">
                        <a href="post.html?id=${element.id}">
                            <div class="cardImage">
                                <img src="${element.image}" alt="">
                            </div>

                            <div class="postCardInfo">
                                <p class="postCardName">${element.title}</p>
                                <p class="postCardDate">${element.fecha}</p>
                            </div>
                        </a>
                    </div>`
        })


    document.getElementById("postList").innerHTML = html
}


// Se obtienen los posteos del blog y se guardan en el session para ahorrar consumos

const getPost = () => {
    fs.collection("blog").orderBy("fecha").get()
    .then((snapshot) => {
        snapshot.docs.map(element => {
            let post = {id: element.id, ...element.data()}
            posteos = [...posteos, post]
            postList()
        })
        sessionStorage.setItem("posts", JSON.stringify(posteos))
    })
}

if(sessionStorage.getItem("posts")) {
    posteos = JSON.parse(sessionStorage.getItem("posts"))
    postList()
} else {
    getPost()
}
