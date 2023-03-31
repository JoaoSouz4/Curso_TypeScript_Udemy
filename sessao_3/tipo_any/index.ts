//Tipo Any transmite ao Ts que qualquer tipo satisfaz a variável;
//é útil quando o tipo de dado não importa como em arrays com múltiplos tipos;

const flag: boolean = true;
const anyData: any = flag ? "String" : 10; 

console.log(anyData);