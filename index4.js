/*4. O custo de um carro novo ao consumidor é a soma do custo de
fábrica com a porcentagem do distribuidor e dos impostos
(aplicados ao custo de fábrica). Supondo que o percentual do
distribuidor seja de 28% e os impostos de 45%, escrever um
algoritmo para ler o custo de fábrica de um carro,calcular e escrever
o custo final ao consumidor.*/

var custoCarro = Number(prompt('Digite o valor de fábrica do carro'))
var taxaDistribuidor = (custoCarro * 28) /100
var taxaImpostos = (custoCarro * 45) /100
var valorTotal = custoCarro + taxaDistribuidor + taxaImpostos

document.write(`O custo de fábrica do carro é ${custoCarro}`)
document.write(`A taxa de distribuição é ${taxaDistribuidor}`)
document.write(`O taxa de impostos é ${taxaImpostos}`)
document.write(`O custo total do carro é ${valorTotal}`)