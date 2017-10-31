import { RefrigeratorEffects } from './refrigerator.effects';
import { NgModule } from '@angular/core';
import { RefrigeratorsComponent } from './refrigerators.component';
import { RefrigeratorService } from './refrigerator.service';
import { AddRefrigeratorComponent } from './add/add.component';
import { RefrigeratorsListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Modules
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    declarations: [
        RefrigeratorsComponent,
        AddRefrigeratorComponent,
        RefrigeratorsListComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule,
        EffectsModule.run(RefrigeratorEffects)
    ],
    exports: [
        RefrigeratorsComponent
    ],
    providers: [
        RefrigeratorService
    ]
})
export class RefrigeratorModule {

}
