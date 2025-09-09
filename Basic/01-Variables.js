//Tenemos 3 formas de crear variables(no usar var, es la forma antigua)

/** 
 * ? var -> Forma original de crear variables, puede varias(le puedes cambiar el valor)
 * ? Forma que no hay que usar para declarar variables porque carga las variables antes de todo y se puede liar, se puede 
 * ? llamar antes de crear sin que de error puediendo hacer el codigo muy dificil de arreglar

 *! console.log(helloWorld)-> undefined */
var helloWorld = "¡Hola, Mundo"
console.log(helloWorld)

/**
 * ? let -> las variables definidas asi solo serán accesibles dentro de un bloque {}, no deja ejecutarla antes de crearla

 * ! console.log(helloWorld2)-> Error */

let helloWorld2 = "¡Hola, Mundo 2"
console.log(helloWorld2)

helloWorld2 = "Cambio de valor"
console.log(helloWorld2)

//const -> No puedes cambiarle el valor ya que es un valor constante

const helloWorld3 = "¡Hola, Mundo 3"
console.log(helloWorld3)

// Esto dará un error ya que el valor no se puede cambiar
//helloWorld3 = "Cambio"
//console.log(helloWorld3)