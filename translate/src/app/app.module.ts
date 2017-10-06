import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroListComponent } from './hero-list/hero-list.component';

// HttpClient
import { HttpModule } from '@angular/http';

// Services
import { HeroService } from './hero-list/hero.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
