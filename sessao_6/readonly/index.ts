//as propriedades readonly podem ser alteradas apenas uma vez, na criação do novo dado; 
//sendo uma forma de criar um valor constante em um objeto; 

interface Car {
    brand: string, 
    readonly wheels: number,
}

const fusca: Car = {
    brand : "Fusquinha",
    wheels : 4
}

console.log(fusca)
//Não é possível executar o código abaixo: 
// fusca.wheels = 8;

