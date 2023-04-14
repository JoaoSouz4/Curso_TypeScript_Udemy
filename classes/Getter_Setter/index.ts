//Os getters são uma forma de retornar propriedades dos objetos; 
//Método de leitura de propriedades; 

//Tanto o get quanto o set é escrito como se fosse uma função, porém na prática
//quando iremos utiliza-los, chamamos como se fosse propriedades da classe.

class Person {
    name: string
    age: number

    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    get getName(): string {
        return this.name
    }

    get getAge(): number {
        return this.age
    }

    set alterarName(resp: string) {
        this.name = resp
    }

}

const p2 = new Person("João", 21);
p2.alterarName = "Vitor";

const i = p2.getName;
const j = p2.getAge;

console.log(i,j)



