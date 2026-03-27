import fs from 'fs'

export default function BuscarProducto(nombre) {
    const dato = fs.readFileSync('productos.json', 'utf-8')
    const list = JSON.parse(dato)

    const econtrado = list.find(producto => producto.nombre === nombre)

    if (econtrado) {
        console.log('Producto encontrado')
        console.log(econtrado)
    } else {
        console.log('Producto no encontrado')
    }
}