import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService, SocialUser } from '../../node_modules/angular-6-social-login';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnChanges {
  user: SocialUser;
  loggedIn = false;

  constructor(readonly authService: AuthService) {

  }

  ngOnChanges(changes) {
    console.log(changes);
  }

  ngOnInit(): void {
    window.setInterval(() => {
      this.authService.authState.subscribe((user) => {
        this.user = user;
        this.loggedIn = (user != null);
      });
    }, 1000);
  }
}
