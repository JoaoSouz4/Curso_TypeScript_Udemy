class Base {
    someMethod(){
        console.log('alguma coisa');
    }
}

class Nova extends Base {
    someMethod(){
        console.log('alguma outra coisa')
    }
}

//em ts basta apenas redaclar um método com o mesmo nome do método herdado de uma outra classe, e reescrever de forma diferente;

const n1 = new Nova;

n1.someMethod()