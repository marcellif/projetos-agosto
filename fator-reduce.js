const fator = [5,4,3,2,1];

function fatorial (array){
    const operacao = array.reduce((acumulado, num)=> acumulado *= num, 0);
    return console.log(operacao);
}

fatorial(fator);