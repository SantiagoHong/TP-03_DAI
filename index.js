import leerArchivo from './src/modules/leerArchivo.js';
import agregarProducto from './src/modules/AgregarProd.js';
import * as fecha from './src/modules/FechaActual.js';
import obtenerPais from './src/modules/ObtenerPaises.js';

leerArchivo('productos.json');
agregarProducto('Coca-cola', 150);
fecha.fechaActual();
fecha.horaActual();
obtenerPais('Argentina');
