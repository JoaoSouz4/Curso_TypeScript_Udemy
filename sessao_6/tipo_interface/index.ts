//tipo de objeto para função com interface 

// interface Product {
//     name: string, 
//     price: number,
//     isAvailable: boolean
// }

// function showProductDetails(name: string, price: number, isAvailable: true){

// }

// function showProductDetails(product: Product){
//     const {name, price, isAvailable} = product;

//     console.log(name, price, isAvailable);
// }

// const shirt: Product = {
//     name : "Camisa branca",
//     price: 100.00,
//     isAvailable: true
// }

// showProductDetails(shirt);

//Interface com parâmetro opcional; 

interface Usuario {
    email: string, 
    role?: string
}

function showUserDetails( user: Usuario){
    console.log(user.email);
    user.role ? console.log("Função do usuário: " +user.role) : console.log("não mandou ")
}

const u1: Usuario = {
    email: "joao@gmail.com",
    role: "ssj2"
}

const u2: Usuario = {
    email: "email@gmail.com"
}

showUserDetails(u1);
showUserDetails(u2);





