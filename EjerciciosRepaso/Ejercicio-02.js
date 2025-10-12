Array.prototype.cuantasVecesEsta = function(numero){
    let cont = 0;
    for (let i = 0; i < this.length; i++) {
        if(numero == this[i]){
            cont++
        }
    }
    return cont;
}

let lista = [1,2,3,4,5,1,1,8,9,1,3,4,1]

console.log(lista.cuantasVecesEsta(1))

Date.prototype.añoNuevo = function(){
    let año = this.getFullYear() + 1
    let añoNuevo = new Date(año, 0 , 1)
    let milisegundos = añoNuevo.getTime() - this.getTime()
    let dias = milisegundos / 1000 / 60 / 60 / 24
    return parseInt(dias)
}

let fechaActual = new Date(2025, 9, 11)
console.log(fechaActual.añoNuevo())


class ContraseñaSegura{
    constructor(longitud_){
        this.longitud = longitud_
        this.contraseña = "";
    }

    generarContraseñas(){
        let caracteres = "abcdefghijklmnñopqrstuvwxyzABCDEFGEHIJKLMNÑOPQRSTUVWXYZ123456789"

        for (let i = 0; i < this.longitud; i++) {
            this.contraseña += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
        }
        return this.contraseña;
    }

    esFuerte(){
        let numeros = 0;
        let mayus = 0; 
        let minus = 0;
        for (let i = 0; i < this.longitud; i++) {
            if(!isNaN(this.contraseña.charAt(i))){
                numeros++;
            }else if(this.contraseña.charAt(i) == this.contraseña.charAt(i).toLocaleLowerCase()){
                minus++;
            }else{
                mayus++;
            }
        }

        if(mayus >= 6 && minus >= 3 && numeros >= 2){
            return true
        }else{
            return false
        }
    }
}

let contraseña = new ContraseñaSegura(6);
console.log(contraseña.generarContraseñas())
console.log(contraseña.esFuerte())

let contador = 0
while(contador < 10){
    let longitud = Math.floor(Math.random() * 20)

    if(longitud >= 12 && longitud <= 20){
        let objeto = new ContraseñaSegura(longitud)
        console.log(objeto.generarContraseñas())
        console.log(objeto.esFuerte())
        contador++;
    }
}
