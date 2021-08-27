<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catálogo</title>
    <script defer src="https://code.iconify.design/1/1.0.6/iconify.min.js"></script>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <!-- The core Firebase JS SDK is always required and must be listed first -->
    <script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js"></script>

    <!-- TODO: Add SDKs for Firebase products that you want to use
            https://firebase.google.com/docs/web/setup#available-libraries -->
    <script src="https://www.gstatic.com/firebasejs/8.4.1/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.4.1/firebase-firestore.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.5.0/firebase-storage.js"></script>
    

    <link rel="stylesheet" href="./css/styles.css">
    <script defer src="./js/cart.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>

</head>

<?php

$email = $_POST['email'];

$conexion = mysqli_connect("localhost", "javierwnk", "vVVo)yPuD0&t", "consultasportfolio")  or
die("Error al conectar la base de datos" . mysqli_error($conexion));

mysqli_query( $conexion, "INSERT INTO suscriptores VALUES (DEFAULT,'$email')");
?>

<body>
    <header>
        <a href="index.html">
            <h1>Estanco Saludable</h1>
            <img src="./src/logo-verde.svg" alt="Logo Estanco Saludable">
        </a>

        <nav>
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="productos.html">Productos</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="contacto.html">Contacto</a></li>
                <li><a class="icon" id="cartIcon"><span class="iconify" data-icon="mdi:cart-outline"
                            data-inline="false"></span></a></li>
            </ul>
        </nav>
    </header>

    <main>

        <div class="exito">
            <div class="mensaje">
                <h2>Te has suscripto correctamente</h2>
            </div>

            <img src="./src/success.png" alt="Imagen proceso exitoso">

            <div class="btnGroup">
                <a class="" href="">Ver recetas</a>
                <a class="" href="">Ver productos</a>
            </div>
        </div>

    </main>

    <div class="cartPreview" id="cartPreview">
        <div class="cartPreviewContent">
            <div class="previewTitle">
                <span class="iconify back" id="closeBtn" data-icon="mdi:chevron-left" data-inline="false"></span>
                <h2>Mi Carrito</h2>
            </div>

            <div class="previewProductList" id="previewProductList">

            </div>

            <div id="rest">
                
            </div>
        </div>
    </div>


    <footer>
        <div class="contactInfo">
            <p class="phoneNumber"><span class="iconify" data-icon="mdi:phone" data-inline="false"></span> <a href="tel:+541158855912"> 011 5885-5912 </a></p>
            <p class="city">Ciudad de Buenos Aires, Argentina</p>
        </div>

        <div><img src="./src/logo-blanco.svg" alt="Logo Estanco Saludable"></div>
        
        <div class="socialLinks">
            <p class="followGreen">Seguínos en nuestras redes sociales</p>
            
            <ul>
                <li><a href=""><span class="iconify" data-icon="mdi:instagram" data-inline="false"></span></a></li>
                <li><a href=""><span class="iconify" data-icon="mdi:facebook" data-inline="false"></span></a></li>
                <li><a href=""><span class="iconify" data-icon="mdi:youtube" data-inline="false"></span></a></li>
                <li><a href=""><span class="iconify" data-icon="mdi:twitter" data-inline="false"></span></a></li>
                <li><a href=""><span class="iconify" data-icon="mdi:whatsapp"
                            data-inline="false"></span></a></li>
            </ul>
        </div>
    </footer>

</body>

</html>