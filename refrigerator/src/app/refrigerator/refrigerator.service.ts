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
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/merge';

@Injectable()
export class RefrigeratorService extends AService {
    private _refrigeratorsRef: AngularFireList<IRefrigerator>;
    private _refrigeratorsObservable: Observable<Array<Refrigerator>>;
    private _refrigeratorsIds: Object;
    subscriptions: Array<Subscription> = new Array();

    get refrigeratorsIds() {
        return this._refrigeratorsIds;
    }

    constructor(
        private afd: AngularFireDatabase,
        private accService: AccountService,
        private $store: Store<AppState>
    ) {
        super();
        this.subscriptions.push(
          this.$store.select('user')
            .map(value => <User>value)
            .subscribe(user => {
              if (user) {
                this._refrigeratorsRef = this.afd.list(`/refrigerators/${user.uid}`);
              } else {
                this._refrigeratorsRef = undefined;
              }
            }),
        );
    }

    fetchRefrigerators(): Observable<Array<Refrigerator>> {
      return this.$store.select('user')
        .map(user => <User>user)
        .switchMap(user => {
          if (user) {
            return Observable.merge(
              this._refrigeratorsRef.snapshotChanges(),
              this._refrigeratorsRef.valueChanges()
            ).pairwise()
              .filter(_ => _[0][0]['type'] === 'child_added')
              .map(_ => {
                const snap: Array<Object> = _[0];
                const refs = _[1];
                snap.forEach((s, k) => {
                  refs[k]['id'] = s['key'];
                });
                return refs;
              });
          } else {
            return Observable.of(undefined);
          }
        });
    }

    addSubscriptions() {
    }

    addRefrigerator(ref: IRefrigerator): Observable<Refrigerator> {
      return Observable.fromPromise(this._refrigeratorsRef.push(ref));
    }
}
