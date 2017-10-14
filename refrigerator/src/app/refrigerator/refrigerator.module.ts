import { NgModule } from '@angular/core';
import { RefrigeratorsComponent } from './refrigerators.component';
import { RefrigeratorService } from './refrigerator.service';

@NgModule({
    declarations: [
        RefrigeratorsComponent
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
