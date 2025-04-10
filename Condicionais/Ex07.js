// Verificar o mês pelo número(Switch case)

var prompt = require('prompt-sync')();
let mes = Number(prompt("digite o numero do mes(1 a 12): "))

switch(mes){
    case 1:
        console.log("Seu mês é Janeiro");
        break;
        case 2:
        console.log("Seu mês é Fevereiro");
        break;
        case 3:
        console.log("Seu mês é Março");
        break;
        case 4:
        console.log("Seu mês é Abril");
        break;
        case 5:
        console.log("Seu mês é Maio");
        break;
        case 6:
        console.log("Seu mês é Junho");
        break;
        case 7:
        console.log("Seu mês é Julho");
        break;
        case 8:
        console.log("Seu mês é Agosto");
        break;
        case 9:
        console.log("Seu mês é Setembro");
        break;
        case 10:
        console.log("Seu mês é Outubro");
        break;
        case 11:
        console.log("Seu mês é Novembro");
        break;
        case 12:
        console.log("Seu mês é Dezembro");
        break;
    
        default:
            console.log("Dado inválido! 😢");
}
