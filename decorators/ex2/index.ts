
function checkIfUserPosted(){
    return function (target: Object, key: string | Symbol, descriptor: PropertyDescriptor){

        const childFunction = descriptor.value; 
        console.log(childFunction)

        descriptor.value = function (...args: any[]) {
            if(args[1] === true) {
                console.log("O usuário já Postou");
                return null
            } else {
                return childFunction.apply(this, args);
            }   
        }

        console.log(target)
        console.log(key)
        console.log(descriptor)

        return descriptor

    }
}


class Post {
    alreadyPosted = false;
    
    @checkIfUserPosted()
    Post(content: string, alreadyPosted: boolean){
        this.alreadyPosted = true;
        console.log("Post do usuário: "+content)
    }
}

const p0 = new Post();
p0.Post("Meu primeiro post", p0.alreadyPosted);
p0.Post("Meu primeiro post", p0.alreadyPosted);