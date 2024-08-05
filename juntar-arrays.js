const salaJs = ["Evandro", "Camila", "Marina"];

const salaPython = ["Juliana", "Leonardo", "Raquel"];

const salasUnificadas = salaJs.concat(salaPython);


console.log (`A palestra contará com os seguintes alunos: ${salasUnificadas}, com o total de ${salasUnificadas.length} estudantes `);

// adicionando outros tipos de conteudo por meio de concat
const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Lorena"]
const arrayConcat = arrayOriginal.concat(["Roberto", "Fernanda"], ["Aurelio", "Paula"], ["Tulio", "tTales"], "Monica", "Jonas")
 
console.log(arrayConcat)
console.log(arrayOriginal)