//Recurso da interface, é usado quando não sabemos o nome da chave, porém ainda possível tipar o dado: 

interface A {
    [index: string] : string
    //[nome da propriedade] : tipo de dado
}

const objeto: A = {
    name: "nome do objeto"
}