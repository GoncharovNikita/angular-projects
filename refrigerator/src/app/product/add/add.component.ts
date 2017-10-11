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
            name: [ null, Validators.required ],
            created: [ null, Validators.required ],
            shelfLife: [ null, Validators.required ],
            movedToRef: [ null, Validators.required ]
        });
    }
    submit() {
        // console.log(this.name);
    }
}
