// 4. Escreva um algoritmo que armazene o ano atual e o ano de nascimento de uma pessoa. 
// Escrever uma mensagem no console que diga se ela poderá ou não votar este ano 
// (não é necessário considerar o mês em que a pessoa nasceu).

const anoAtual = 2022;
const anoNasc = Number(prompt("Digite o ano que você nasceu: "));

if (anoAtual - anoNasc >= 16) {
    console.log("Poderá votar esse ano!");
} else {
    console.log("Não poderá votar esse ano!");
}