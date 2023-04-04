"use strict";
// especificar o tipo de argumento com tipo genérico: 
function sendAnyArgs(array1, array2) {
    return array1.concat(array2);
}
console.log(sendAnyArgs([1, 2, 3, 4, 5, 6, 7], ['a', 'b']));
function func2(arr, arr2) {
    return arr.concat(arr2);
}
console.log(func2([1, 2, 3, 4, 5], ['adasdasdasd']));
