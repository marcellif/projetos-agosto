const notasAluno1 = [ 10, 8.5, 9, 7.5];
const notasAluno2 = [9, 5.8, 7, 8];


function media (array){
    let soma = 0;
    for (i = 0; i < array.length; i++){
        soma += array[i];
    }
    return soma/array.length;
 }


console.log (`a média de notas do aluno 1 é ${media(notasAluno1)}`);

console.log (`a média de notas do aluno 2 é ${media(notasAluno2)}`);