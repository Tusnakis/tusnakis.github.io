document.addEventListener('DOMContentLoaded', init);
function init() {
    
    let numeros = document.getElementsByClassName("num");
    let guardar = document.getElementById("guardar");
    let cargar = document.getElementById("cargar");
    let body = document.getElementsByTagName("body");

    let arrNumerosFila1 = ["1","11","21","31","41"];
    let arrNumerosFila2 = ["2","12","22","32","42"];
    let arrNumerosFila3 = ["3","13","23","33","43"];
    let arrNumerosFila4 = ["4","14","24","34","44"];
    let arrNumerosFila5 = ["5","15","25","35","45"];
    let arrNumerosFila6 = ["6","16","26","36","46"];
    let arrNumerosFila7 = ["7","17","27","37","47"];
    let arrNumerosFila8 = ["8","18","28","38","48"];
    let arrNumerosFila9 = ["9","19","29","39","49"];
    let arrNumerosFila10 = ["10","20","30","40",""];
    let arrNumerosFila = [arrNumerosFila1,arrNumerosFila2,arrNumerosFila3,arrNumerosFila4,arrNumerosFila5,
                        arrNumerosFila6,arrNumerosFila7,arrNumerosFila8,arrNumerosFila9,arrNumerosFila10];

    if(localStorage.getItem("contenedor")) {
        let contenedor = document.createElement("div");
        contenedor.innerHTML = localStorage.getItem("contenedor");
        body[0].insertBefore(contenedor, body[0].firstChild);
    } else {
        let contenedor = document.createElement("div");
        contenedor.classList.add("container-fluid", "text-center", "mt-5", "contenedor");

        for(let i = 0; i < arrNumerosFila.length; i++) {
            anadirFilaNumeros(arrNumerosFila[i], contenedor);
        }

        body[0].insertBefore(contenedor, body[0].firstChild);
    }

    function anadirFilaNumeros(arrNumeros, contenedor) {

        let row = document.createElement("div");
        row.classList.add("row", "d-flex", "justify-content-center");

        for(let i = 0; i < arrNumeros.length; i++) {
            let col = document.createElement("div");
            if(arrNumeros[i] == "") {
                col.classList.add("col-2", "col-md-1");
            } else {
                col.classList.add("col-2", "col-md-1", "border", "num");
            }
            let textCol = document.createTextNode(arrNumeros[i]);
            col.appendChild(textCol);
            row.appendChild(col);
        }

        contenedor.appendChild(row);

    }

    guardar.addEventListener("click", function(e) {
        let contenedor = document.getElementsByClassName("contenedor");
        localStorage.setItem("contenedor", contenedor[0].outerHTML);
        alert("Guardado");
    });

    borrar.addEventListener("click", function(e) {
        localStorage.removeItem("contenedor");
        window.location.reload();
    });

    for(let i = 0; i < numeros.length; i++) {
        numeros[i].addEventListener("click", function(e){
            let numElegido = e.target;
            marcarNumero(numElegido);
        });
    }

    function marcarNumero(numElegido) {
        if(numElegido.style.backgroundColor == "red") {
            numElegido.removeAttribute("style");
        } else {
            numElegido.style.backgroundColor = "red";
        }
    }

}
