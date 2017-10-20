import { Component, OnInit } from '@angular/core';
import { LoginUser } from './login.model';
import { AuthService } from '../shared/auth.service';
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  loginInvalid: true;
  returnUrl: string;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ["", Validators.email],
      password: ["", Validators.required]
    });

    // reset login status
    this.authService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  public submit() {
    // create na new LoginUser object
    const user: LoginUser = new LoginUser();
    user.email = this.form.get("email").value;
    user.password = this.form.get("password").value;

    // trim values
    user.email.trim();
    user.password.trim();

    this.authService.login(user)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          //this.alertService.error('Username or password is incorrect');
          console.error('login err=' + error);
          //this.loading = false;
        });
  }
}
