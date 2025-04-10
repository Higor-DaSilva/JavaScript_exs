//Mostrar tabuada de um número(Use o for)
var prompt = require('prompt-sync')();
let num = Number(prompt("Digite um numero: ")); 


for (var i = 0; i <= 10; i++) {
    console.log(num,"x",i," = ",i*num);
}