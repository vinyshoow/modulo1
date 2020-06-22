//criar um programa que calcula a media
//das notas entre os alunos e envia
//mensagem do calculo da media

const aluno1 = 'Vinicius';
const notaAl01 = 10;

const aluno2 = 'Dunha';
const notaAl02 = 2;

const aluno3 = 'Seu Cuca';
const notaAl03 = 2;

const media  = (notaAl01 + notaAl02 + notaAl03) / 3;

//verificar média, se for maior que 5, dar os parabéns pra turma!

if(media > 5) {
  console.log(`A média da turma foi ${media.toFixed(2)}, parabéns`);
} else {
  console.log(`A média da turma foi ${media.toFixed(2)}, cuidado pessoal com DP.`)
}

