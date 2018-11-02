import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {
  SocialLoginModule,
  AuthServiceConfig,
  FacebookLoginProvider,
} from 'angularx-social-login';
import 'hammerjs';

import { AuthHelperService } from './services/auth-helper.service';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { PlacesService } from 'src/app/services/places.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/individual/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { ManageComponent } from './components/manage/manage.component';
import { LandingComponent } from './components/landing/landing.component';
import { PlacesComponent } from './components/individual/places/places.component';
import { PlaceComponent } from './components/individual/places/place/place.component';

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
    NavbarComponent,
    LoginComponent,
    ManageComponent,
    LandingComponent,
    PlacesComponent,
    PlaceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule,
    MaterialModule,
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
        redirectTo: '/',
        canActivate: [AuthGuard]
      }
    ])
  ],
  providers: [
    PlacesService,
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
