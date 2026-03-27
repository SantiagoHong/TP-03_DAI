import leerArchivo from './src/modules/leerArchivo.js'
import agregarProducto from './src/modules/AgregarProd.js'
import * as fecha from './src/modules/FechaActual.js'
import obtenerPais from './src/modules/ObtenerPaises.js'
import BuscarProducto from './src/modules/buscarProducto.js'
import generarCSV from './src/modules/generarCSV.js'
import temportizador from './src/modules/temportizador.js'

leerArchivo('productos.json')
agregarProducto('Coca-cola', 150)
fecha.fechaActual()
fecha.horaActual()
obtenerPais('Argentina')
BuscarProducto('Teclado')
generarCSV()  
temportizador()