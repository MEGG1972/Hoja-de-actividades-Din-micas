const IMG_INITIAL = "public/images.png";
const IMG_SECONDARY = "public/banner_libros.png";
window.onload = window.alert("Hola, bienvenido a mi página")
function cambiarImagen(e){
   /* if (e.target.getAttribute("src")==IMG_INITIAL){
        e.target.setAttribute("src", IMG_SECONDARY);
    } else {
        e.target.setAttribute("src", IMG_INITIAL)
    }
}
*/
//segundo metodo
if (e.type == "mouseover"){
    e.target.setAttribute("src", IMG_SECONDARY);
} else{
    e.target.setAttribute("src", IMG_INITIAL)
}
}
function changeParagrahStyle () {
    const paragraphs = document.getElementsByTagName("p");
    for (let element of paragraphs){
        if (element.classList.contains("secondary-paragraph-style")){
            element.classList.remove("secondary-paragraph-style");
    }else {
        element.classList.add("secondary-paragraph-style");
    }
}
}

document.getElementById("imagenWeb").addEventListener("mouseover", cambiarImagen);
document.getElementById("imagenWeb").addEventListener("mouseout", cambiarImagen);
document.getElementById("changeParahraphStyleButton").addEventListener("click", changeParagrahStyle);


