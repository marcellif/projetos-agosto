let arrayEsparso = [11, ,13, , , ,17];

arrayEsparso[1] = 12;

arrayEsparso.push(18);

console.log(arrayEsparso);
console.log(arrayEsparso.length);


arrayEsparso.pop();
arrayEsparso[6] = arrayEsparso[6] * 2;

console.log(`a nova lista de array após a alteração é ${arrayEsparso} e seu novo comprimento é ${arrayEsparso.length}`);