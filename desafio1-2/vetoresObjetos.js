const prog = {
  nome: "Carlos" ,
  idade: 32,
  tecnologias: [
    {
      nome: 'C++', 
      especialidade: 'Desktop'
    },
    {
      nome: 'Python',
      especialidade: 'Data Science'
    },
    {
      nome: 'JavaScript',
      especialidade: 'Web/Mobile'
    }
  ] ,
}

console.log(`O usuário ${prog.nome} tem ${prog.idade} anos e usa a tecnologia 
${prog.tecnologias[0].nome} com especialidade em ${prog.tecnologias[0].especialidade}`);