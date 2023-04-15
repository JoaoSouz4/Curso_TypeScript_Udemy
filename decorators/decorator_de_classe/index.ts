//Este decorator está atrelado ao construtor de uma classe:

function classDecorator(constructor: Function){
    console.log("construtor")
}
@classDecorator
class User {
    name: string

    constructor(name: string) {
        this.name = name;
    }
}

const u1 = new User("João");
console.log(u1);

