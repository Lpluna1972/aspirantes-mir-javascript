let receta = {};

receta.nombre = "sandwich";
receta.ingredientes = [];
receta.ingredientes.push({nombre: "pan", cantidad: 2});
receta.ingredientes.push({nombre: "queso", cantidad: 1});
const cantidadPrimerIngrediente = receta.ingredientes[0].cantidad;
const cantidadSegundoIngrediente = receta.ingredientes[1].cantidad;

const primerIngrediente = receta.ingredientes[0].nombre;
const sumaIngredientes = cantidadPrimerIngrediente + cantidadSegundoIngrediente;
console.log(primerIngrediente);
console.log(sumaIngredientes);
