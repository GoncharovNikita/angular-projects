import { firebaseSecret } from './../../environments/.secret';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { User } from 'firebase/auth';
import { Auth } from 'firebase/auth';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import { IRefrigerator } from '../refrigerator/refrigerator';
import { IRefUser, RefUser, UserQuery } from './refrigerator.user';

export interface AccountState {
    userRef: AngularFireList<IRefUser>;
}


@Injectable()
export class AccountService {
    private _authState: Observable<User>;
    private _auth: Auth;
    private _userState: User;
    private _userId: string;
    private _userRef: AngularFireList<UserQuery>;
    private _usersRef: AngularFireList<Object>;
    private subscriptions: Array<Subscription> = new Array();
    private userRegisteredInDatabase = false;
    state: Subject<AccountState> = new Subject();
    isLogged: Subject<boolean> = new Subject();

    get userId() {
        return this._userId;
    }
    get auth(): Auth {
        return this._auth;
    }
    get authState(): User {
        return this._authState;
    }
    get userRef() {
        return this._userRef;
    }
    get userState() {
        return this._userState;
    }

    constructor(
        private angularFireAuth: AngularFireAuth,
        private afd: AngularFireDatabase) {
        this._auth      = this.angularFireAuth.auth;
        this._authState = this.angularFireAuth.authState;
        this._usersRef  = this.afd.list('users');
        this._authState.subscribe(state => {
            if (state) {
                this._userState = state;
                this._userId  = state.uid;
                this._userRef = this.afd.list(`users/${state.uid}`);
                if (this.subscriptions.length === 0) {
                    this.addSubscriptions(state);
                }
                this.state.next({
                    userRef: this._userRef
                });
            } else {
                this.deleteSubscriptions();
                this.state.next({
                    userRef: undefined
                });
            }
            this.isLogged.next(state !== null);
        });
    }

    initializeNewUser() {
        this._userRef.push(
            new RefUser({
                key: this._userState.uid,
                displayName: this._userState.displayName,
                email: this._userState.email
            })
        );
    }

    updateUser(params: UserQuery) {
        this._userRef.update(this._userState['key'], params);
    }

    authenticate() {
      this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    addSubscriptions(state: User) {
        this.subscriptions.push(
            this.afd.object(`users/${state.uid}`).valueChanges().subscribe(a => {
                if (a === null) {
                    this.initializeNewUser();
                }
            })
        );
        this.subscriptions.push(
            this._userRef.snapshotChanges().subscribe(userSnap => {
                this._userState['key'] = userSnap[0].key;
            })
        );
        this.subscriptions.push(
            this._usersRef.snapshotChanges().subscribe(usersSnap => {
                // console.log(usersSnap);
            })
        );
    }

    deleteSubscriptions() {
        this.subscriptions.map(s => {
            s.unsubscribe();
            this.subscriptions = this.subscriptions.slice(1, this.subscriptions.length);
        });
    }

}
