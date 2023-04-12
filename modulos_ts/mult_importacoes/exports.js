"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obj = exports.Soma = void 0;
const Soma = (n1, n2) => {
    if (!n1)
        return "Esta faltando o primeiro número";
    if (!n2)
        return "Está faltando o segundo número";
    if (!n1 && !n2)
        return "Você não enviou nenhum número";
    let result = Number(n1) + Number(n2);
    return result;
};
exports.Soma = Soma;
exports.obj = {
    a: 1, b: 2
};
