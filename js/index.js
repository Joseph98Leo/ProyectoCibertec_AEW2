
var contador = 1;

function animaciones(){
    document.querySelector("#imgcab").style.opacity = "0";
    document.querySelector("#imgcab").style.transition = "all 1s";
    setTimeout("carrusel()", 1000);
    
}


function carrusel(){
    contador ++;
    if(contador>3){contador=1;}
    document.querySelector("#imgcab").setAttribute("src","imagenes/fondo" + contador + ".jpg");
    document.querySelector("#imgcab").style.opacity = "1"
    document.querySelector("#imgcab").style.transition = "all 5s"

    setTimeout("animaciones()", 2000);
}

document.body.setAttribute("onload","carrusel()");
