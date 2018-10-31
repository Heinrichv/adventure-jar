import { Injectable } from '@angular/core';
import { SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class AuthHelperService {

  constructor() { }

  isLoggedIn(): boolean {
    if (this.getSocialUser()) {
      return true;
    }

    return false;
  }

  getSocialUser(): SocialUser {
    const user = window.localStorage.getItem('user');

    if (user === undefined || user === '') {
      return null;
    }

    return JSON.parse(user) as SocialUser;
  }

  setSocialUser(data: SocialUser) {
    window.localStorage.setItem('user', JSON.stringify(data));
  }

  removeSocialUser() {
    window.localStorage.removeItem('user');
  }
}
