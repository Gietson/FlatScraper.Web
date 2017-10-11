import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IAd } from "./";
import { IAdSearch } from "./";
import { environment } from '../../../environments/environment';


@Injectable()
export class AdsService {
  baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = environment.apiUrl + 'ad';
    console.log(this.baseUrl);
  }

  getAds(page?: number, itemsPerPage?: number, form?: IAdSearch): Observable<any> {

    let headers = new Headers();
    if (page != null && itemsPerPage != null) {
      headers.append('X-Pagination-Page', page.toString());
      headers.append('X-Pagination-ResultPerPage', itemsPerPage.toString());
    }
    headers.append('Content-Type', 'application/json');

    let params = this.prepareSearchParams(form);

    let options = new RequestOptions({ headers: headers, search: params });
    return this.http
      .get(this.baseUrl, options)
      .map(response =>
        response.json());
  }

  private prepareSearchParams(form: IAdSearch) {
    let params = new URLSearchParams();
    if (form) {
      Object.keys(form).forEach(key => {
        params.append(key, form[key]);
        console.log('key=' + key + ', form[key]=' + form[key]);
      });
    }
    return params;
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
