import { Injectable } from '@angular/core';
import { IRefrigerator, Refrigerator } from './refrigerator';
import {
    AngularFireDatabase,
    AngularFireList
} from 'angularfire2/database';
import { AccountService, AccountState } from '../accounting/account.service';
import { RefUser, IRefUser } from '../accounting/refrigerator.user';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { AService } from '../abstract/service.abstract';

@Injectable()
export class RefrigeratorService extends AService {
    private _refrigeratorsRef: AngularFireList<IRefrigerator>;
    private _refrigeratorsIds: Object;
    private _refrigerators: Subject<Array<IRefrigerator>> = new Subject();
    subscriptions: Array<Subscription> = new Array();

    get refrigeratorsIds() {
        return this._refrigeratorsIds;
    }
    get refrigerators() {
        return this._refrigerators;
    }

    constructor(
        private afd: AngularFireDatabase,
        private accService: AccountService
    ) {
        super();
        this.accService.state
            .map(s => s.userRef)
            .subscribe(userRef => {
                if (userRef) {
                    userRef.valueChanges()
                    .map(s => <IRefUser>s[0])
                    .subscribe(snap => {
                        this._refrigeratorsRef = this.afd.list('refrigerators');
                        this._refrigeratorsIds = snap.refrigeratorsIds;
                        if (this.subscriptions.length === 0) { this.addSubscriptions(); }
                    });
                } else {
                    this._refrigeratorsIds = undefined;
                    this.deleteSubscriptions();
                }
            });
    }

    addSubscriptions() {
        this.subscriptions.push(
            this._refrigeratorsRef.snapshotChanges()
                .map(r => {
                    return (
                        r.map(changes => {
                            return (
                                <IRefrigerator>({ id: changes.payload.key, ...changes.payload.val() })
                            );
                        })
                    );
                })
                .subscribe(refs => {
                    this.accService.updateUser({
                        refrigeratorsIds: refs.map(r => r.id)
                    });
                    this._refrigerators.next(refs);
                })
        );
    }

    addRefrigerator(ref: IRefrigerator) {
        const index = ref.users[this.accService.userState.email];
        if (!index) {
            ref.users[this.accService.userState.uid] = true;
        }
        this._refrigeratorsRef.push(ref);
    }
}
