import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IAd } from "./";
import { IAdSearch } from "./";
import { environment } from '../../../environments/environment';


@Injectable()
export class AdsService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl + 'ad';
    console.log(this.baseUrl);
  }

  getAds(page?: number, itemsPerPage?: number, form?: IAdSearch): Observable<any> {

    const headers = this.prepareHeader(page, itemsPerPage);
    const params = this.prepareSearchParams(form);

    return this.http
      .get(this.baseUrl, { headers: headers, params: params })
      .map(response => response);
  }

  private prepareSearchParams(form: IAdSearch) {
    let params = new HttpParams();
    if (form) {
      Object.keys(form).forEach(key => {
        params = params.set(key, form[key]);
        console.log('key=' + key + ', form[key]=' + form[key]);
      });
    }
    return params;
  }

  private prepareHeader(page?: number, itemsPerPage?: number) {
    let headers = new HttpHeaders();
    if (page != null && itemsPerPage != null) {
      console.log('dodaje pagination page=' + page + ', itemsPerPage=' + itemsPerPage);
      headers = headers.set('X-Pagination-Page', page.toString());
      headers = headers.set('X-Pagination-ResultPerPage', itemsPerPage.toString());
    }
    headers = headers.set('Content-Type', 'application/json');
    console.log('headers = ' + JSON.stringify(headers));

    return headers;
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
