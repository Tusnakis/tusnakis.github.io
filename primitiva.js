document.addEventListener('DOMContentLoaded', init);
function init() {
    
    let numeros = document.getElementsByClassName("num");

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