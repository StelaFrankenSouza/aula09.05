/*3. Crie um programa que peça um número e verifique se ele é positivo,
negativo ou zero.*/

var numero = Number(prompt('Digite um número!'))

if(numero > 0){
    console.log(`O número ${numero} é positivo!`);
}else if(numero < 0){
    console.log(`O número ${numero} é negativo!`)
}else{
    console.log(`O número ${numero} é 0`);
}