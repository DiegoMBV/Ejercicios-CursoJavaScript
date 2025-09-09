// 1. Escribe un comentario en una línea

//Hola me llamo Diego

// 2. Escribe un comentario en varias líneas

/* 
    Hola
    me
    llamo 
    Diego
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let cadena = "Hola"
let num = 4
let num2 = 2.2
let myundefined
let mynull = null
let mysymbol = Symbol("Este es un tipo secreto")
let myBigInt = 23324234234234234234324234234234
let myBoolean = true

// 4. Imprime por consola el valor de todas las variables

console.log(cadena,num,num2,myBoolean,mynull,mysymbol,myundefined,myBigInt)

// 5. Imprime por consola el tipo de todas las variables

 console.log(typeof(cadena))
 console.log(typeof(num))
 console.log(typeof(myundefined))
 console.log(typeof(mynull))
 console.log(typeof(mysymbol))
 console.log(typeof(myBigInt))
 console.log(typeof(myBoolean))

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

cadena = "Caracola"
num = 1212
myundefined
mysymbol = Symbol("Esto ya no es un secreto")
myBigInt = 403850350340580393530543905830350305
myBoolean = false

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

cadena = 34
num = "1212"
myundefined = 3
mysymbol = 3
myBigInt = "403850350340580393530543905830350305"
myBoolean = 4

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const cadena2 = "Hola"
const num3 = 4
const num4 = 2.2
// const myundefined2
const mynull2 = null
const mysymbol2 = Symbol("Este es un tipo secreto")
const myBigInt2 = 23324234234234234234324234234234
const myBoolean2 = true

// 9. A continuación, modifica los valores de las constantes

//cadena2 = "adios"
//num3 = 6
//num4 = 5
//mynull2 = 3
//mysymbol2 = Symbol("adasda")
//myBigInt2 = 343434344556656565656565656
//myBoolean2 = false

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse