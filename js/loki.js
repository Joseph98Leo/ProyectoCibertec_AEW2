var dsemanas = new Array("Dom", "lun", "Mar", "Mier", "Jue", "Vie", "Sab");

var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo",
    "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre");

function fecha() {
    var f = new Date();
    var ndias = (new Date(f.getFullYear(), f.getMonth() + 1, 0).getDate());

    var dsemana = (new Date(f.getFullYear(), f.getMonth(), 1).getDay());

    var dias = new Array();

    for (let i = 0; i < dsemana; i++) { dias.push(""); }
    for (let i = 1; i <= ndias; i++) { dias.push(i); }

    var tabla = document.createElement("table");
    document.getElementById("aside_cal").appendChild(tabla);

    var fila = document.createElement("tr");
    tabla.appendChild(fila);

    dsemanas.forEach(function (d) {

        let celda = document.createElement("th");
        celda.innerHTML = d;

        fila.appendChild(celda);
    });

    let i = 0;
    dias.forEach(function (d) {
        if (i % 7 == 0) {
             fila = document.createElement("tr");
            tabla.appendChild(fila);
        }
        i++

        let celda = document.createElement("td");
        celda.innerHTML = d;
        
        fila.appendChild(celda);

    });
}

document.body.setAttribute("onload","fecha()");
