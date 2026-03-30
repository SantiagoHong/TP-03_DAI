export default function temportizador() {
    let contador = 0;
    console.log('EJERCICIO 7: Temporizador')
    const intervalo = setInterval(() => {
    contador++
    console.log(contador)
    
    if (contador === 10) {
        clearInterval(intervalo)
        console.log("Fin del contador")
    }
    }, 1000); // Son 1 segundo9
 }