import { Component, OnInit } from '@angular/core';
import { AuthHelperService } from '../../services/auth-helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    readonly service: AuthHelperService,
    readonly router: Router
  ) { }

  ngOnInit() {
  }

  socialSignIn() {
    this.service.auth0.authorize();
  }
}
