//Verificar se um número é par ou ímpar
var prompt = require('prompt-sync')();
let num = prompt("digite um numero: ")

if(num %2 == 0)
{
    console.log("O numero é par: " +num)
}else if(num %2 == 1)
{
    console.log("O numero é ímpar: " +num)
}