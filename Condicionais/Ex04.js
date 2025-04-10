//Verificar se uma senha digitada está correta
var prompt = require('prompt-sync')();
let senha = Number(prompt("Digite sua senha: "))
let senhaValida = Number(prompt("Recoloque sua senha: "))

if(senha == senhaValida)
{
    console.log("A senha está Valida");
}else
{
    console.log("A senha esta Invalida");
}