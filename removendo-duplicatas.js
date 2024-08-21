const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// usa o new Set ( nome do array) para limitar a 1 de cada --> o resultado nao é array
// já espalha num array com spread operator ...

const novaLista = [... new Set(nomes)];

console.log(novaLista);