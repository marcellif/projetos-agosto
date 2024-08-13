const arrayMenoresMaiores = [5, 37, 18, 59, 12, -5];

function imprimeMaiorEMenor(array) {

  let maior = 0;
  let menor = 0;

  for(let i = 0; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i]
    }
    if (array[i] < menor) {
      menor = array[i]
    }
  }
  return `o maior número é ${maior} e o menor número é ${menor}`;
}

console.log(imprimeMaiorEMenor(arrayMenoresMaiores));