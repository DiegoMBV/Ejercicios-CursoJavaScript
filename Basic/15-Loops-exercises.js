// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for(i = 1; i < 21; i++){
    console.log(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let resultado = 0;
for(i = 1; i < 101; i++){
    resultado += i;
}

console.log(resultado)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for(i = 1; i < 51; i++){
    if( i % 2 == 0){
        console.log(i)
    }
}

let variable = 1;
while (variable <= 50){
    if (variable % 2 == 0){
        console.log(variable)
    }
    variable++
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let myArray = ["Diego", "Jose", "David"]

for(let nombre of myArray){
    console.log(nombre)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let cadena = "aeiju"
let contador = 0;
let vocales = ["a","e","i","o","u"]

for(let letra of cadena){
    if(vocales.includes(letra)){
        contador++
    }
}

console.log(`La palabra ${cadena} contiene ${contador} vocales`)


// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numeros = [2,3,2,2]
resultado = 1

for(let num of numeros){
    resultado *= num
}

console.log(resultado)
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
resultado = 1;
for(i = 0; i <= 10; i++){
    resultado = 5 * i
    console.log(`5 x ${i} es ${resultado}`)
}

// 8. Usa un bucle para invertir una cadena de texto
cadena = "hola";
resultado = "";

for(i = cadena.length ; i >= 0; i--){
    resultado += cadena.charAt(i)
}

console.log(resultado)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let primero = 0;
let segundo = 1;
resultado = 0;
console.log(primero)
console.log(segundo)
for(i = 0; i < 8; i++){
    resultado = primero + segundo
    primero = segundo
    segundo = resultado
    console.log(resultado)
}


// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10 
let arrayNum = [10,20,2,45,7,4]
let nuevoArray = [];

for(let num of arrayNum){
    if(num >= 10){
        nuevoArray.push(num)
    }
}

console.log(nuevoArray)