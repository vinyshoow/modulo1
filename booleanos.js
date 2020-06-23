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
  },
  {
    nome: "Tilambuco",
    nota: 1
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
  let soma = 0;
  for (let i = 0; i < alunos.length; i++) {
    soma = soma + alunos[i].nota;
  }
  const media = soma / alunos.length;
  return media;
}

function enviaMensagemMedia(media, turma) {
  if (media > 5) {
    console.log(`Média da ${turma} é ${media.toFixed(2)}, parabéns!`);
  } else {
    console.log(`Média da ${turma} é ${media.toFixed(2)}, cuidado com a DP!`);
  }
}

// marcar aluno como reprovado se a nota 
// for menor que 5
// e também enviar uma mensagem

function marcarComoReprovado(aluno) {
  aluno.reprovado = false;

  if (aluno.nota < 5) {
    aluno.reprovado = true;
  }
}

function enviaMensagemReprovado(aluno) {
  if (aluno.reprovado) {
    console.log(`O aluno ${aluno.nome} está reprovado`);
  }
}

function alunoReprovado(alunos) {
  for (let aluno of alunos) {
    marcarComoReprovado(aluno);
    enviaMensagemReprovado(aluno);
  }
}

const media1 = calculaMedia(alunosA);
const media2 = calculaMedia(alunosB);

enviaMensagemMedia(media1, 'turma A');
enviaMensagemMedia(media2, 'turma B');

alunoReprovado(alunosA);
alunoReprovado(alunosB);