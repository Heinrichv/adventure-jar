import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import {
  SocialLoginModule,
  AuthServiceConfig,
  FacebookLoginProvider,
} from 'angularx-social-login';
import { MaterialModule } from 'src/app/material.module';
import 'hammerjs';

import { AppComponent } from 'src/app/app.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { ManageComponent } from 'src/app/components/manage/manage.component';
import { LandingComponent } from 'src/app/components/landing/landing.component';
import { AuthGuardService as AuthGuard } from 'src/app/services/auth-guard.service';
import { AuthHelperService } from 'src/app/services/auth-helper.service';
import { NavbarComponent } from 'src/app/components/individual/navbar/navbar.component';

export function getAuthServiceConfigs() {
  return new AuthServiceConfig([
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider('728728677505915')
    }
  ]);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManageComponent,
    LandingComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LandingComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'home',
        component: LandingComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'manage',
        component: ManageComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '**',
        redirectTo: '/home',
        canActivate: [AuthGuard]
      }
    ]),
    SocialLoginModule,
    MaterialModule
  ],
  providers: [
    AuthHelperService,
    AuthGuard,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
