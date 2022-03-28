
let numerouno;
let numerodos;
let imagenes = [];
let resultados = [];
let estado = [];
let botones = document.querySelectorAll(".button");
function llenarVectores() {
    for (let i = 1; i < 5; i++) {
        resultados[i] = document.getElementById("resultado" + i);
        imagenes[i] = document.getElementById("img" + i);
        estado[i] = false;

    }

}


let form = document.getElementById("formulario")
form.addEventListener("click", function (event) {
    event.preventDefault();
    if (!numerouno || !numerodos) {
        nomostrar()
    }

});
function nomostrar() {
    resultados.forEach(element => {
        element.style.cssText = "display:none";
        let boton = element.nextElementSibling;
        boton.textContent = "Ver Resultado";
    });
    imagenes.forEach(element => {
        element.style.cssText += "display:block;margin:0 auto";
    });

    numerouno = "";
    numerodos = "";


}
function CapturarNumeros() {

    numerouno = Number(document.querySelector("#numerouno").value);
    numerodos = Number(document.querySelector("#numerodos").value);
    if (numerouno <= 0 || numerodos <= 0) {
        return false
    }
    return true;

}

function EsIgual(x) {
    if (estado[x]) {
        ocultarGeneral(x);
        estado[x] = false;
        let boton = resultados[x].nextElementSibling;
        boton.textContent = "Ver Resultado";

    } else {
        llenarVectores();
        let val = CapturarNumeros();
        if (val) {
            let dato = ""
            if (numerouno == numerodos) {
                dato = "Son iguales"
            }
            if (numerouno != numerodos) {
                dato = "No son iguales"
            }



            resultados[x].style.cssText = "display:block"
            resultados[x].textContent = dato;
            resultados[x].style.cssText += "margin:auto";
            imagenes[x].style.cssText = "display:none";
            let boton = resultados[x].nextElementSibling;
            boton.textContent = "Ocultar Resultado";
            estado[x] = true;

        }

    }

}
function Sumar(x) {
    if (estado[x]) {
        ocultarGeneral(x);
        estado[x] = false;
        let boton = resultados[x].nextElementSibling;
        boton.textContent = "Ver Resultado";

    } else {
        llenarVectores();
        let val = CapturarNumeros();
        if (val) {
            let suma = numerouno + numerodos;

            resultados[x].style.cssText = "display:block"
            resultados[x].textContent = "La suma es " + suma;
            resultados[x].style.cssText += "margin:auto";
            imagenes[x].style.cssText = "display:none";
            let boton = resultados[x].nextElementSibling;
            boton.textContent = "Ocultar Resultado";
            estado[x] = true;

        }

    }

}
function Intercambiar(x) {
    if (estado[x]) {
        ocultarGeneral(x);
        estado[x] = false;
        let boton = resultados[x].nextElementSibling;
        boton.textContent = "Ver Resultado";

    } else {
        llenarVectores();
        let val = CapturarNumeros();
        if (val) {
            numerouno = numerouno + numerodos;

            numerodos = numerouno - numerodos;

            numerouno = numerouno - numerodos;

            resultados[x].style.cssText = "display:block"
            resultados[x].textContent = "1 Numero " + numerouno + " 2 Numero " + numerodos;
            resultados[x].style.cssText += "margin:auto";
            imagenes[x].style.cssText = "display:none";
            let boton = resultados[x].nextElementSibling;
            boton.textContent = "Ocultar Resultado";
            estado[x] = true;

        }



    }

}
function Comparar(x) {
    if (estado[x]) {
        ocultarGeneral(x);
        estado[x] = false;
        let boton = resultados[x].nextElementSibling;
        boton.textContent = "Ver Resultado";

    } else {
        llenarVectores();
        let val = CapturarNumeros();
        if (val) {
            let menor = 0;
            if (numerouno > numerodos) {
                menor = numerodos;
            }
            if (numerouno < numerodos) {
                menor = numerouno;
            }

            resultados[x].style.cssText = "display:block"
            resultados[x].textContent = "El menor es " + menor;
            resultados[x].style.cssText += "margin:auto";
            imagenes[x].style.cssText = "display:none";
            let boton = resultados[x].nextElementSibling;
            boton.textContent = "Ocultar Resultado";
            estado[x] = true;

        }



    }
}

function ocultarGeneral(x) {
    resultados[x].style.cssText = "display:none"
    imagenes[x].style.cssText = "display:block,margin:auto";

}
