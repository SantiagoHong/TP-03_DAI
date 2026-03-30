export default function AnalizarTXT(texto) {
    console.log('EJERCICIO 8: Analizar Texto')

    console.log('Longitud del texto: ' + texto.length)
    let palabras = texto.trim().split(/\s+/)
    console.log('Número de palabras: ' + palabras.length)
    let vocales = texto.match(/[aeiou]/gi)
    console.log('Número de vocales: ' + (vocales ? vocales.length : 0))
    let consonantes = texto.match(/[b-df-hj-np-tv-z]/gi)
    console.log('Número de consonantes: ' + (consonantes ? consonantes.length : 0))
}