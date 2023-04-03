//Callback como argumento: 

function greeting(name: string) {
    return name;
}

function preGreeting(f: (name: string) => string, userName: string) {
    console.log("preparando a função")
    const greet = f(userName);

    console.log(greet)
}

preGreeting(greeting, "João Vitor");