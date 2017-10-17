import { Component, OnInit } from '@angular/core';
import { ILogin } from './login.model';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = <ILogin>{};
  hide = true;

  errorMessage: string;
  posts: any[];

  constructor(private authService: AuthService) {}

  ngOnInit() {

  }

  login() {
    this.authService.login(this.model).subscribe();

  }

}
