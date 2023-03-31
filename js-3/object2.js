let persona = {
  nombre: "Ludys Luna",
  edad: 51,
  ciudad: "Barranquilla",
  profesion: "Agente comercial",

}
console.log(persona);

function presentacion(objeto) {
  return "soy " + objeto.nombre + " " + objeto.edad + " " + objeto.ciudad + " " + objeto.profesion;
}
console.log(presentacion(persona));

let mensaje = presentacion(persona);
console.log(mensaje);

persona.hobbies = ["leer", "pintar", "bailar"]


let keys = Object.keys(persona.hobbies)

for (let i = 0; i < keys.length; i++) {
  let key = keys[i];
  console.log(persona.hobbies[key])
}







