// Loops o bucles

// for

for (let i = 0; i < 5; i++) {
    console.log(`Hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i = 0; i < numbers.length; i++) {
    console.log(`Elemento: ${numbers[i]}`)
}

// while

let i = 0
while (i < 5) {
    console.log(`Hola ${i}`)
    i++
}

// Bucle infinito
// while(true) {
// }

// do while

i = 6
do {
    console.log(`Hola ${i}`)
    i++
} while (i < 5)

// for of

//Para recorrer algo, tiene que ser posible recorrerlo(Iterarlo)
//Cosas como los arrays, set y map son estructuras iterables(se pueden recorrer posicion por posicion)

const myArray = [1, 2, 3, 4]

const mySet = new Set(["Diego", "Martinez", "Dito", 19, true, "test@test.com"])

const myMap = new Map([
    ["name", "Diego"],
    ["email", "test@test.com"],
    ["age", 19]
])

//Un string también es iterable ya que es una cadeana de caracteres
const myString = "¡Hola, JavaScript!"

//Creamos una varible que tomará el valor de cada posición y con ella podremos mostrarla, 
//manipularla y demás

for (let value of myArray) {
    console.log(value)
}

for (let value of mySet) {
    console.log(value)
}

for (let value of myMap) {
    console.log(value)
}

//Mostrará cada letra una por una de la cadena de texto 
for (let value of myString) {
    console.log(value)
}

