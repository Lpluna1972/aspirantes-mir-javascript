let Pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"],
    estatura: 1.8
       
  }


  console.log(Pedro.edad)
  delete Pedro.activo
  console.log(Pedro.activo)
  

  for (let llave in Pedro) {
    if (Pedro.hasOwnProperty(llave)) {
      console.log(Pedro[llave])
    }
  }

 

  function saluda(name) {
    return "Hola me llamo " + name;
    
  }
  
  
  console.log(saluda("Pedro perez"));

  
  


  