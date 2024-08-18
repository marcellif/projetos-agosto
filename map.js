const notas = [ 10, 9.5, 8, 7.2];

const notasAumentadas = notas.map((nota)=> nota + 1 >= 10 ? nota = 10 : nota + 1);

console.log(`${notasAumentadas}`)