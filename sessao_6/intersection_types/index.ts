interface Caracter {
    name: string
}

interface Gun {
    type: string,
    caliber: number
}

type HumanWithGun = Caracter & Gun;