import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { User } from 'firebase';
import { AccountService } from '../account.service';

import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: [
        './auth.component.sass'
    ]
})
export class AuthComponent implements OnInit {
    authState: Observable<User>;
    constructor(private accService: AccountService) {}

    ngOnInit() {
        this.authState = this.accService.authState;
        this.authState.subscribe(state => {
        });
    }

    auth() {
        this.accService.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    logout() {
        this.accService.auth.signOut();
    }
}
