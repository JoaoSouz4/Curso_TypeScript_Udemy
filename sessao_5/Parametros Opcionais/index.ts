function func( name: string, age?: number) {
    if(age){
        return [name, age]
    }
    return name;
}

console.log(func("Jjj"));
console.log("jsjsj", 18);

