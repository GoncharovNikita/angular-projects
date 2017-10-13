import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components import
import { AppComponent } from './app.component';
import { ProductsComponent } from './product/products.component';
import { AuthComponent } from './accounting/auth/auth.component';
import { LoginComponent } from './accounting/login/login.component';

// Modules import
import { HttpModule } from '@angular/http';
import { MyMaterialModule } from './my-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ProductModule } from './product/product.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Services import
import { ProductService } from './product/product.service';
import { AccountService } from './accounting/account.service';

// Directives import
import { RedOutlineDirective } from './red-outline.directive';

// Environment
import { environment } from '../environments/environment';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    RedOutlineDirective,
    AuthComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MyMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    ProductModule,
    RouterModule.forRoot(
      routes, {
        enableTracing: true 
      }
    ),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    ProductService,
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
