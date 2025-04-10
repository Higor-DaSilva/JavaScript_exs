//Verificar se um número é positivo, negativo ou zero.
var prompt = require('prompt-sync')();
let num = prompt("digite um numero, (negativo/positivo): ");

if(num == 0)
{
    console.log("O numero é zero: " +num)

}else if(num > 0)
{
    console.log("o numero é positivo: " +num)

}else if(num < 0)
{
    console.log("o numero é negativo: " +num)
}