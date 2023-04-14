class sayajin {
    name
    ki
    cauda
    
    constructor(name: string, ki: number){
        this.name= name;
        this.ki = ki;
        this.cauda = true
    }
}

class warrior extends sayajin {

}

class Machine {
    name

    constructor(name: string) {
        this.name = name;
    }
}

const trator = new Machine("trator");

class killerMachine extends Machine {
    guns 

    constructor(name: string, guns: number) {
        super(name)
        this.guns = guns;
    }
}