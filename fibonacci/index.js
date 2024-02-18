import input from "../readInput.js";
import chalk from 'chalk';

const numeroRecebido = parseInt(input(chalk.yellow('Insira um número: ')));

let a = 0;
let b = 1;
let sequenciaFibonacci = [];

for(let indice = 0; indice < numeroRecebido; indice++) {
    let fibonacci = a + b;
    b = a;
    a = fibonacci;

    sequenciaFibonacci.push(fibonacci);

    if(fibonacci === numeroRecebido) {
        const numeroEncontrado = true;
        emitirMensagem(numeroEncontrado);
        break;
    } else if (fibonacci > numeroRecebido) {
        const numeroEncontrado = false;
        emitirMensagem(numeroEncontrado);
        break;
    }
}

function emitirMensagem(numeroEncontrado) {
    if(numeroEncontrado) {
        console.log(chalk.green(`O número [${numeroRecebido}] que você digitou faz parte da sequência de Fibonacci. Segue sequência: ${sequenciaFibonacci}`));
    } else {
        console.log(chalk.red(`O número [${numeroRecebido}] que você digitou não faz parte da sequência de Fibonacci. Segue sequência: ${sequenciaFibonacci}`));
    }
}

