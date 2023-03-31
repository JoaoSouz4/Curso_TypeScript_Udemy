//type guard
//naroowing é identificar um tipo de dado para que seja possível realizar uma 
//determinada ação ou definir o fluxo de decisão do programa com base no seu tipo;

function sum(a: number | string, b: number | string) {
    
    if( typeof a === 'string' && typeof b === 'string') {
        console.log(parseFloat(a)+parseFloat(b));
    }

    else if( typeof a === 'number' && typeof b === 'number') {
        console.log(a+b);
    } else {
        console.log('Impossível realizar a operação.')
    }
}

console.log('Primeiro caso: ')
sum('4', '5');

console.log('Segundo caso: ')
sum(4, 5);

console.log('Terceiro caso: ')
sum("4", 5);