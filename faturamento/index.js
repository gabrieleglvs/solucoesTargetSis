import fs from 'fs';
import chalk from 'chalk';

fs.readFile('faturamento/dados.json', 'utf8', (erro, data) => {
    if(erro) {
        console.error('Erro ao ler o arquivo', erro);
    }
    let dados = JSON.parse(data);
    
    let novoArrayDados = dados.filter((dado) => {
        return dado.valor > 0;
    })

    let arrayValores = novoArrayDados.map((dado) => {
        return Number(dado.valor.toFixed(2));
    })
    
    encontrarMenorEMaiorValor(arrayValores);

    function calcularDiasFaturamentoSuperior(arrayValores, mediaMensal) {
        let quantidadeDias = arrayValores.filter((dia) => {
            if(dia > mediaMensal) {
                return dia;
            }
        })

        console.log(chalk.yellow(`Número de dias no mês que o faturamento foi superior à média mensal: ${quantidadeDias.length}`));
    }

    function calcularMediaMensal(arrayValores) {
        let soma = 0;
        for(let indice = 0; indice < arrayValores.length; indice++) {
            soma += arrayValores[indice];
        }        

        let mediaMensal = soma / arrayValores.length;
        
        calcularDiasFaturamentoSuperior(arrayValores, mediaMensal);
    }

    function encontrarMenorEMaiorValor(arrayValores) {
        let menorValor = arrayValores.reduce((menor, atual) => {
            return menor < atual ? menor : atual;
        });

        let maiorValor = arrayValores.reduce((maior, atual) => {
            return maior > atual ? maior : atual;
        })

        console.log(chalk.red(`O menor valor de faturamento em um dia do mês: ${menorValor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`));
        console.log(chalk.green(`O maior valor de faturamento em um dia do mês: ${maiorValor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`));

        calcularMediaMensal(arrayValores);
    }
})






