/*2. Crie um programa que peça um número de 1 a 7 e exiba o dia da
semana correspondente utilizando a estrutura condicional switch.*/

var numero = Number(prompt('Digite um número de 1 a 7!'))
var diaSemana;
switch(numero){
    case 1: {
    document.write('O dia é Domingo');
    break;
    }
    case 2: {
        document.write('O dia é Segunda');
        break;   
    }
    case 3: {
        document.write('O dia é Terça');
        break;   
    }
    case 4: {
        document.write('O dia é Quarta');
        break;   
    }
    case 5: {
        document.write('O dia é Quinta');
        break;   
    }
    case 6: {
        document.write('O dia é Sexta');
        break;   
    }
    case 7: {
        document.write('O dia é Sábado');
        break;   
    }
}