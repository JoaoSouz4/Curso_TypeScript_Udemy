//Exemplo com property decorator;

//com o Property Decorator conseguimos verificar uma propriedade de um objero;
//validação de número de caracteres: 

function Max(limit: number) {
    return function (target: Object, key: string) {
        let value : string;
        const getter = function () {
            return value
        }

        const setter = function (newValue: string) {
            if(newValue.length > limit) {
                console.log("O valor deve ter no máximo" + limit + " caracteres");
                return
            } else {
                value = newValue;
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        })
    }
}
class Admin {

    @Max(5)
    username 

    constructor( username: string) {
        this.username = username;
    }
}

const joao = new Admin ("Joãoadmin1234");

