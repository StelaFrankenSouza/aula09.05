/*1. Escreva um algoritmo para ler uma temperatura em graus Celsius,
calcular e escrever o valor correspondente em graus Fahrenheit.*/

var temperatura = Number(prompt('Digite a temperatura!'))
var fahrenheit = temperatura * 1.8 + 32

document.write(`A temperatura em Celsius quando convetida para Fahrenheit é ${fahrenheit} `)