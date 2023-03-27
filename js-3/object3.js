let receta = {
    nombre: "sandwich",
    ingredientes: [
       {nombre: "pan", cantidad: 2, ingrediente: {nombre: "queso", cantidad: 1 } } 
    ],
};

   let {ingredientes: {nombre:nombrepan},
    } = receta;

    console.log("pan");

    const cantidad = [2,1]
    let sum = 0;
    for (let key in cantidad) {
     sum += cantidad[key];
     
    }

   console.log(sum); 
