//set 

//Declaración

let set = new Set()
// ! let set2 = {} //Esto no es un set

console.log(set)

//Inicialización

set = new Set(["mbv", "Martinez", "Diego", 37, true])

console.log(set)

//Métodos comunes

// add y delete

set.add("Dato nuevo")
console.log(set)

set.delete("Dato nuevo")//No funciona siguiendo un indice, ponerle la posicion(2,3..) no va, solo elimina por valores
console.log(set)

console.log(set.delete("mbv"))//true si lo borra
console.log(set.delete("mbv"))//false si no lo borra

// has

//Comprobar si existe un elemento 

set.has("Diego")
set.has("hola")