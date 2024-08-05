// Crie uma lista bidimensional com 3 linhas e 3 colunas, 
//onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento.

let matriz = [];
let valorInicial = 1

for (let i = 0; i < 3; i++) {
    let linha = [];
    for (let j = 0; j < 3; j++) {
      linha.push(valorInicial++);
    }
    matriz.push(linha);
  }
  
  console.log('Matriz de duas dimensões:');
  console.log(matriz);
  matriz.forEach(row => console.log(row));

  console.log('Elemento na segunda linha e terceira coluna:', matriz[1][2]);

matriz[2][1] = 15;
console.log('Matriz após adição de elemento:', matriz);