
import { IProduct } from '../product/product';
export interface IRefrigerator {
    id: string;
    name: string;
    products: Array<IProduct>;
    archivedProducts: Array<IProduct>;
}

export class Refrigerator implements IRefrigerator {
    id: string;
    name: string;
    products: Array<IProduct>;
    archivedProducts: Array<IProduct>;

    constructor(
      id = '',
      name = '',
      products = [],
      archivedProducts = []
    ) {
        this.id = id;
        this.name = name;
        this.products = products;
        this.archivedProducts = archivedProducts;
    }
}
