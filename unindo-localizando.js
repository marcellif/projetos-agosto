const nomesTurmaA = [
    'João Silva',
    'Maria Santos',
    'Pedro Almeida'
  ];
  
  const nomesTurmaB = [
    'Carlos Oliveira',
    'Ana Souza',
    'Lucas Fernandes'
  ];


  let turmaNova = nomesTurmaA.concat(nomesTurmaB);
 

  function localiza (nome){
    for (let i  = 0; i < turmaNova.length; i ++){
        if (turmaNova[i] === nome) {
            console.log(`O aluno ${nome} está presente`);
            break;
       }
  }
}

localiza('Ana Souza');