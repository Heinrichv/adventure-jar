import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {
  AuthService,
  FacebookLoginProvider,
  SocialUser
} from 'angular-6-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private socialAuthService: AuthService) { }

  ngOnInit() {
  }

  public socialSignIn() {
    const socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    this.socialAuthService.authState.subscribe(res => {
      from(this.socialAuthService.signIn(socialPlatformProvider)).subscribe((data) => {
        if (data) {
        }
      });
    });
  }
}
