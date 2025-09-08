function Precio_e_iva(precio){
    iva = precio * 21 / 100
    resultado = precio + iva
    return resultado
}

console.log(Precio_e_iva(200))