
export interface IProduct {
    name: string;
    shelfLife: string;
    createdAt: string;
    movedToRefrigeratorAt: string;
}

export class Product implements IProduct {
    name: string;
    shelfLife: string;
    createdAt: string;
    movedToRefrigeratorAt: string;

    constructor(
        name: string,
        shelfLife: string,
        createdAt: string,
        movedToRefrigeratorAt: string
    ) {
        this.name = name;
        this.shelfLife = shelfLife;
        this.createdAt = createdAt;
        this.movedToRefrigeratorAt = movedToRefrigeratorAt;
    }
}
