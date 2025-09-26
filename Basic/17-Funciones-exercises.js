// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function suma(a,b){
    return a + b
}
console.log(suma(3,5))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let myarray = [4,7,2,180,5,4,8]
function mayorQue(array){
    let mayor = 0;
    for(let num of array){
        if(num > mayor){
            mayor = num
        }
    }
    return mayor
}
console.log(mayorQue(myarray))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
let cadena = "holae"
function numVocales(cadena){
    let vocales = ["a","e","i","o","u"]
    let contador = 0;
    for(let caracter of cadena){
        if(vocales.includes(caracter)){
            contador++
        }
    }
    return contador
}

console.log(numVocales(cadena))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
let minusArray = ["hola", "caracola"]
function paraMayus(cadena){
    let nuevo = []
    for(let palabra of cadena){
        nuevo.push(palabra.toUpperCase())
    }

    return nuevo
}

console.log(paraMayus(minusArray))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function primoNoPrimo(num){
    if(num % 2 == 0){
        return true
    }else{
        return false
    }
}

console.log(primoNoPrimo(3))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
let primero = ["hola", "adios", 4]
let segundo = ["hola", "dsds", 6, 4]
function comunes(array, array2){
    let nuevos = []
    for(let comunes of array){
        if(array2.includes(comunes)){
            nuevos.push(comunes)
        }
    }
    return nuevos
}

console.log(comunes(primero, segundo))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

let siete = [1,2,3,4,5,6,7,10,8,9]
function sumaArray(array){
    let result = 0;
    for(let par of array){
        if(par % 2 == 0){
            result += par
        }
    }
    return result
}

console.log(sumaArray(siete))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
let ocho = [2,4]
function elevado(array){
    let ochocho = []
    for(let dir of array){
        ochocho.push(dir ** 2)
    }
    return ochocho
}

console.log(elevado(ocho))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
let nueve = "caracola hola"
function delreves(cadena){
    return cadena.split(" ").reverse().join(" ");
}

console.log(delreves(nueve))

// 10. Crea una función que calcule el factorial de un número dado
let num = 5;
function factorial(num){
    let resul=1 ;
    for(i = 1; i <= num ; i++){
        resul *= i
    }
    return resul
}
console.log(factorial(num))