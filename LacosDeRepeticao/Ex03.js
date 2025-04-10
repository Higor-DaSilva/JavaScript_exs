//Verificar senha com tentativa até acertar(Use o While)

var prompt = require ('prompt-sync')();

let senha = 123456;
let senhaDigitada = prompt ("Digite a sua senha: ");

while(senhaDigitada != senha){
    console.log("Tente novamente");
    senhaDigitada = prompt ("Digite a sua senha: ");
}

console.log("Sua senha esta correta: ", senha);