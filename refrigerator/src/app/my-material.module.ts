import { NgModule } from '@angular/core';

// Imports

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatFormFieldModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
} from '@angular/material';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatCardModule,
        MatGridListModule,
        MatExpansionModule,
        MatInputModule,
        MatButtonModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    exports: [
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatCardModule,
        MatGridListModule,
        MatExpansionModule,
        MatInputModule,
        MatButtonModule,
        MatDatepickerModule,
        MatNativeDateModule
    ]
})
export class MyMaterialModule {

}
