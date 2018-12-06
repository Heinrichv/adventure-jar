import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthHelperService } from './auth-helper.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    public service: AuthHelperService
  ) { }

  canActivate(): boolean {
    if (this.service.isAuthenticated()) {
      return true;
    }

    this.service.handleAuthentication();
    return false;
  }
}
