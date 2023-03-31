"use strict";
function printName(name) {
    console.log(name);
    return;
}
const soma = (n1, n2) => {
    return n1 + n2;
};
const resultSoma = soma(2, 2);
printName('João Vitor');
console.log(resultSoma);
//Tipo de Retorno
function calculator(n1, n2, op) {
    let result = 0;
    switch (op) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            result = n1 / n2;
            break;
    }
    return result;
}
const response = calculator(10, 10, '*');
console.log(response);
