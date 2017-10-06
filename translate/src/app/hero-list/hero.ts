
export interface IHero {
    name: string;
    superpower: string;
}

export class Hero implements IHero {
    name: string;
    superpower: string;

    constructor(name: string, superpower: string) {
        this.name = name;
        this.superpower = superpower;
    }
}
