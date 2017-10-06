import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IAd } from "./";
import { environment } from  '../../../environments/environment';

@Injectable()
export class AdsService {
  baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = environment.apiUrl + 'ad';
    console.log(this.baseUrl);
  }

  getAds(): Observable<any> {
    return this.http
      .get(`${this.baseUrl}`)
      .map(response =>
        <IAd[]>response.json());
  }
  /*
  getAds(): Observable<IAd[]> {
    return this.http.get("/api/ad")
      .map((response: Response) => {
        return <IAd[]>response.json();
      })
      .catch(this.handleError);
  }*/

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
