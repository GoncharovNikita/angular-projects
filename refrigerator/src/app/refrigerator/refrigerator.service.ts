import { Injectable } from '@angular/core';
import { IRefrigerator, Refrigerator } from './refrigerator';
import {
    AngularFireDatabase,
    AngularFireList
} from 'angularfire2/database';

@Injectable()
export class RefrigeratorService {
    private refrigeratorsRef: AngularFireList<IRefrigerator>;
    constructor(
        private afd: AngularFireDatabase
    ) {

    }
}
