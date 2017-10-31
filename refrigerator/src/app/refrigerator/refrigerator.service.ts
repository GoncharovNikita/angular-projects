import { AppState } from './../app.state.class';
import { Observable } from 'rxjs/Observable';
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
import { Store } from '@ngrx/store';
import { User } from '../accounting/user/user.class';

@Injectable()
export class RefrigeratorService extends AService {
    private _refrigeratorsRef: AngularFireList<IRefrigerator>;
    private _refrigeratorsObservable: Observable<Array<Refrigerator>>;
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
        private accService: AccountService,
        private $store: Store<AppState>
    ) {
        super();
        this._refrigeratorsObservable = this.$store.select('user')
          .map(user => <User>user)
          .switchMap(user => {
            return this.afd.list('/refrigerators', ref => {
              return ref.orderByKey().equalTo('-KwQnqq-3cKccBVtF-67');
            }).valueChanges();
          });
    }

    fetchRefrigerators(): Observable<Array<Refrigerator>> {
      return this._refrigeratorsObservable;
    }

    addSubscriptions() {
    }

    addRefrigerator(ref: IRefrigerator): Observable<Refrigerator> {
        const index = ref.users[this.accService.userState.email];
        if (!index) {
            ref.users[this.accService.userState.uid] = true;
        }
        return Observable.fromPromise(this._refrigeratorsRef.push(ref));
    }
}
