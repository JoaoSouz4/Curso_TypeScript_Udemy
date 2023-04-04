"use strict";
function func(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(func(1, 2, 3));
