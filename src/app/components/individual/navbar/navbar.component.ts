import { Component, OnInit } from '@angular/core';
import { SocialUser, AuthService } from 'angularx-social-login';
import { AuthHelperService } from '../../../services/auth-helper.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: SocialUser;
  constructor(readonly auth: AuthHelperService, readonly social: AuthService, readonly router: Router) { }

  ngOnInit() {
    this.user = this.auth.getSocialUser();
    console.log(this.user);
  }

  logout() {
    from(this.social.signOut()).subscribe(() => {
      this.auth.removeSocialUser();
      this.router.navigateByUrl('/');
    });
  }
}
