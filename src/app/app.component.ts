import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthHelperService } from './services/auth-helper.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnChanges {
  loggedIn = this.service.isAuthenticated();

  constructor(readonly service: AuthHelperService) {

  }

  ngOnChanges(changes) {
    this.loggedIn = this.service.isAuthenticated();
  }

  ngOnInit(): void {
    this.loggedIn = this.service.isAuthenticated();
  }
}
