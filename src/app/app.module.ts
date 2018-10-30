import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocialLoginModule } from 'angular5-social-login';

import { AppComponent } from 'src/app/app.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { ManageComponent } from 'src/app/components/manage/manage.component';
import { LandingComponent } from 'src/app/components/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManageComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
