"use strict";
function firstElement(array) {
    // T = Type generic;
    return array[0];
}
console.log(firstElement([1, 2, 3, 4, 5]));
console.log(firstElement(['a', 'b']));
//Estrutura da função: 
// function name <TypeGeneric>(argumentos: TipoDoDado) : retornoFunção {
// }
const mergeObjects = (obj1, obj2) => {
    return {
        ...obj1,
        ...obj2
    };
};
const ob = mergeObjects({
    name: "name 1"
}, {
    name: "name 2"
});
console.log(ob);
