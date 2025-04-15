var prompt = require('prompt-sync')();

let idade;

do {
    idade = parseInt(prompt("Digite sua idade (>= 0): "));
} while (isNaN(idade) || idade < 0);

console.log("Idade válida digitada:", idade);