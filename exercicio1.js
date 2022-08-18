const num1 = Number(prompt("Digite o primeiro número: "));
const num2 = Number(prompt("Digite o segundo número: "));
const num3 = Number(prompt("Digite o terceiro número: "));

var maior = Math.max(num1, num2, num3);
var menor = Math.min(num1, num2, num3);

if (num1 == num2 || num1 == num3 || num2 == num3) {
    alert("Você repetiu algum número na digitação");
} else {
    console.log("A soma dos números é: ", num1 + num2 + num3);
    console.log("A média dos números é: ", (num1 + num2 + num3) / 3);
    console.log("O produto dos números é: ", (num1 * num2 * num3));
    console.log("O maior número é: ", maior);
    console.log("O menor número é: ", menor);

}
// if (num1 < num2 && num1 < num3) {
//     console.log("O menor dos números é: ", num1);
// }else if (num2 < num1 && num2 < num3) {
//     console.log("O menor dos números é: ", num2);
// }else {
//     console.log("O menor dos números é: ", num3);
// }
// if (num1 > num2 && num1 > num3) {
//     console.log("O maior dos números é: ", num1);
// }else if (num2 > num1 && num2 > num3) {
//     console.log("O maior dos números é: ", num2);
// }else {
//     console.log("O maior dos números é: ", num3);
// }