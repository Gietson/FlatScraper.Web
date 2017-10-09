import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
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

  getAds(page?:number, itemsPerPage?: number): Observable<any> {

    let headers = new Headers();
    if (page != null && itemsPerPage != null) {
      headers.append('Pagination', page + ',' + itemsPerPage);
    }
    headers.append('Content-Type', 'application/json');
    headers.append('authentication', `hello`);

    let options = new RequestOptions({ headers: headers });

    return this.http
      .get(`${this.baseUrl}`, options)
      .map(response =>
        response.json());
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
