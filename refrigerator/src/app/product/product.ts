
export interface IProduct {
    key?: string;
    name: string;
    created: string;
    shelfLife: string;
    movedToRef: string;
}

export class Product implements IProduct {
    key?: string;
    name: string;
    created: string;
    shelfLife: string;
    movedToRef: string;

    constructor(
        product: IProduct
    ) {
        this.name = product.name;
        this.created = product.created;
        this.shelfLife = product.shelfLife;
        this.movedToRef = product.movedToRef;
    }
}
