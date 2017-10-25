import { Product } from './product';
import { productsReducer } from './products.reducer';

describe('Products reducer', () => {
    it('should add product to state', () => {
        const initialState: Array<Product> = new Array();
        const product = new Product({
            name: 'Kolbasa',
            created: '20-01-2017',
            shelfLife: '20-02-2017',
            movedToRef: '20-01-2017'
        });

        const newState = productsReducer(initialState, {
            type: 'ADD_PRODUCT',
            payload: product
        });

        expect(initialState.length).toBeLessThan(newState.length);
    });
});
