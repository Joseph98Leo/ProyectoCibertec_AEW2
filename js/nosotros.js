var contador = 1;

function animaciones(){
    // Hacemos que la imagen se desvanezca (opacidad)
    document.querySelector("#imgnos").style.opacity = "0";
    // Aplicamos el efecto de transición
    // valores
    // "all" -> especifica el nombre de la propiedad CSS para el efecto
    // ls -> cuantos segundos tarda en completarse el efecto de transición
    document.querySelector("#imgnos").style.transition = "all 1s";
    // Invocamos a carrusel(), cada segundo, para que se vaya mostrando cada imagen
    setTimeout("carrusel()", 1500);
    
}


function carrusel(){
    contador ++;
    if(contador>3){contador=1;}
    document.querySelector("#imgnos").setAttribute("src","../imagenes/nosotros" + contador + ".jpg");

    document.querySelector("#imgnos").style.opacity = "1"
    // En la transición, hacemos que cada imagen demore cinco segundos en mostrarse.
    document.querySelector("#imgnos").style.transition = "all 5s"

    setTimeout("animaciones()", 3000);
}


document.body.setAttribute("onload","carrusel()");