const preço = 1000;
const parcelas = 6;
let valorParcelas;
let finalPreço;

if (parcelas === 1) {

    finalPreço = preço - (preço * (2.5 / 100))

    console.log(`Preço de tabela: R$ ${preço} \nNúmero de parcelas: ${parcelas} \n Compraa vista 2.5% de 
    desconto. \n Total: R$${finalPreço}`)

} else if (parcelas <= 5) {

    finalPreço = preço
    valorParcelas = (preço / parcelas).toFixed(2)

    console.log(`Preço de tabela: R$ ${preço} \nNúmero de parcelas: ${parcelas} \n Compra a prazo com o valor de cada parcela R$ ${valorParcelas}. \n Total: R$ ${finalPreço}`)

} else if (parcelas <= 10) {

    finalPreço = preço + (preço * (6 / 100))
    valorParcelas = (preço / parcelas).toFixed(2)

    console.log(`Preço de tabela: R$ ${preço} \nNúmero de parcelas: ${parcelas} \n Compra a prazo com acréscimo de 6% no valor de cada parcelaR$ ${valorParcelas}. \n Total: R$ ${finalPreço}`)

} else if (parcelas <= 15) {

    finalPreço = preço + preço * (13 / 100)
    valorParcelas = (preço / parcelas).toFixed(2)

    console.log(`Preço de tabela: R$ ${preço} \nNúmero de parcelas: ${parcelas} \n Compra a prazo com acréscimo de 13% no valor de cada parcelaR$ ${valorParcelas}. \n Total: R$ ${finalPreço}`)

} else {
    console.log(`Número de parcelas ivalidas`)
}