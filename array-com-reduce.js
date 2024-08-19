const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];


function calcula (array){
    const soma = array.reduce((acumulado, nota) => acumulado + nota,0);

    const media = soma / array.length;
    return console.log(media);
}

calcula (salaJS);
calcula (salaJava);
calcula (salaPython);