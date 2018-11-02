import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthHelperService } from './auth-helper.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    public auth: AuthHelperService,
    public router: Router
  ) { }

  canActivate(): boolean {
    if (this.auth.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
