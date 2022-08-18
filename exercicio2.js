// Crie um algoritmo que armazenar um número inteiro positivo, e gerar um alerta com as seguintes mensagens:
// a. “Número é par!”, se o valor armazenado for par;
// b. “Número é impar!”, se o valor armazenado for ímpar;

const num = parseInt(prompt("Digite um número: "));

if (num < 0) {
    alert("Número inválido")
} else if (num % 2 == 0) {
    alert("O número é par!")
} else {
    alert("O número é impar!")
}