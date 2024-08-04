//metodo splice
//splice retira e pode inserir itens em uma lista
// primeiro parametro --> indice de odne começa o corte (inclusivo)
//segundo paramnetro --> quantos vai remover
//terceiro --> se quiser adicionar pode colocar os nomes ou avçlores que quer adicionar que vai ficar onde tirou


const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

listaEstudantes.splice(1, 2, "rodigo", "roberta", "miguel");


console.log(listaEstudantes)

