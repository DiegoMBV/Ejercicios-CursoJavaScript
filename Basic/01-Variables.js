//Tenemos 3 formas de crear variables

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

//const

function suma(operador, operador2){
    resultado = operador + operador2
    return resultado
}

console.log(suma(5,5));