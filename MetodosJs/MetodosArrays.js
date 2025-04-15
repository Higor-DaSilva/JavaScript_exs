//.leght() => tamanho

// let frutas = ["Maça", "Banana", "Kiwi", "Carambola", "Morango", "Ameixa", "Abacaxi", "Abacate", "Jabuticaba", "Romã"
//     , "Seringuela", "Embu", "Caqui", "Uva verde", "Uva verde"];

// console.log(frutas.length);

// let num = [20,5,3];
// console.log(num.length);

//------------------------------------------------------------------------------------

//.reserve() => reverte o nosso array

// let numeros = [70, 100,120,1000];
// numeros.reverse();

// console.log(numeros);

//------------------------------------------------------------------------------------

//.push() => Adiciona um elemento no final do array

// let nomes = ["Clebsom", "Wesley", "Robson", "Diogo"];
// nomes.push("Jose");

// //.unshift() => adiciona no inicio do array
// nomes.unshift("Gero");

// //.shift => remove no inicio
// nomes.shift();
// //.pop() => remove o elemento no final do array
// nomes.pop();

// //.splice() => adiciona ou remove elemerntos do array
// // nomes.splice();
// // console.log(nomes.splice(1,2));

// console.log(nomes);

//------------------------------------------------------------------------------------

//.includes() => se existe no array, se existe retornora true

// let nomesAnimais = ["Bolota", "Luah", "Sandy", "Apollo"];
// console.log(nomesAnimais.includes("Lua"));

//------------------------------------------------------------------------------------
// let valores = [30, 55, 90, 66];

// //queros os valores maiores que 50
// let maiores = valores.filter(num => num < 90);
// console.log(maiores);

//------------------------------------------------------------------------------------
//.map() => Metodo usado em arrays que permite trnasformar os elementos do array original em novos valores, 
// criando um novo array, sem modificar o original.

// let arr = [3,4,5,6];

// let modifiedArr = arr.map(function(element){
//     return element *3;
// });
// console.log(modifiedArr);

// let users = [
//     {firstName : "Susan", lastName: "Steward"},
//     {firstName : "Daniel", lastName: "Longbottom"},
//     {firstName : "Jacob", lastName: "Black"}
//   ];
  
//   let userFullnames = users.map(function(element){
//       return `${element.firstName} ${element.lastName}`;
//   })
  
//   console.log(userFullnames);

//1. Lista de alunos
// let alunos = [
//    {nome: "clara", nota: 8},
//     {nome: "Laura", nota: 10},
//     {nome: "Isaac", nota: 2},
//     {nome: "Lucas", nota: 8},
//     {nome: "Pedro", nota: 8},
//     {nome: "Bryan", nota: 8},
//     {nome: "Sillas", nota: 10}
// ];

// //lista de nomes
// let alunoNomes = alunos.map(aluno => aluno.nome);
// console.log(alunoNomes);

// //funcao: 
// let alunoNomesDois = alunos.map(function(aluno){
//     return aluno.nome;
// })

// let alunoNota = alunos.map(aluno => aluno.nota);

// //2. Criar um array com mensagens personalizadas
// let nomes = ["Caio", "Dani", "Ryan", "Vinicius"];

// let mensagem = nomes.map(itemDoArrayNomes => `Olá, ${itemDoArrayNomes}`);
// // let mensagem = nomes.map(itemDoArrayNomes => "Ola, " + itemDoArrayNomes);

// console.log(mensagem);


//3.Pegar apenas os primeiros caracteres de nomes
// let nomes = ["Isabelly", "Emilly", "Machado", "Guilherme"];

// let inicial = nomes.map(element => element[0]);
// console.log(inicial);


// //4. emails
// let emails = ["kaue@gmail.com", "pedro@hotmail.com", "julia@outlook.com" ];

// let dominios = emails.map(element => element.split("@")[1]);
// console.log(dominios);
