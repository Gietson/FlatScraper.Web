import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
  MatSliderModule,
  MatToolbarModule,
  MatCardModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const MODULES = [
  FlexLayoutModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatSliderModule,
  MatToolbarModule,
  MatSidenavModule,
  BrowserAnimationsModule,
  MatCardModule,
];

@NgModule({
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES
  ]
})
export class AngularMaterialModule { }
