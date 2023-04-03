// especificar o tipo de argumento com tipo genérico: 

    function sendAnyArgs <T>(array1: T[], array2: T[]) {
        return array1.concat(array2);
    }
    console.log( sendAnyArgs<number | string> ([1,2,3,4,5,6,7], ['a', 'b']))

    function func2 (arr: any, arr2: any) {
        return arr.concat(arr2);
    }

    console.log(func2([1,2,3,4,5], ['adasdasdasd']));