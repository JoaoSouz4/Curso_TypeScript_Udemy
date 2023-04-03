// Os parametros default são os que já possuem parametros definidos; 
// Se não passarmos para a funçáo, não tem problema, já terão seus valores definidos;

//*Basta apenas atribuir o valor da props entre os pareteses:

function somaDefault( n1: number, n2 = 10) {
    return n1+ n2;
}

console.log(somaDefault(10));