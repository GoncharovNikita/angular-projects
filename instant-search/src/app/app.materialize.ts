import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatInputModule
 } from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatInputModule
    ],
    exports: [
        MatToolbarModule,
        MatInputModule
    ]
})
export class AppMaterializeModule {

}
