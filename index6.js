/*6. Escreva um algoritmo que solicite 2 números e uma operação
matemática. O algoritmo deve realizar o cálculo com os 2 números
digitados conforme a operação informada.*/

var numero1 = Number(prompt("Digite um número!"))
var numero2 = Number(prompt('Digite outro número!'))
var operação = prompt("Escolha uma operação matemática, (+), (-), (*), (/)")

var resultado;

switch(operação){
    case "+": {
       resultado = numero1 + numero2
        console.log(`O resultado é ${resultado}`);
    break;

    }

    case "-": {
        resultado = numero1 - numero2
        console.log(`O resultado é ${resultado}`);
    break;

    }
    case "*": {
        resultado = numero1 * numero2
        console.log(`O resultado é ${resultado}`);
    break;

    }
    case "/": {
       resultado = numero1 / numero2
       console.log(`O resultado é ${resultado}`);
    break;

    }
    default:
        console.log(`Operador inválido!`);
}