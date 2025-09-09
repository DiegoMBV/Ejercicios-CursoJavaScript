// 1. Imprime por consola tu nombre si una variable toma su valor
let miNombre = "Ana";
if (miNombre === "Ana") {
    console.log("Mi nombre es Ana");
}

// 2. Imprime por consola un mensaje si el usuario y contraseña coinciden con unos establecidos
let usuario = "admin";
let contraseña = "1234";

if (usuario === "admin" && contraseña === "1234") {
    console.log("Acceso concedido. Bienvenido!");
} else {
    console.log("Usuario o contraseña incorrectos");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = -5;
if (numero > 0) {
    console.log("El número es positivo");
} else if (numero < 0) {
    console.log("El número es negativo");
} else {
    console.log("El número es cero");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 16;
if (edad >= 18) {
    console.log("Puede votar");
} else {
    let añosFaltantes = 18 - edad;
    console.log(`No puede votar. Le faltan ${añosFaltantes} años`);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
let edadPersona = 20;
let categoria = edadPersona >= 18 ? "adulto" : "menor";
console.log(`La persona es ${categoria}`);

// 6. Muestra en qué estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 3; // Marzo
let estacion;

if (mes === 12 || mes === 1 || mes === 2) {
    estacion = "Invierno";
} else if (mes >= 3 && mes <= 5) {
    estacion = "Primavera";
} else if (mes >= 6 && mes <= 8) {
    estacion = "Verano";
} else if (mes >= 9 && mes <= 11) {
    estacion = "Otoño";
} else {
    estacion = "Mes inválido";
}
console.log(`Estamos en ${estacion}`);

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let mesDias = 2; // Febrero
let dias;

if (mesDias === 2) {
    dias = 28; // o 29 en año bisiesto
} else if (mesDias === 4 || mesDias === 6 || mesDias === 9 || mesDias === 11) {
    dias = 30;
} else if (mesDias >= 1 && mesDias <= 12) {
    dias = 31;
} else {
    dias = "Mes inválido";
}
console.log(`El mes tiene ${dias} días`);

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "español";

switch (idioma) {
    case "español":
        console.log("¡Hola!");
        break;
    case "inglés":
        console.log("Hello!");
        break;
    case "francés":
        console.log("Bonjour!");
        break;
    case "alemán":
        console.log("Hallo!");
        break;
    default:
        console.log("Idioma no reconocido");
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
let mesSwitch = 7;
let estacionSwitch;

switch (mesSwitch) {
    case 12:
    case 1:
    case 2:
        estacionSwitch = "Invierno";
        break;
    case 3:
    case 4:
    case 5:
        estacionSwitch = "Primavera";
        break;
    case 6:
    case 7:
    case 8:
        estacionSwitch = "Verano";
        break;
    case 9:
    case 10:
    case 11:
        estacionSwitch = "Otoño";
        break;
    default:
        estacionSwitch = "Mes inválido";
}
console.log(`Con switch: Estamos en ${estacionSwitch}`);

// 10. Usa un switch para hacer de nuevo el ejercicio 7
let mesDiasSwitch = 4;
let diasSwitch;

switch (mesDiasSwitch) {
    case 2:
        diasSwitch = 28;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        diasSwitch = 30;
        break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        diasSwitch = 31;
        break;
    default:
        diasSwitch = "Mes inválido";
}
console.log(`Con switch: El mes tiene ${diasSwitch} días`);