const listaEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 
    'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

console.log(listaEstudantes.length);

const sala1 = listaEstudantes.slice(0,listaEstudantes.length/2);

const sala2 = listaEstudantes.slice(listaEstudantes.length/2, listaEstudantes.length);

console.log(sala1.length, sala2.length);