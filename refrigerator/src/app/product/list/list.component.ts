import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { Product, IProduct } from '../product';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state.class';
import { ProductActions } from '../product.actions';

@Component({
    selector: 'app-product-list',
    templateUrl: './list.component.html'
})
export class ProductListComponent implements OnInit {
    @Input()
    refrigeratorKey: string;
    selectedProduct: Observable<IProduct>;
    products: Observable<Array<IProduct>>;
    isProductsListEmpty = true;
    constructor(
        private productService: ProductService,
        private ar: ActivatedRoute,
        private $store: Store<AppState>
    ) {}

    ngOnInit() {
        this.ar.params.subscribe(p => {
            this.refrigeratorKey = p['id'];
        });
        this.products = this.$store.select('products');
        this.selectedProduct = this.$store.select('selectedProduct');
        this.$store.dispatch({ type: ProductActions.FETCH_PRODUCTS });
    }

    select(product: IProduct) {
        this.productService.selectProduct(product);
        return false;
    }
}
