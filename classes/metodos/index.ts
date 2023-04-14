//métodos são funções dentro de uma classe; 

class Teste {
    name

    constructor (name: string) {
        this.name = name;
    }

    public static sayHello() {
        console.log("Hello, este é um método estático da classe, tendo acesso público e a partir da prórpria classe");
    }
}

Teste.sayHello();