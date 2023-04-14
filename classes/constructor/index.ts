class UserName { 
    name
    age

    constructor(name: string, age: number) {
        this.name = name; 
        this. age = age; 
    }
}

const user = new UserName("João", 21); 

//valores com readonly;
 //valores que não são possíveis de alterar por ser uma prpriedade readonly(leitura única)

class Car {
    name
    readonly wheels: number = 4

    constructor(name: string){
        this.name = name;
    }
}