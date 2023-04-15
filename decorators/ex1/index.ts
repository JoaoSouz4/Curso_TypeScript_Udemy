function createDate(created: Function) {
    created.prototype.createdAt = new Date();
}

@createDate
class Book {
    id 
    createdAt?: Date;

    constructor (id: number) {
        this.id =id;
    }
}

@createDate
class Pen {
    id
    createdAt?: Date;

    constructor (id: number) {
        this.id =id;
    }
}

const b1 = new Book(Math.random());
const p1 = new Pen(Math.random());

console.log(b1.createdAt);
console.log(p1.createdAt);