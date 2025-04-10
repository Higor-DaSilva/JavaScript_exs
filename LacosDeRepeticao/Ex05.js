var prompt = require('prompt-sync')();

let opcao = 0;

do {
    console.log("+-----------------------------+");
    console.log("|           Menu              |");
    console.log("|  1) Reiniciar tudo          |");
    console.log("|  2) Sair                    |");
    console.log("+-----------------------------+");

    opcao = parseInt(prompt("Escolha uma opção: "));

    switch (opcao) {
        case 1:
            console.log("Reiniciando tudo...");
           
            break;
        case 2:
            console.log("Saindo do programa...");
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
    }

    console.log(); 
} while (opcao !== 2);

