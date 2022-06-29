var numerador = 1;
function azul() {
    numerador ++;
    if (numerador > 4) { numerador = 1}
    document.querySelector("#imgcab").setAttribute("src", "../imagenes/FELIZDIADELAMADRE0" + numerador + ".jpg");
    document.querySelector("#imgcab1").setAttribute("src", "../imagenes/FELIZDIADELPADRE0" + numerador+ ".jpg");
    document.querySelector("#imgcab2").setAttribute("src", "../imagenes/INICIOCLASE0" + numerador + ".jpg");
    document.querySelector("#imgcab3").setAttribute("src", "../imagenes/FELIZPATRIA0" + numerador+ ".jpg");
    

    setTimeout("azul()", 2000);

}
document.body.setAttribute("onload","azul()");
