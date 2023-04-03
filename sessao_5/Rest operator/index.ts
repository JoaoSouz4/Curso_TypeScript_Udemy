function func (...n: number[]){
    return n.reduce((number, sum) => sum + number)
}

console.log(func(1,2,3))