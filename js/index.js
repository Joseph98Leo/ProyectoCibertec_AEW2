
var contador = 1;

function animaciones(){
    // Hacemos que la imagen se desvanezca (opacidad)
    document.querySelector("#imgcab").style.opacity = "0";
    // Aplicamos el efecto de transición
    // valores
    // "all" -> especifica el nombre de la propiedad CSS para el efecto
    // ls -> cuantos segundos tarda en completarse el efecto de transición
    document.querySelector("#imgcab").style.transition = "all 1s";
    // Invocamos a carrusel(), cada segundo, para que se vaya mostrando cada imagen
    setTimeout("carrusel()", 1000);
    
}


function carrusel(){
    contador ++;
    if(contador>3){contador=1;}
    document.querySelector("#imgcab").setAttribute("src","imagenes/fondo" + contador + ".jpg");

    document.querySelector("#imgcab").style.opacity = "1"
    // En la transición, hacemos que cada imagen demore cinco segundos en mostrarse.
    document.querySelector("#imgcab").style.transition = "all 5s"

    setTimeout("animaciones()", 2000);
}


document.body.setAttribute("onload","carrusel()");
