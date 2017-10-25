export class ProductActions {
    static ADD_PRODUCT = 'ADD_PRODUCT';
    static REMOVE_PRODUCT = 'REMOVE_PRODUCT';
    static FETCH_PRODUCTS = 'FETCH_PRODUCTS';
    static FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCS_SUCCESS';
}

export class ProductAction {
    type: string;
    payload?: any;
}
