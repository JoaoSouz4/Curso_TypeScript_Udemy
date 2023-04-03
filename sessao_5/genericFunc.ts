
function firstElement <T>(array: T[]): T {
    // T = Type generic;
    return array[0];
}

console.log(firstElement([1,2,3,4,5]));
console.log(firstElement(['a', 'b']));

//Estrutura da função: 
    // function name <TypeGeneric>(argumentos: TipoDoDado) : retornoFunção {
        
    // }
const mergeObjects = <U, T>(obj1: U, obj2: T) => {
    return{
        ...obj1,
        ...obj2
    }
}

const ob = mergeObjects({
    name: "name 1"
}, {
    name: "name 2"
})

console.log(ob)


