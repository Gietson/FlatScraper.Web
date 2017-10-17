import { Component } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template:`
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private http: HttpClient) {
    /*this.http.get('http://localhost:5000/api/ad')
      .subscribe(
        data => console.log('przyszły dane z testowego zapytania'),
        err => console.log(err)
      );*/
  }



}
