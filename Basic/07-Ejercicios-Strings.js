
// 1. Concatena dos cadenas de texto

console.log("Hola" + " me llamo Diego")

// 2. Muestra la longitud de una cadena de texto

let cadena = "hola"
console.log(cadena.length)

// 3. Muestra el primer y último carácter de un string

console.log(cadena[0])
console.log(cadena[3])

// 4. Convierte a mayúsculas y minúsculas un string

console.log(cadena.toUpperCase())
console.log(cadena.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

let cadena2 = `Hola
caracola`

// 6. Interpola el valor de una variable en un string

console.log(`Hola, esta es mi cadena: ${cadena}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let cadena3 = "Hola caracola"
cadena3 = cadena3.replace(" ", "-")
console.log(cadena3)

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(cadena3.includes("caracola"))

// 9. Comprueba si dos strings son iguales

let igual = "hola"
let igual2 = "holo"
console.log(igual == igual2)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(igual.length == igual2.length)