import { Component, OnInit } from '@angular/core';
import { SocialUser, AuthService } from 'angularx-social-login';
import { AuthHelperService } from '../../../services/auth-helper.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: SocialUser;
  isMobile: boolean;
  constructor(
    readonly auth: AuthHelperService,
    readonly social: AuthService,
    readonly router: Router,
    readonly platform: Platform
  ) { }

  ngOnInit() {
    this.isMobile = this.platform.ANDROID || this.platform.IOS;
    this.user = this.auth.getSocialUser();
    console.log(this.user);
  }

  logout() {
    from(this.social.signOut()).subscribe(() => {
      this.auth.removeSocialUser();
      this.router.navigate(['login']);
    });
  }
}
