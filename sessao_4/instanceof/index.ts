//instance of permite checar se um dado pertence a uma determinada classe;

class User {
    name
    constructor(name: string) {
        this.name = name;
    }
}

class SuperUser extends User {
    constructor(name: string) {
        super(name);
    }
}

const jhon = new User('Jhon');
const joel = new SuperUser('Joel Miller');

console.log(jhon);
console.log(joel);

userGreeing(joel)
userGreeing(jhon)

function userGreeing(user: object) {
    if(user instanceof SuperUser) {
        console.log(user.name, ' is: Super User')
    } else {
        console.log(user, ' is: User')
    }   
}