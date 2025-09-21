// 1. Crea un array que almacene cinco animales

let myArray = ["cabra", "obeja", "lobo", "tiburon", "tortuga"]

// 2. Añade dos más. Uno al principio y otro al final

myArray.push("escarabajo")//Ultimo
myArray.unshift("caballo")//Primero
console.log(myArray)

// 3. Elimina el que se encuentra en tercera posición
myArray.splice(3,1)
console.log(myArray)


// 4. Crea un set que almacene cinco libros
let mySet = new Set(["Harry potter","Doce","Cincuenta", "Cinderela", "Vaian"])
console.log(mySet)

// 5. Añade dos más. Uno de ellos repetido
mySet.add("Dichos")
mySet.add("Cincuenta")//No se añade ya que set no admite duplicados

// 6. Elimina uno concreto a tu elección
mySet.delete("Cincuenta")
console.log(mySet)

// Mapa que asocia el número del mes a su nombre
let myMap = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
]);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (myMap.has(5)){
    console.log(myMap.get(5))
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
myMap.set("Meses de verano", ["Junio", "Julio","Agosto"])
console.log(myMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let myArray2 = [1,2,3,4,5,6,7]
myArray2 = new Set(myArray2)
myMap.set("Array", myArray2)
console.log(myMap)