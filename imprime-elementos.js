const ingrediente = ['açúcar', 'farinha', 'cacau', 'cenoura', 'fermento'];
let elementos = "";

for (let i = 0; i < ingrediente.length; i++){
    elementos += (`
        ${i+1}° ingrediente: ${ingrediente[i]} 
        `);
}

console.log (
    `Ingredientes:
    ${elementos}
    Bata todos os ingredientes e asse a 180 °C.
    Sirva a gosto!
    `
)