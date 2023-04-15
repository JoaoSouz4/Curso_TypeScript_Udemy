interface I1 {
    name: string,
    age : number,
}

interface I2 extends I1 {
    isColl?: boolean
}

const obj: I2 = {
    name: "João",
    age: 21,
    isColl: true
}
