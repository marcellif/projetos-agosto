//callback é invocado com três argumentos: - No caso aqui so estamos utilizando os dois primeiros
//o valor do elemento
//o índice do elemento
//o array que está sendo percorrido

const itens = ["alface", "cenoura", "abóbora", "chuchu", "tomate"];

itens.forEach((item, indice) => {
    console.log(`o item ${indice+1} da lista é ${item}`);
});
