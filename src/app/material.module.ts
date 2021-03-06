import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatInputModule,
  MatToolbarModule,
  MatSidenavModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatListModule,
  MatStepperModule,
  MatRadioModule,
  MatDialogModule,
  MatMenuModule,
  MatChipsModule
} from '@angular/material';

import { PlatformModule } from '@angular/cdk/platform';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatListModule,
    MatStepperModule,
    MatRadioModule,
    MatDialogModule,
    PlatformModule,
    MatMenuModule,
    MatChipsModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatListModule,
    MatStepperModule,
    MatRadioModule,
    MatDialogModule,
    PlatformModule,
    MatMenuModule,
    MatChipsModule
  ]
})
export class MaterialModule { }
