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

//Métodos comunes
myArray = []

//push y pop

myArray.push("Diego")
myArray.push("Martinez")

console.log(myArray)

//console.log(myArray.pop())
//myArray.pop() //Elimina el ultimo elemento del array y lo devuelve


console.log(myArray)

//shift y unshift

console.log(myArray.shift())//Elimina el primer elemento del array y lo devuelve

myArray.unshift("Diego", "diego")//agrega uno o mas elementos al principio de un array
console.log(myArray)//[ 'Diego', 'diego', 'Martinez' ]

console.log(myArray.length)

//clear(borrar el contenido del array)
myArray = [] //borra todo el contenido del array(recomendable)
myArray.length = 0 //alternativa


myArray.push("diego", "Martinez",45)
myArray.slice(1,2)

let myNewArray = myArray.slice(1,3)

console.log(myArray)
console.log(myNewArray)

//splice

myArray.splice(1,3)//elimina los elementos(Desde que elemento quieres empezar?, desde el 1, cuantos elementos quieres borrar? 3)

myArray = ["diego", "Martinez",45]
myArray.splice(1,2,3)//Elimina desde el elemento 1, 2 elementos y añade el 3
console.log(myArray)
