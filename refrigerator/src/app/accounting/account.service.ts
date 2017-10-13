import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';
import { User } from 'firebase';
import { Auth } from 'firebase/auth';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { IRefrigerator } from '../refrigerator/refrigerator';

interface IUser {
    refrigerators: Array<IRefrigerator>;
    email: string;
    displayName: string;
}

@Injectable()
export class AccountService {
    private _authState: Observable<User>;
    private _auth: Auth;
    private _userId: string;
    private _userRef: AngularFireList<IUser>;
    isLogged: Subject<boolean> = new Subject();

    get userId() {
        return this._userId;
    }
    get auth() {
        return this._auth;
    }
    get authState() {
        return this._authState;
    }

    constructor(private angularFireAuth: AngularFireAuth,
        private afd: AngularFireDatabase) {
        this._auth      = this.angularFireAuth.auth;
        this._authState = this.angularFireAuth.authState;
        this._authState.subscribe(state => {
            if (state) {
                this._userId = state.uid;
                this._userRef = this.afd.list(`users/${state.uid}`);
            }
            this.isLogged.next(state !== null);
        });
    }

}
