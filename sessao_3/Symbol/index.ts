//Symbol cria uma referência única para um valor;

const symbolA: symbol = Symbol('a');
const symbolB: symbol = Symbol('b');

console.log(symbolA === symbolB);
