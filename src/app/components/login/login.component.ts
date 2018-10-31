import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {
  AuthService,
  FacebookLoginProvider,
  SocialUser
} from 'angularx-social-login';
import { AuthHelperService } from '../../services/auth-helper.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private socialAuthService: AuthService,
    readonly auth: AuthHelperService,
    readonly router: Router
  ) { }

  ngOnInit() {
  }

  public socialSignIn() {
    const socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    this.socialAuthService.authState.subscribe(res => {
      from(this.socialAuthService.signIn(socialPlatformProvider)).subscribe((data: SocialUser) => {
        this.auth.setSocialUser(data);
        this.router.navigate(['home']);
      });
    });
  }
}
