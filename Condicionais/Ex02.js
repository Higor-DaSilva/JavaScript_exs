//Verificar se o usuário pode tirar carteira de motorista

var prompt = require('prompt-sync')();
let idade = Number ( prompt("Olá, digite sua idade: "));

// console.Let("Qual a sua idade?");

if(idade >= 18)
{
    console.log("Voce podera poderar tirar a carteira");
}else if(idade < 18){
    console.log("Voce nao podera tirar a carteira")
}else{
    console.log("Essa infomacao não é valida")
}