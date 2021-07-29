let currentSlide = 0;

let slide = [{title: "Aceite de Oliva", 
            bgImage: "../src/bg1.jpg",
            descriptionImage: "../src/bg1-1.png",
            imagePosition: "80%",
            texto: "Prueba la excelencia con los aceites de oliva y saborizados de Doña juana",
            idCategoria: "aceites"},

            {title: "Miel santos", 
            bgImage: "../src/bg2.jpg",
            descriptionImage: "../src/bg2-1.png",
            imagePosition: "top",
            texto: "Acompaña tus desayunos y postres con las mieles e infusiones libre de químicos.",
            idCategoria: "mieles"},

            {title: "Tea Boundies", 
            bgImage: "../src/bg1.jpg",
            descriptionImage: "../src/bg1-1.png",
            imagePosition: "80%",
            texto: "Prueba la excelencia con los aceites de oliva y saborizados de Doña juana",
            idCategoria: "tea-blondies"}
            ]

const changeSlide = (operator) => {

    let nextSlide = operator + currentSlide

    if(nextSlide > slide.length-1) {
        currentSlide = 0
    } else if(nextSlide < 0) {
        currentSlide = slide.length-1
    } else {
        currentSlide = nextSlide
    }

    document.getElementById("slideTitle").innerText = slide[currentSlide].title
    document.getElementById("slideText").innerText = slide[currentSlide].texto
    document.getElementById("bgSliderProducts").style.backgroundImage = `url(${slide[currentSlide].bgImage})`
    document.getElementById("bgProductInfo").style.backgroundImage = `url(${slide[currentSlide].descriptionImage})`
    document.getElementById("bgProductInfo").style.backgroundPositionY = `${slide[currentSlide].imagePosition}`



}


document.getElementById("controlUp").addEventListener("click", () => changeSlide(1))
document.getElementById("controlDown").addEventListener("click",  () => changeSlide(-1))