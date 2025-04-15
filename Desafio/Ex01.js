//Crie um sistema que permita cadastrar nomes. Antes de adicionar,
// verifique se o nome já está na lista (ignore maiúsculas/minúsculas). Se
// não estiver, adicione o usuário.

    
var prompt = require('prompt-sync')();

let nomes = [];

while (true) {
    let nome = prompt("Digite um nome (ou 'sair' para encerrar): ").trim();

    if (nome.toLowerCase() === 'sair') {
        break;
    }

    let existe = nomes.some(n => n.toLowerCase() === nome.toLowerCase());

    if (existe) {
        console.log("Nome já está na lista.");
    } else {
        nomes.push(nome);
        console.log("Nome cadastrado.");
    }
}

console.log("\nNomes cadastrados:");
nomes.forEach(n => console.log("- " + n));
rCase() === nome.toLowerCase
