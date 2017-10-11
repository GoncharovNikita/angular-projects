import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product, IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
    selector: 'app-add-product',
    templateUrl: './add.component.html'
})
export class AddProductComponent implements OnInit {
    // name = new FormControl();
    fGroup: FormGroup;
    constructor(private productService: ProductService,
    private fb: FormBuilder) {}

    ngOnInit() {
        this.fGroup = this.fb.group({
            name: [ '', Validators.required ],
            created: [ this.getDayRelativeToNow(-1), Validators.required ],
            shelfLife: [ this.getDayRelativeToNow(1), Validators.required ],
            movedToRef: [ this.getDayRelativeToNow(), Validators.required ]
        });
    }

    getDayRelativeToNow(move: number = 0) {
        return `${new Date().getFullYear()}-${ new Date().getMonth() + 1 }-${new Date().getDate() + move}`;
    }
    addProduct(product: IProduct) {
        if (!this.fGroup.valid) { return; }
        this.productService.addProduct(new Product({
            name: product.name,
            created: product.created,
            shelfLife: product.shelfLife,
            movedToRef: product.movedToRef
        }));
    }
}
