//b. Uma escola quer registrar as turmas disponíveis para o turno da manhã.

// var prompt = require('prompt-sync')();

// let num = Number(prompt("Quantas turmas estao disponiveis: "));
// let turmas = [];
// for(var  i = 0; i <= num; i++)
// {
//     let turmas = prompt("nome das turmas: ");
//     turma
// }
// console.log(turmas);


var prompt = require('prompt-sync')();
let turmasManha = [];
let quantidade = parseInt(prompt("Quantas turmas você quer cadastrar? "));

for (let i = 0; i < quantidade; i++) {
  let turma = prompt("Digite o nome da turma " + (i + 1) + ": ");
  turmasManha.push(turma);
}

console.log("\nTurmas do turno da manhã:");
for (let i = 0; i < turmasManha.length; i++) {
  console.log("- ", turmasManha[i]);
}