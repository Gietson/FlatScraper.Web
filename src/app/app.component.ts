import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template:`
  <app-navbar></app-navbar>
  <ads-list></ads-list>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
