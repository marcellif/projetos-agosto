const numeros = [6, 9, 12, 15, 18, 21];

console.log('Elementos do array multiplicados por 5:');

numeros.forEach(numero => {
  const resultado = numero * 5;
  console.log(resultado);
});

let numeroProcurado = 9;
const indiceDoNumero = numeros.findIndex(numero => numero === numeroProcurado);

if (indiceDoNumero !== -1) {
  console.log(`O número ${numeroProcurado} está no índice ${indiceDoNumero}.`);
} else {
  console.log(`O número ${numeroProcurado} não está presente no array.`);
}