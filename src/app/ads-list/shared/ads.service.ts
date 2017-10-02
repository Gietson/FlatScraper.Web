import { Injectable } from '@angular/core';
import { Observable } from "rxjs/RX"
import { Http, Response, Headers, RequestOptions } from "@angular/http"
import { IAd } from "./"

@Injectable()
export class AdsService {

  constructor(private http: Http) { }

  getAds(): Observable<IAd[]> {
    return this.http.get("localhost/api/ad")
      .map((response: Response) => {
        return <IAd[]>response.json();
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
