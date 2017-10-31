import { AccountActions } from './../account.actions';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { User } from 'firebase/auth';
import { AccountService } from '../account.service';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state.class';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: [
        './auth.component.sass'
    ]
})
export class AuthComponent implements OnInit {
    authState: Observable<User>;
    constructor(private $store: Store<AppState>) {}

    ngOnInit() {
    }

    auth() {
        this.$store.dispatch({ type: AccountActions.AUTHORIZE });
    }

    logout() {
        this.$store.dispatch({ type: AccountActions.LOGOUT });
    }
}
