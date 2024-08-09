const notas = [9, 7, 8 , 9, 6, 9.5, 8, 7.5, 10, 8];
let soma = 0;


for (let nota of notas){
    soma += nota;
}

let media = soma/notas.length;

console.log(`a média de notas é ${media}`)