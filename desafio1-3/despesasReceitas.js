// Crie um programa que calcula a soma de receitas e despesas
// de usuários e no fim retorna o saldo (receitas - despesas).


const users = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
];

//Percorra o array de usuários e para cada usuário chame uma função chamada calculaSaldo
// que recebe como parâmetro as receitas e despesas do usuário:


function calculaSaldo(receitas, despesas,nome) {
  let result = somaNumeros(receitas) - somaNumeros(despesas);
  if(result >= 0) {
    console.log(`${nome} possui saldo POSITIVO de ${result}`)
  } else {
    console.log(`${nome} possui saldo NEGATIVO de ${result}`)
  }
}


//Crie uma segunda função que recebe como parâmetro um array de números e retorna a soma deles 
//e use-a para calcular a soma de receitas e despesas dentro da função calculaSaldo:

function somaNumeros(numeros) {
  let soma = 0;
  for(let i = 0; i < numeros.length; i++) {
    soma = soma + numeros[i]
  }
  return soma;
}

for(let user of users ) {
  calculaSaldo(user.receitas, user.despesas, user.nome);
}



