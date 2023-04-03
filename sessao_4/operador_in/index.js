"use strict";
//Operador in é utilizado para checar se existe uma propriedade no objeto;
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const d1 = new Dog('Theo', 'Buldogue Françês');
const d2 = new Dog('Scooby');
console.log(d1);
console.log(d2);
function showDogDetails(dog) {
    let name = dog.name;
    if ('breed' in dog) {
        console.log(name, "não é de raça");
    }
    else {
        console.log(name, 'é de raça');
    }
}
showDogDetails(d1);
showDogDetails(d2);
