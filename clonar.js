const notas = [7, 7, 8, 9];

// spread operator - usa os 3 pontinhos para clonar um array 
//e não referencia-lo
// pode adicionar novos itens no array 
//no segundo pçaâmetro após a vírgula

const novaListaNotas = [...notas,10,5,4,7,8,9];

//assim, não precisa do push pra alterar
//novaListaNotas.push(10);

console.log(notas);
console.log(novaListaNotas);