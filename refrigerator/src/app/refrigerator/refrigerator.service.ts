import { Injectable } from '@angular/core';
import { IRefrigerator, Refrigerator } from './refrigerator';
import {
    AngularFireDatabase,
    AngularFireList
} from 'angularfire2/database';
import { AccountService, AccountState } from '../accounting/account.service';
import { RefUser, IRefUser } from '../accounting/refrigerator.user';

@Injectable()
export class RefrigeratorService {
    private refrigeratorsRef: AngularFireList<IRefrigerator>;
    private refrigerators: Array<IRefrigerator>;
    constructor(
        private afd: AngularFireDatabase,
        private accService: AccountService
    ) {
        this.accService.state
            .map(s => s.userRef)
            .subscribe(userRef => {
                if (userRef) {
                    userRef.valueChanges()
                    .map(s => <IRefUser>s[0])
                    .subscribe(snap => {
                        console.log(snap);
                        this.refrigerators = snap.refrigerators;
                    });
                } else {
                    this.refrigerators = undefined;
                }
            });
    }
}
