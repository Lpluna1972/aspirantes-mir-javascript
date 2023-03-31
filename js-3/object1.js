let Pedro = {
  nombre: "Pedro Perez",
  edad: 30,
  activo: true,
  hobbies: ["programar", "squash", "piano"],
}

console.log(Pedro.edad);
Pedro.estatura = 1.8;
delete Pedro.activo;

console.log("nombre : " + Pedro.nombre);
console.log("edad : " + Pedro.edad);
console.log("hobbies : " + Pedro.hobbies);
console.log("estatura : " + Pedro.estatura);

function saluda(name) {
  return "Hola me llamo " + name;
}
console.log(saluda("Pedro perez"));





