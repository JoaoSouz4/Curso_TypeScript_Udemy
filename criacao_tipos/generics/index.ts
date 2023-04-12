//Utilizamos Generics quando uam função pode aceitar mais de umm tipo de dado, sendo
//uma prática mias semelhante que o Any; 

//qualquer coisa como <algumacoisa> representa um generic

function showData<T> (arg: T) {
    console.log(arg)
}

showData('oi');
showData(true);
showData(123);

//Constrains
    //Limitar os tipos de um generic

function showProductName<T extends {name: string}> (obj: T) {
    return obj.name
}

const product = {
    name: "Porta"
}

const resp = showProductName(product);

//Generic + Interfaces;

interface Guitar<T> {
    name: T, 
}

type guitar = Guitar<string>

const guitar1: guitar = {
    name: "Strinberg"
}
