import { Component, OnInit } from '@angular/core';
import { IRefrigerator, Refrigerator } from './refrigerator';
import { RefrigeratorService } from './refrigerator.service';

@Component({
    selector: 'app-refrigerators',
    templateUrl: './refrigerators.component.html',
    styleUrls: [
        './refrigerators.component.sass'
    ]
})
export class RefrigeratorsComponent implements OnInit {
    constructor(
            private rs: RefrigeratorService
    ) {}

    ngOnInit() {}
}
