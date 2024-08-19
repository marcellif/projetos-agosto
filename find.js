let todosAlunos = ["Joana", "Vitor", "Tiago", "Paloma", "Caroline"];

const alunoProcurado = todosAlunos.find(nome => nome === 'Caroline');

if (alunoProcurado) {
  console.log('Aluno encontrado:', alunoProcurado);
} else {
  console.log('Aluno não encontrado.');
}