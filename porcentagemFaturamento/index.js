import dados from "./dados.js";
import chalk from 'chalk';

function mostrarPorcentagem(arrayPorcentagem, faturamentoTotal) {
    for (let indice = 0; indice < dados.length; indice++) {
        console.log(chalk.blue(`${dados[indice].estado} | FATURAMENTO: ${dados[indice].faturamento.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} - PORCENTAGEM DE FATURAMENTO: ${arrayPorcentagem[indice]}`));
    }

    console.log(chalk.green(`FATURAMENTO TOTAL: ${faturamentoTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`));
}

function calcularPorcentagem(faturamentoTotal) {
    let arrayPorcentagem = [];
    
    for(let indice = 0; indice < dados.length; indice++) {
        let porcentagem = (dados[indice].faturamento / faturamentoTotal).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 1, maximumFractionDigits: 2});

        arrayPorcentagem.push(porcentagem);
    }
    mostrarPorcentagem(arrayPorcentagem, faturamentoTotal);
}

function calcularTotalFaturamento() {
    let soma = 0;
    
    for(let indice = 0; indice < dados.length; indice++) {
        soma += dados[indice].faturamento;
    }
    
    let faturamentoTotal = Number(soma.toFixed(2));

    calcularPorcentagem(faturamentoTotal);
}

calcularTotalFaturamento();

