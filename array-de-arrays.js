const alunos = ["lara", "giovana", "samanta", "tiago"];

const medias = [7.4, 6.9, 9, 7.5];

const lista = [alunos, medias];
console.log(`a lista de nomes e médias é ${lista}`);


function exibeNomeENota (aluno) {
    if (lista[0].includes(aluno)){
        const pegaIndice = lista[0].indexOf(aluno);
        const mediaCorrespondente = lista[1][pegaIndice];
        console.log(`aluno(a) ${aluno} teve média ${mediaCorrespondente}`);
    }else{
        console.log(`O aluno não foi encontrado`)
    }
}

exibeNomeENota("lara");
exibeNomeENota("raianne")
