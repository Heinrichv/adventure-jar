import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import {
  SocialLoginModule,
  AuthServiceConfig,
  FacebookLoginProvider,
} from 'angular-6-social-login';
import { MaterialModule } from 'src/app/material.module';
import 'hammerjs';

import { AppComponent } from 'src/app/app.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { ManageComponent } from 'src/app/components/manage/manage.component';
import { LandingComponent } from 'src/app/components/landing/landing.component';

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
    LandingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'home', component: LandingComponent },
      { path: 'manage', component: ManageComponent },
      { path: '**', redirectTo: '/home' }
    ]),
    SocialLoginModule,
    MaterialModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
