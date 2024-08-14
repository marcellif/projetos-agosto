const notas = [9, 10, 8, 7, 6, 8.4];
let soma = 0;

notas.forEach(i => soma += i);

let media = soma / notas.length;

console.log(`a soma de notas é ${soma}`);

console.log(`a média das notas é ${Math.round(media)}`);