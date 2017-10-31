import { User } from './accounting/user/user.class';
import { Refrigerator } from './refrigerator/refrigerator';
import { Product } from './product/product';
import { Auth } from 'firebase/Auth';

export class AppState {
    selectedRefrigerator: Refrigerator;
    selectedProduct: Product ;
    refrigerators: Array<Refrigerator>;
    products: Array<Product>;
    auth: Auth;
    user: User;
}
