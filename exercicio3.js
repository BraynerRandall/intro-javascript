const ladoA = Number(prompt("Digite o primeiro número: "));
const ladoB = Number(prompt("Digite o segundo número: "));
const ladoC = Number(prompt("Digite o terceiro número: "));

if (ladoA < (ladoB + ladoC) && ladoB < (ladoA + ladoC) && ladoC < (ladoA + ladoB)) {
    alert("Você formou um triângulo!");
    if (ladoA == ladoB && ladoB == ladoC) {
        console.log("Triângulo equilátero");
    } else if (ladoA != ladoB && ladoB != ladoC && ladoA != ladoC) {
        console.log("Triângulo escaleno");
    } else if (ladoA == ladoB || ladoB == ladoC || ladoA == ladoC) {
        console.log("Triângulo isósceles");
    }
} else {
    alert("Você não formou um triângulo");
}