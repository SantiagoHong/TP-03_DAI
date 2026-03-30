export default function ValidarPassword(password) {
    const regex = /^(?=.*\d)(?=.*[A-Z]).{8,}$/
    console.log('EJERCICIO 9: Validar Password')
    if (regex.test(password)) {
        console.log('La contraseña es válida: ' + password)
    } else {
        console.log('La contraseña no es válida: ' + password)
    }  
}