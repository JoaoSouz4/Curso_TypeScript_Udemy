"use strict";
function operations(arr, operation) {
    if (operation) {
        for (let i in arr) {
            console.log(arr[i]);
        }
    }
    else {
        console.log('Defina uma operação.');
    }
}
operations([1, 2, 3], 'op');
