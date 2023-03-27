let persona ={
 nombre: "Ludys Luna",
 edad: 51,
 ciudad: "Barranquilla",
 profesion: "Agente comercial", 
     
}
   console.log(persona.nombre)
   
  function presentacion(nombre,edad,ciudad,profesion) {

    return "soy " + nombre + edad + ciudad + profesion;    
   }

  console.log(presentacion("ludys luna ", "51 ", " barranquilla ", "agente comercial "))



   let mensaje = presentacion 

    console.log(mensaje("ludys luna ", "51 ", " barranquilla ", " agente comercial"))

    persona.hobbies = ["leer", "pintar", "bailar"]

    console.log(persona.hobbies)

   let keys = Object.keys(persona.hobbies)

   for (let i = 0; i < keys. length; i++) {
    let key = keys[i];
     console.log(persona.hobbies[key])
   }


    

  


     