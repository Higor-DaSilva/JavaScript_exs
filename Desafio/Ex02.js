// Crie um array de objetos com produtos e preços. Exiba no console o
// nome e o preço com R$ formatado.

var prompt = require('prompt-sync')();

let produtos = [
    { nome: "Pitú", preco: 5.99 },
    { nome: "Conhaque", preco: 7.49 },
    { nome: "Pão de forma", preco: 3.75 },
    { nome: "Óleo", preco: 6.20 }
];

console.log("Lista de produtos:");

produtos.forEach(produto => {
    console.log(`${produto.nome} - R$ ${produto.preco}`);

});