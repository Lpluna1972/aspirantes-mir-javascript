function join(arreglo) {
    let cadena = "";

    for (let i = 0; i < arreglo.length; i++) {
        cadena = cadena+ " " +arreglo[i];
    }
   
   return cadena

    }
    
console.log(join(["HOLA", "COMO", "ESTAS"]))
console.log(join([3, 7, 7]))
console.log(join([ "COMO", 3]))