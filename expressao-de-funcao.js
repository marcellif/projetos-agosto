const aprovado = function (nota, faltas){
    if (nota >= 7 && faltas < 5){
        return true;
    }else{
        return false;
    
    }
}


console.log(aprovado(7, 4));
console.log(aprovado(8,7));
