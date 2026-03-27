import fs from 'fs';

export default function BuscarProducto(nombre) {
 const dato = fs.readFileSync('productos.json', 'utf-8');
    const list = JSON.parse(dato);

    econtrado = dato.find(producto => producto.Nombre === nombre);

    if (econtrado) {
        console.log(econtrado);
    } else {
        console.log('Producto no encontrado');
    }
}