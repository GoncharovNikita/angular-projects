import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private $as: AuthService,
    private $router: Router
  ) {}

  canActivate(): Observable<boolean> | boolean {
    if (this.$as.authenticated) { return true; }

    this.$router.navigate(['/login']);
    return false;
  }
}
