
function generarFibonacci(cantidad) {
    let fibonacciSerie = [];
    let a = 0, b = 1, temp;

    for (let i = 0; i < cantidad; i++) {
        fibonacciSerie.push(a);
        temp = a + b;
        a = b;
        b = temp;
    }

    return fibonacciSerie;
}

function solicitarNumero() {
    let num;
    while (true) {
        const input = prompt("Por favor, ingresa la cantidad de números de Fibonacci que deseas ver:");

        num = Number(input);
        if (!isNaN(num) && Number.isInteger(num) && num > 0) {
            break;
        } else {
            alert("Dato incorrecto. Debes ingresar un número entero positivo.");
        }
    }
    return num;
}

function mostrarResultado(mensaje) {
    const resultadoElemento = document.getElementById('result');
    resultadoElemento.textContent = mensaje;
}

const cantidadNumeros = solicitarNumero();
const fibonacciSerie = generarFibonacci(cantidadNumeros);
mostrarResultado(`La serie de Fibonacci con ${cantidadNumeros} números es: ${fibonacciSerie.join(", ")}.`);
