// Crie um programa que armazena um array de usuários (objetos), 
//cada usuário tem um nome e suas tecnologias (novo array), por exemplo:

const usuarios = [
  {
    nome: "Carlos",
    tecnologias: ["HTML", " CSS"]
  },
  {
    nome: "Jasmine",
    tecnologias: ["JavaScript", " CSS"]
  }, 
  {
    nome: "Tuane",
    tecnologias: ["HTML", " Node.JS"]
  },
  {
    nome: "Vinicius",
    tecnologias: ["NodeJS", " React", " React Native"]
  }
];

for(let i = 0; i < usuarios.length; i++){
  console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`);
}

//console.log(usuarios[0]);