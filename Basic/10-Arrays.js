//Array

//Declaración

let myArray = [] //Más recomendado
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

//Inicialización

myArray = [1] 
myArray2 = new Array(1)

console.log(myArray)
console.log(myArray2)

myArray = [1,2,3,4] 
myArray2 = new Array(1,2,3,4)


console.log(myArray)
console.log(myArray2)

myArray = ["diego", "Martinez"] 
myArray2 = new Array("Diego","Martinez")


console.log(myArray)
console.log(myArray2)

myArray = ["diego", 1] 
myArray2 = new Array("Diego",1)


console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = "Diego"
myArray2[1] = "Hola"
myArray2[2] = "caracola"

console.log(myArray2)