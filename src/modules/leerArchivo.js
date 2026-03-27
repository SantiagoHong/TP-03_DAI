import fs from 'fs';

export default function leerArchivo(ruta) {
  fs.readFile(ruta, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const productos = JSON.parse(data);
    console.log(productos);
  });
}