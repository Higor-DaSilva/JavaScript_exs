//Um sistema de controle de presença precisa listar os alunos que
//compareceram à aula.(usando ForEach)

var prompt = require('prompt-sync')();

let alunosPresentes = [];
let qtd = parseInt(prompt("Quantos alunos compareceram à aula? "));

for (let i = 0; i < qtd; i++) {
  let nome = prompt("Digite o nome do aluno " + (i + 1) + ": ");
  alunosPresentes.push(nome);
}

console.log("\nLista de alunos presentes:");
alunosPresentes.forEach(function(aluno) {
  console.log("- ", aluno);
});