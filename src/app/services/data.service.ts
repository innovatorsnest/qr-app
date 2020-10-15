import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'https://sandbox.smartbeings.ai/v1';

  constructor(
    private _http: HttpClient
  ) { }


  getAllOrders() {
    return this._http.get(this.url + "/alert/allOrders").pipe(
      map((res: Response) => {
        return res;
      })
    );
  }
}
