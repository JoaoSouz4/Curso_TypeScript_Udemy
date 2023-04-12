
type numberOrString = string | number;

export const Soma = (n1?: numberOrString, n2?: numberOrString): any => {

    if(!n1) return "Esta faltando o primeiro número";
    if(!n2) return "Está faltando o segundo número"; 
    if(!n1 && !n2) return "Você não enviou nenhum número";

    let result = Number(n1)+Number(n2);
    return result;
}

export const obj = {
    a: 1, b: 2
}