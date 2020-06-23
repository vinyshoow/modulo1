const aluno1 = {
  nome: "Vinicius",
  nota: 10
}

const aluno2 = {
  nome: "Dunha",
  nota: 3
}

const aluno3 = {
  nome: "Seu Cuca",
  nota: 2
}

const media = (aluno1.nota + aluno2.nota + aluno3.nota) / 3;

if(media >= 5) {
  console.log(`Média da turma ${media}, parabéns.`);
} else {
  console.log(`Média da turma ${media}, cuidado com a DP.`);
}

console.log(media.toFixed(2));

console.log(aluno1, aluno2, aluno3);