// Symbol

// ? Un Symbol es un valor único que se usa normalmente como clave oculta en objetos.
let mySymbol = Symbol("mysymbolo");

// ----------------------------
// * Ejemplo básico
// ----------------------------
const user = {
  name: "Diego",
  age: 19,
};

// ? Creamos un Symbol como clave "privada"
const secreto = Symbol("id");
user[secreto] = 123;

console.log(user);
// ! { name: "Diego", age: 19, [Symbol(id)]: 123 }

// ----------------------------
// * Propiedades con Symbol
// ----------------------------
// ? Si haces un console.log(user), el Symbol se ve en consola,
// ! PERO no es accesible como un string normal.

const user2 = { nombre: "Diego" };
const secret = Symbol("miClave");

user2[secret] = 123;

console.log(user2);
// ! { nombre: "Diego", [Symbol(miClave)]: 123 }

// ----------------------------
// * Acceso con string (NO funciona)
// ----------------------------
console.log(user2["miClave"]); 
// ! undefined ❌

// ----------------------------
// * Acceso con el Symbol original (sí funciona)
// ----------------------------
console.log(user2[secret]); 
// ✅ 123

// ----------------------------
// * No aparece en for...in ni en Object.keys
// ----------------------------
console.log(Object.keys(user2)); 
// ? ["nombre"]

for (let key in user2) {
 console.log(key);
}
// ? nombre

// ============================
// * RESUMEN
// ============================
// ? 1. Cada Symbol es único.
// ? 2. Se usan como claves ocultas en objetos.
// ? 3. No aparecen en for...in ni Object.keys.
// ! Solo puedes acceder con el Symbol original.
