import fs from 'fs';
 
export default function agregarProducto(Nombre, Precio) {
    const dato = fs.readFileSync('productos.json', 'utf-8');
    const list = JSON.parse(dato);
    const nuevo = { Nombre, Precio };
    list.push(nuevo);
    fs.writeFileSync('productos.json', JSON.stringify(list));
}
