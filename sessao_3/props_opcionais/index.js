"use strict";
//props opcionais
//Utilizando o op "?" podemos declarar a prop do parametro como opcional caso não venha dentro do parmetro da função que foi chamada;
function showNumbers(a, b, c) {
    if (c !== undefined) {
        console.log('Faltou o terceiro valor.');
        console.log(`A: ${a}, B: ${b}`);
        return;
    }
    console.log(`A: ${a}, B: ${b}, C: ${c}`);
}
showNumbers(1, 2);
console.log('');
showNumbers(1, 2, 3);
