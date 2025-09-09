// 1. Crea una variable para cada operación aritmética
let suma = 15 + 7;
let resta = 20 - 8;
let multiplicacion = 6 * 4;
let division = 50 / 5;
let modulo = 17 % 5;
let exponente = 3 ** 2;

// 2. Crea una variable para cada tipo de operación de asignación
let x = 10;
x += 5; // x = 15
x -= 3; // x = 12
x *= 2; // x = 24
x /= 4; // x = 6
x %= 5; // x = 1
x **= 3; // x = 1

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(10 > 5); // true
console.log(8 <= 8); // true
console.log(15 === 15); // true
console.log("hola" !== "adios"); // true
console.log(20 >= 15); // true

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(5 > 10); // false
console.log(7 === "7"); // false
console.log(12 <= 5); // false
console.log(0 == false); // false (aunque técnicamente es true por coerción, pero es falsy)
console.log(null === undefined); // false

// 5. Utiliza el operador lógico and
console.log(5 < 10 && 15 > 10); // true
console.log(true && false); // false
console.log("hola" && 15); // 15 (truthy)
console.log(0 && 20); // 0 (falsy)

// 6. Utiliza el operador lógico or
console.log(false || true); // true
console.log(0 || 15); // 15
console.log("" || "valor por defecto"); // "valor por defecto"
console.log(null || undefined); // undefined

// 7. Combina ambos operadores lógicos
console.log((5 > 3 && 10 < 15) || (2 === "2")); // true
console.log((false && true) || (10 !== "10")); // true
console.log((0 && 5) || (null || "backup")); // "backup"

// 8. Añade alguna negación
console.log(!true); // false
console.log(!(5 > 10)); // true
console.log(!(false || true)); // false
console.log(!!"hola"); // true (doble negación para convertir a boolean)

// 9. Utiliza el operador ternario
let edad = 18;
let puedeVotar = edad >= 18 ? "Puede votar" : "No puede votar";
console.log(puedeVotar);

let numero = 7;
let esPar = numero % 2 === 0 ? "Es par" : "Es impar";
console.log(esPar);

// 10. Combina operadores aritméticos, de comparación y lógicas
let resultado1 = (5 + 3 * 2) > (10 - 4) && (15 / 3) === 5;
console.log(resultado1); // true

let resultado2 = (2 ** 3 + 1) >= 10 || (20 % 6) !== 2;
console.log(resultado2); // true

let a = 10;
let b = 5;
let resultado3 = ((a + b) * 2) > (a * 3) && !(b === 0);
console.log(resultado3); // false

let resultado4 = (15 - 7) === 8 || (3 ** 2) < 10 && (20 / 4) !== 5;
console.log(resultado4); // true

let resultado5 = !((10 + 5) <= 20) || (30 % 4) === 2 && (8 * 2) > 15;
console.log(resultado5); // true