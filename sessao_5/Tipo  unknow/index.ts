//é utilizado de forma semelhante ao any, aceitando qualquer tipo de dado; 
//porém ele não é executável se não houver validação de tipo; 

function func (x: unknown): void {
    if(Array.isArray(x)) {
        console.log(x);
        return;
    } 

    console.log(x)
}

func('hello world');
func([1,2,3,4,5,5,7,8,9])