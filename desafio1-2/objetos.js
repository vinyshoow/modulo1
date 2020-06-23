//Imprima em tela utilizando console.log o nome da empresa e seu endereço no seguinte formato:
//A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260

const empresa = {
  nome: "Rocketseat",
  cor: "Roxo",
  endereço: {
    rua: "Rua Guilherme Gembala",
    numero: 260
  }
}
console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereço.rua}, ${empresa.endereço.numero}`);