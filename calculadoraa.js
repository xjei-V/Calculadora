const pantalla = document.getElementById("pantalla");

function actualizarPantalla(valor) {
    if (valor === "←") {
        pantalla.value = pantalla.value.slice(0, -1);  
    } else {
        pantalla.value += valor;   
    }
}

function evaluarExpresion() {
    try {
        pantalla.value = eval(pantalla.value);  
    } catch (error) {
        pantalla.value = "Error";  
    }
}
