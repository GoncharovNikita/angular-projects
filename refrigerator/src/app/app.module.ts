import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components import
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/list/list.component';
import { AddProductComponent } from './product/add/add.component';

// Modules import
import { HttpModule } from '@angular/http';
import { MyMaterialModule } from './my-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Services import
import { ProductService } from './product/product.service';

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
    HttpModule,
    MyMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
