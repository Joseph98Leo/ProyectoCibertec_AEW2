
function animaciones(){
    document.querySelector("#imgcab").style.opacity = "0";
    document.querySelector("#imgcab").style.transition = "all 1s";
    setTimeout("carrusel()", 1000);
    
}


var numerador = 1;
function carrusel() {
    numerador ++;
    if (numerador > 3) { numerador = 1}
    document.querySelector("#imgcab").setAttribute("src", "../imagenes/objetivos0" + numerador + ".jpg");
    document.querySelector("#imgcab").style.opacity = "1"
    document.querySelector("#imgcab").style.transition = "all 5s"

    setTimeout("animaciones()", 2000);
}

document.body.setAttribute("onload","carrusel()");