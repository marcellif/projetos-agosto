const lista1 = ["Queijo", "Queijo", "presunto"];
const lista2 = [ "mostarda", "mostarda", "ketchup"];
const lista3 = [ "hamburguer", "hamburguer", "bacon", "bacon"];
const concat = lista1.concat(lista2,lista3);

function limpa (array1){
    const novaLista =[... new Set(array1)];
    console.log(`a nova lista da receita é ${novaLista}`);
}

limpa(concat);