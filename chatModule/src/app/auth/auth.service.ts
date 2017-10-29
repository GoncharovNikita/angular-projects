import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Auth } from 'firebase/auth';
import { CanActivate, Resolve, Router } from '@angular/router';
import * as firebae from 'firebase';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class AuthService {
  state: Auth;
  constructor(
    private $af: AngularFireAuth,
    private $router: Router
  ) {
    this.$af.authState.subscribe(state => {
      this.state = state;
    });
  }

  get authenticated() {
    return this.state !== null;
  }

  $authenticate(): Observable<Auth> {
    return Observable.fromPromise(this.$af.auth.signInWithPopup(new firebae.auth.GoogleAuthProvider()));
  }

  $logout(): Observable<Auth> {
    return Observable.fromPromise(this.$af.auth.signOut());
  }

  $fetchSession(): Observable<Auth> {
    return this.$af.authState;
  }
}
