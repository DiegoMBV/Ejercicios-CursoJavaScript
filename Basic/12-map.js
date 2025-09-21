//map

//Declaración  

let myMap = new Map()
console.log(myMap) //Map(0) {}

//Inicialización

myMap = new Map([
    ["name", "Diego"],
    ["email", "Diego@gmail.com"],
    ["age", 19]
])
console.log(myMap) //Map(3) { 'name' => 'Diego', 'email' => 'Diego@gmail.com', 'age' => 19 }

//Métodos y propiedades

//set

myMap.set("alias", "dito")
console.log(myMap) //Map(3) { 'name' => 'Diego', 'email' => 'Diego@gmail.com', 'age' => 19, 'alias' => 'dito' }
myMap.set("name", "Diegork")
console.log(myMap) //Modifica el valor de name, si la key no existe, la crea, si si existe, modifica el valor

//get
console.log(myMap.get("name"))//Diegork
console.log(myMap.get("surname"))//undefined

//keys, values y entries

console.log(myMap.keys())//Nombre de las keys
console.log(myMap.values())//Nombre de las valores
console.log(myMap.entries())//Retorna un mapa con la clave y el valor

//has -> comprueba si una key existe o no -> boolean
console.log(myMap.has("surname"))//false

// delete 

myMap.delete("name")
console.log(myMap)

//clear -> borra todo el mapa

myMap.clear()
console.log(myMap)

//size

myMap.size
console.log(myMap.size)

