const nomes = ['Luana', 'Ana Maria', 'Barry', 'TheoDore', 'Kyle'];

const nomesMaiusculos = nomes.map((i) => i.toUpperCase());

const nomesMinusculos = nomes.map(i => i.toLowerCase());

console.log(`Lista de nomes maiúsculos ${nomesMaiusculos}`);
console.log(`Lista de nomes minúsculos: ${nomesMinusculos}`);
