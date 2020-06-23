 //Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. 
 //Essa função deve retornar um boolean true/false.

 const usuarios = [
  {
    nome: "Carlos",
    tecnologias: ["HTML", "CSS"]
  },
  {
    nome: "Jasmine",
    tecnologias: ["JavaScript", "CSS"]
  }, 
  {
    nome: "Tuane",
    tecnologias: ["HTML", "Node.JS"]
  },
  {
    nome: "Vinicius",
    tecnologias: ["NodeJS", " React", "React Native"]
  }
];

function checaSeUsuarioUsaCss(usuario) {
  for(let tec of usuario.tecnologias) {
    if(tec === 'CSS'){
      return true;
    }
  } 
  return false;
}

for(let usuario of usuarios) {
  const check = checaSeUsuarioUsaCss(usuario)
  if (check) {
    console.log(`${usuario.nome} trabalha com CSS`)
  }
}