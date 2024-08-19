const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro', 'Guilherme'];
const medias = [7.1, 4.5, 8, 7.5, 5.8];

const avaliaAprovados = alunos.filter((_, indice) => {
    return medias[indice] >= 7;
})

const avaliaReprovados = alunos.filter((_, indice) => {
    return medias[indice] < 7;
})


function imprime (texto){
    console.log(texto)
}
imprime(`Os alunos aprovados foram: ${avaliaAprovados}`);
imprime(`Os alunos reprovados foram: ${avaliaReprovados}`)