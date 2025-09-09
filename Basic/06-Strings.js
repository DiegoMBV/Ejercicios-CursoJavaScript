//Strings

//Concatenación

let myName = "Diego"
let greeting = "Hola " + myName + "!"
console.log(greeting)
console.log(typeof(greeting))

//Longitud
console.log(greeting.length)

//Acceso a caracteres
console.log(greeting[0])
console.log(greeting[9])

//Métodos comunes
console.log(greeting.toUpperCase())
console.log( greeting.toLocaleLowerCase())
console.log(greeting.indexOf("Diego"))//Indice donde encuentra la palabra Diego (4) se empieza a contar desde 0
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("dasd"))// -1 (no existe)
console.log(greeting.includes("Hola"))//Lo incluye (true)
console.log(greeting.includes("Adios"))//No lo incluye (false)
console.log(greeting.slice(0,10))

//Template literal (comillas ``)

let message = `Hola, me 
llamo diego`

console.log(message)//Imprime el mensaje tal cual, con salto de linea y demás
console.log(`Hola ${myName}`)//Sirve para poder usar las varibles sin tener que concatenarlas fuera, usando  ${}