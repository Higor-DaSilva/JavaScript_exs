//Dia da semana por número(Switch case)
var prompt = require('prompt-sync')();
let dia = Number(prompt("Digite o dia da semana(1 a 7): "))

switch(dia){
    case 1:
    console.log("Seu dia é Domingo");
    break;
    case 2:
    console.log("Seu dia é Segunda");
    break;
    case 3:
    console.log("Seu dia é Terça");
    break;
    case 4:
    console.log("Seu dia é Quarta");
    break;
    case 5:
    console.log("Seu dia é Quinta");
    break;
    case 6:
    console.log("Seu dia é Sexta");
    break;
    case 7:
    console.log("Seu dia é Sabado");
    break;

    default:
        console.log("Dado inválido! 😢");

}
