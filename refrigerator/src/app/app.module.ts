import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components import
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './product-list/add-product/add-product.component';

// Modules import
import { HttpModule } from '@angular/http';

// Services import
import { ProductService } from './product-list/product.service';
import { AddProductService } from './product-list/add-product/add-product.service';

// Directives import
import { RedOutlineDirective } from './red-outline.directive';

@NgModule({
  declarations: [
    AppComponent,
    RedOutlineDirective,
    ProductListComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    ProductService,
    AddProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
