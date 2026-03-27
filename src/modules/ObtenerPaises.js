export default async function obtenerPais(nombre) {

    const respuesta = await fetch(`https://restcountries.com/v3.1/name/${nombre}`)
    const pais = await respuesta.json()

    console.log(pais)

    }