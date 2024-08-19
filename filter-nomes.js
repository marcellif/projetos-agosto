const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro', 'Raiana', 'Gabriela', 'Miguel', 'Rosario', 'Sabrina', 'Catherine'];

const numeroDesejadoLetras = 6;

const tamanhoNome = nomes.filter((aluno) =>{
    return aluno.length <= numeroDesejadoLetras;
})

console.log (tamanhoNome);