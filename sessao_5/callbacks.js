"use strict";
//Callback como argumento: 
function greeting(name) {
    return name;
}
function preGreeting(f, userName) {
    console.log("preparando a função");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "João Vitor");
