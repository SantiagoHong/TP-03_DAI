import fs from 'fs'

export default function BuscarProducto(nombre) {
    const dato = fs.readFileSync('productos.json', 'utf-8')
    const list = JSON.parse(dato)

    const econtrado = list.find(producto => producto.nombre === nombre)

    console.log('EJERCICIO 5: Buscar Producto')
    if (econtrado) {
        console.log('Producto encontrado')
        console.log(econtrado)
    } else {
        console.log('Producto no encontrado')
    }
}