import fs from 'fs'
import json2csv from 'json2csv'

export default function generarCSV() {

    const archivo = JSON.parse(fs.readFileSync('productos.json', 'utf-8'))  
    const CSV = json2csv.parse(archivo)

    fs.writeFileSync('productos.csv', CSV)
    console.log('Archivo CSV generado exitosamente')

}   