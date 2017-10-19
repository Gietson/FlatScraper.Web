import { Component, OnInit } from '@angular/core';
import { ILogin } from './login.model';
import { AuthService } from '../shared/auth.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = <ILogin>{};
  loginInvalid: true;
  returnUrl: string;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // reset login status
    this.authService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.authService.login(this.model)/*.subscribe(resp => {
      if (!resp) {
        this.loginInvalid = true;
      } else {
        this.router.navigate(['']);
      }
    });*/
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
