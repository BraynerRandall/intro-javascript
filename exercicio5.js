let A = 10;
let B = 20;
console.log(`O valor de A é ${A}`);
console.log(`O valor de B é ${B}`);

let C = A;


A = B;
console.log(`O valor de A é ${A}`);
B = C;
console.log(`O valor de B é ${B}`);