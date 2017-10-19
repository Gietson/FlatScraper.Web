import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { IRegister } from './register.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model = <IRegister>{};

  constructor(
    private authService: AuthService,
    private router: Router) {
  }

  ngOnInit() {}

  register() {
    this.authService.register(this.model)
      .subscribe(
        data => {
          console.log('Register successful');
          this.router.navigate(['/login']);
        },
        error => {
          console.log('Error Register=' + JSON.stringify(error));
        });
  }
}
