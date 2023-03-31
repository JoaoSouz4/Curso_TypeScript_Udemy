function printName(name:string){
    console.log(name);
    return;
}
const soma = (n1:number, n2:number) => {
    return n1+n2;
}

const resultSoma: number = soma(2,2);

printName('João Vitor')
console.log(resultSoma);

//Tipo de Retorno

function calculator (n1: number,n2: number,op: string): number{

    let result: number = 0;
    
    switch(op){
        case '+' : 
            result = n1+n2;
            break;

        case '-' : 
            result = n1-n2;
            break;

        case '*' : 
            result = n1*n2;
            break;

        case '/' : 
            result = n1/n2;
            break;
    }

    return result
}

const response: number = calculator(10, 10, '*');
console.log(response);