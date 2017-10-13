import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { User } from 'firebase';
import { Auth } from 'firebase/auth';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class AccountService {
    private _authState: Observable<User>;
    private _auth: Auth;
    isLogged: Subject<boolean> = new Subject();

    get auth() {
        return this._auth;
    }
    get authState() {
        return this._authState;
    }

    constructor(private angularFireAuth: AngularFireAuth) {
        this._auth      = this.angularFireAuth.auth;
        this._authState = this.angularFireAuth.authState;
        this._authState.subscribe(state => {
            this.isLogged.next(state !== null);
        });
    }

}
