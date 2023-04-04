"use strict";
//tipo de objeto para função com interface 
function showUserDetails(user) {
    console.log(user.email);
    user.role ? console.log("Função do usuário: " + user.role) : console.log("não mandou ");
}
const u1 = {
    email: "joao@gmail.com",
    role: "ssj2"
};
const u2 = {
    email: "email@gmail.com"
};
showUserDetails(u1);
showUserDetails(u2);
