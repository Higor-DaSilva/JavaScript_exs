//Verificar se um aluno foi aprovado
var prompt = require('prompt-sync')();
let nota = Number(prompt("digite a nota do aluno: "))

if(nota >= 7)
{
    console.log("O aluno foi aprovado");

}else if(nota >= 5 && nota < 7)
{
    console.log("o aluno está de recuperacao");

}else{
    console.log("O aluno foi reprovado");
}