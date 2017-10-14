import { Component, OnInit } from '@angular/core';
import { RefrigeratorService} from '../refrigerator.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-list-refrigerators',
    templateUrl: './list.component.html',
    styleUrls: [
        './list.component.sass'
    ]
})
export class RefrigeratorsListComponent implements OnInit {

    constructor(
        private rs: RefrigeratorService
    ) {}
    ngOnInit() {}
}
