interface Person {
    name: string,
    age: number, 
    isColl?: boolean, 
    job: string
}

const p1: Person = {
    name: "João",
    age: 21,
    isColl: true,
    job: "developer front end"
}

export const ReadOneName = (s: string):string => {
    return s;
}

export default p1;