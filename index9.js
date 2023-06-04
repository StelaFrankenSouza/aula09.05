/*9. Escreva um programa que pergunte a velocidade de um carro. Caso
ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
km acima da velocidade permitida.*/

var velocidadeCarro = Number(prompt("Digite a velocidade do carro!"));
var multa = 5
var velocidadeExcedida = velocidadeCarro - 80
var valorMulta = velocidadeExcedida * multa

if(velocidadeCarro > 80){
        velocidadeExcedida * multa
        console.log(`Você ultrapassou o limite! Foi multado! O valor da multa é ${valorMulta}`);
}
else{
    console.log(`Você é um bom motorista!!`);
} 
