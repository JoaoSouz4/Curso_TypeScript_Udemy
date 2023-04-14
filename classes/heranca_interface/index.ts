interface showTitle {
    itemTitle(): string
}

class blogPost implements showTitle {
    title: string
        
    constructor(title: string){
        this.title = title;
    }

    itemTitle(){
        return 'O título do post é: ' + this.title
    }
}

