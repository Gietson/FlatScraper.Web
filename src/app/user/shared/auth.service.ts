import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../environments/environment';
import { ILogin } from '../login/login.model'

@Injectable()
export class AuthService {
  baseUrl: string;
  headers: Headers;

  constructor(private http: Http) {
    this.baseUrl = environment.apiUrl + 'auth/login';
    console.log(this.baseUrl);

    this.headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: this.headers });
  }

  login(model: ILogin): Observable<any[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let body = { email: model.email, password: model.password };

    console.log('service login, baseUrl=' + this.baseUrl + ', body=' + JSON.stringify(body));

    return this.http.post(this.baseUrl, model, options)
      .map(this.parseData)
      .catch(this.handleError);
  }

  getToken() {
    console.log('[getToken] Rozpoczynam pobieranie tokenu');
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {

      console.log('[getToken] Token = ' + currentUser.token);
      //let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      //return new RequestOptions({ headers: headers });
      return currentUser.token;
    }

    console.log('[getToken] Token nie został znaleziony');
  }

  private parseData(res: Response) {
    console.log('parseData=' + JSON.stringify(res.json()));
    let user = res.json();
    if (user && user.token) {
      localStorage.setItem('currentUser', JSON.stringify(user));

    };
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
  }

}
