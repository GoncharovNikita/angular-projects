import { Refrigerator } from './refrigerator/refrigerator';
import { Product } from './product/product';
import { Auth } from 'firebase/auth';

export class AppState {
    selectedRefrigerator: Refrigerator;
    selectedProduct: Product ;
    refrigerators: Array<Refrigerator>;
    products: Array<Product>;
    auth: Auth;
}
