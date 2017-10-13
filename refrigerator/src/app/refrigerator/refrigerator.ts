
import { IProduct } from '../product/product';
export interface IRefrigerator {
    id: string;
    users: Array<string>;
    products: Array<IProduct>;
    archivedProducts: Array<IProduct>;
}

export class Refrigerator implements IRefrigerator {
    id: string;
    users: Array<string>;
    products: Array<IProduct>;
    archivedProducts: Array<IProduct>;

    constructor(ref: IRefrigerator) {
        this.id = ref.id;
        this.users = ref.users;
        this.products = ref.products;
        this.archivedProducts = ref.archivedProducts;
    }
}
