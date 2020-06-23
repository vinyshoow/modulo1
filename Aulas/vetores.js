//criar um programa que calcula a media
// das turmas de alunos e envia
// mensagem do calculo da media.
const alunosA = [
  {
    nome: "Vinicius",
    nota: 9.8
  },
  {
    nome: "Dunha",
    nota: 4.2
  },
  {
    nome: "Seu Cuca",
    nota: 4.7
  }
]

const alunosB = [
  {
    nome: "Duval",
    nota: 7
  },
  {
    nome: "Paula Tejando", 
    nota: 9
  },
  {
    nome: "Angolano",
    nota: 9.4
  }
]

function calculaMedia(alunos) {
  const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / alunos.length;
}

const media1 = calculaMedia(alunosA);



if(media > 5) {
  console.log(`Média da turma é ${media.toFixed(2)}, parabéns!`);
} else {
  console.log(`Média da turma é ${media.toFixed(2)}, cuidado com a DP!`);
}

console.log(alunos);

const nomeDosAlunos = ["Vinicius", "Dunha", "Seu Cuca"]
console.log(nomeDosAlunos);