// Crie um programa para calcular o IMC 
// e nível de obesidade de uma pessoa.

const nome = 'Carlos';
const peso = 84;
const altura = 1.88;

const imc = peso / (altura * altura);

// SE o IMC maior ou igual a 30: Carlos você está acima do peso;
// SE o IMC menor que 29.9: Carlos você não está acima do peso;

if(imc >= 30) {
  console.log(`Carlos, você está acima do peso.`);
} else {
  console.log(`Carlos, você NÃO está acima do peso`);
}