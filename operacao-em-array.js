const numeros = [20, 10, 19, 14, 50];

function executaCalculo(array, operacao){
    return array.map(operacao);
};

function multiplicaPorDez(num){
    return num * 10;
}

function soma10(num){
    return num + 10;
}

function quadrado(num){
    return num * num;
}



const listaNova = executaCalculo(numeros, multiplicaPorDez);
const listaSomandoDez = executaCalculo(numeros, soma10);


console.log(listaNova);
console.log(listaSomandoDez);
console.log(executaCalculo(numeros, quadrado)); 