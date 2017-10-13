import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ProductListComponent } from './list/list.component';
import { AddProductComponent } from './add/add.component';
import { SelectProductComponent } from './select/select.component';
import { ProductsComponent } from './products.component';

// Modules
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MyMaterialModule } from '../my-material.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MyMaterialModule
    ],
    declarations: [
        ProductListComponent,
        AddProductComponent,
        SelectProductComponent,
        ProductsComponent
    ],
    exports: [
        ProductsComponent
    ]
})
export class ProductModule {

}
