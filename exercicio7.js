const vBrancos = Number(prompt("Quantos foram os votos em branco? "));
const vNulos = Number(prompt("Quantos foram os votos nulos? "));
const vValidos = Number(prompt("Quantos foram os votos válidos? "));
const vEleitores = vBrancos + vNulos + vValidos;

let perValidos = (vValidos / vEleitores) * 100;
let perNulos = (vNulos / vEleitores) * 100;
let perBrancos = (vBrancos / vEleitores) * 100;

if (vEleitores >= perBrancos + perNulos + perValidos) {
    document.write(`O percentual de votos válidos foi de ${perValidos.toFixed(2)}% <br>`);
    document.write(`O percentual de votos nulos foi de ${perNulos.toFixed(2)}% <br>`);
    document.write(`O percentual de votos em branco foi de ${perBrancos.toFixed(2)}%`);
} else {
    alert(`FRAUDE!!`);
}