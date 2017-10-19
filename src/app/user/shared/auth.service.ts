import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../environments/environment';
import { ILogin } from '../login/login.model';
import { IRegister } from '../register/register.model';
import { Router } from '@angular/router'

@Injectable()
export class AuthService {
  baseUrl: string;
  headers: Headers;

  constructor(private http: Http, private router: Router) {
    this.baseUrl = environment.apiUrl + 'auth';
    console.log(this.baseUrl);
  }

  public login(model: ILogin) {
    return this.http.post(this.baseUrl + '/login', model)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let user = response.json();
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      });
  }

  public register(model: IRegister) {
    return this.http.post(this.baseUrl + '/register', model);
  }

  public getToken() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      return currentUser.token;
    }
    return false;
  }

  public getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  public isAuthenticated(): boolean {
    const isAuthorized: boolean = !!localStorage.getItem('currentUser');
    return isAuthorized;
  }

  // Displays the error message
  private handleError(error: Response | any) {
    let errorMessage: string;

    errorMessage = error.message ? error.message : error.toString();
    console.error(errorMessage);
    // In real world application, call to log error to remote server
    // logError(error);

    // This returns another Observable for the observer to subscribe to
    return Observable.throw(errorMessage);
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

}
