import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { RegisterUser } from './register.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ["", Validators.required],
      email: ["", Validators.email],
      password: ["", Validators.required]
    });
  }

  public submit() {
    // create a new User object
    const user: RegisterUser = new RegisterUser();
    user.email = this.form.get("email").value;
    user.username = this.form.get("username").value;
    user.password = this.form.get("password").value;

    // trim values
    user.email.trim();
    user.username.trim();
    user.password.trim();

    this.authService.register(user)
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
