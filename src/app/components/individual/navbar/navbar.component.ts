import { Component, OnInit } from '@angular/core';
import { AuthHelperService } from '../../../services/auth-helper.service';
import { Router } from '@angular/router';
import { Platform } from '@angular/cdk/platform';
import { Auth0UserProfile } from 'auth0-js';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user = {
    picture: '',
    name: ''
  };
  isMobile: boolean;
  constructor(
    readonly helperService: AuthHelperService,
    readonly router: Router,
    readonly platform: Platform
  ) { }

  ngOnInit() {
    this.isMobile = this.platform.ANDROID || this.platform.IOS;
    this.helperService.getUserInfo((err, res: Auth0UserProfile) => {
      console.log(res);
      this.user = res;
    });
  }

  logout() {
    this.helperService.logout();
    this.router.navigate(['login']);
  }
}
