import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/shared/auth.service';
import { ICurrentUser } from "../user/shared/auth.model";
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: ICurrentUser;
  isAuth: boolean;
  constructor(private auth: AuthService) {
    this.currentUser = this.auth.getCurrentUser();
    console.log('currentUser=' + JSON.stringify(this.currentUser));
  }

  ngOnInit() {
  }

  isAuthenticated() {
    return this.auth.isAuthenticated();
  }

  onLogout() {
    this.auth.logout();
  }

}
