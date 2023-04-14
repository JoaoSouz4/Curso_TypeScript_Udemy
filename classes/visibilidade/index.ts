/*

    public: visibilidade default(padrão) pode ser acessado em qualquer lugar
    proteced: acessível apenas a subclasses da classe do método, para acessar uma propriedade precisamos de um mpetodo(
        apenas os filhos podem acessar;
    )
    private: apenas a classe que declarou o método pode utilizar 
**/
//public
class C {
    public x = 10;
}

const cInstance = new C();
console.log(cInstance.x);

//proteced
    //Acessível apenas através de um método de uma subclasse
class P {
    protected x = 10;
}

class P2 extends P {
    showX(){
        return this.x;
    }
}

const p1 = new P2();
p1.showX;

//Private
    //propriedades e objetos só podem ser acessados a partir da classe que  o definiu
    //é necessário métodos para acessa

class Aluno {
    private name: string
    private class: string

    constructor (name: string ){
        this.name = name;
    }
    get getName(): string {
        return this.name;
    }
}

const a1 = new Aluno( "João");
console.log(a1.getName)


