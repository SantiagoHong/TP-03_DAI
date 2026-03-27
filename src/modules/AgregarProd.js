import fs from 'fs'
 
export default function agregarProducto(nombre, precio) {
    const dato = fs.readFileSync('productos.json', 'utf-8')
    const list = JSON.parse(dato)
    const nuevo = { nombre, precio}
    list.push(nuevo)
    fs.writeFileSync('productos.json', JSON.stringify(list))
}
