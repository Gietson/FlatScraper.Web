import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import {
  AdsListComponent,
  AdsService
   } from './ads-list/index'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AdsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
