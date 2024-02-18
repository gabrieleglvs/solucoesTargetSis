import input from "../readInput.js";
import chalk from "chalk";

const palavra = input(chalk.yellow('Digite uma palavra: '));

let inverso = '';

for(let indice = palavra.length - 1; indice >= 0 ; indice--) {
    inverso += palavra[indice];
}

console.log(chalk.green(`Palavra invertida: ${inverso}`));