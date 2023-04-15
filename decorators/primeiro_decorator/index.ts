//Decorator de método:

function myDecorator(){
    console.log('Iniciando decorator...')
    return function ( target: any, propertKey: string, descriptor: PropertyDescriptor) {
        console.log("Executando decorator")
        console.log(target)
        console.log(propertKey)
        console.log(descriptor)
    }
}

class myClass {
    //O decorator está atralado a um método da classe: 
    @myDecorator()
    testing(): void {
        console.log("testando")
    }
}

const obj = new myClass();
obj.testing();