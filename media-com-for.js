const notas = [10, 9, 8, 7, 6, 10, 9, 8, 7, 6];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++){
    somaDasNotas += notas[i];
}

let media = somaDasNotas/notas.length;
console.log(`A média das notas é ${media}`)