const edadJubilacion = 65;
class Persona{
    constructor(nombre_, edad_, genero_){
        this.nombre = nombre_,
        this.edad = edad_,
        this.genero = genero_
    }
    obtenerDetalles(){
        return `${this.nombre} tiene ${this.edad} años` //Usar las template literal (``) para meter valores de variables ${}
    }

    añosJubilacion(){
        return edadJubilacion - this.edad;
    }
}

class Estudiante extends Persona{
    constructor(nombre_,edad_,genero_,curso_,grupo_ ){
        super(nombre_,edad_,genero_),
        this.curso = curso_,
        this.grupo = grupo_
    }

    obtenerTipo(){
        return  this.obtenerDetalles() + " y es estudiante"
    }
}

class Profesor extends Persona{
    constructor(nombre_,edad_,genero_,asignatura_,nivel_) {
        super(nombre_,edad_,genero_),
        this.asignatura = asignatura_,
        this.nivel = nivel_
    }
}

let Persona1 = new Estudiante("Diego", 19, "Masculino", "Segundo", "Cinco");
console.log(Persona1.obtenerDetalles())
console.log(Persona1.obtenerTipo())

let plantilla = [];
for (let i = 0; i < 5; i++) {
    let estudiante = new Estudiante(`Estudiante${i + 1}`, 18 + i, "Masculino", "Segundo", "Cinco");
    let profesor = new Profesor(`Profesor${i + 1}`, 35 + i, "Femenino", "Matemáticas", "Tres");

    plantilla.push(estudiante, profesor);
}

plantilla.forEach((persona) => console.log(persona.obtenerDetalles()));

let plantilla2 = plantilla.map((persona) => `${persona.obtenerDetalles()} y le quedan ${persona.añosJubilacion()} años para jubilarse`)

console.log(plantilla2)

let profesorAlto1 = new Profesor("Diego", 19, "Masculino", "Segundo", "Nivel Alto")
let profesorBajo = new Profesor("Maria", 19, "Femenina", "Segundo", "Nivel Bajo")

let plantilla3 = [profesorAlto1, profesorBajo]

let plantilla4 = plantilla3.filter(profesorAlto)

//Usando el value.(propiedad) puedes comparar y hacer uso de las propiedades del objeto
function profesorAlto(value, index, array){
    if(value.nivel == "Nivel Alto"){
        return value
    }
}
console.log(plantilla4)

let agrupacion = Object.groupBy(plantilla, (persona) => persona.genero)
console.log(agrupacion)

//Importante usar el value.(propiedad) porque si pones solo value te va a dar siempre false porque no sabe 
//que propiedad coger
function masDieciocho(value){
    return value.edad >=  18
}
console.log(plantilla.every(masDieciocho))
