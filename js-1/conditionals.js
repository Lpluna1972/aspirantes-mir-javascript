function calcularColor(num){
    var color;
    if (num == 1) {
        color = "black";
    } else if (num == 2) {
        color = "blanco";
     } else if (num == 3){
        color = "rojo";
     } else
        color = "verde";

    return "el color es " + color;
}

//codigo de prueba
console.log(calcularColor(1)) // "el color es negro"
console.log(calcularColor(2)) // "el color es blanco"
console.log(calcularColor(3)) // "el color es azul"
console.log(calcularColor(8)) // "el color es verde"