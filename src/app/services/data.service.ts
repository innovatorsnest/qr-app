import { Router } from '@angular/router';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'https://sandbox.smartbeings.ai/v1';
  httpOptions: { headers: any; };

  constructor(
    private _http: HttpClient,
    private router: Router,
  ) {

  }



  getAccessTokenFromQr(payload) {
    console.log("login payload", payload);
    return this._http
      .post(this.url + "/user/login", payload)
      .pipe(
        map((res: Response) => {
          return res;
        })
      );
  }

  logoutSession() {
    localStorage.clear();
    this.router.navigate(['login/null/null']);

  }

  getOrders() {
    console.log('session token inside the get Orders', localStorage.getItem('token'));

    const token = localStorage.getItem('token');
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', token);

    return this._http.get(this.url + '/fnbOrder/Allorders', {headers: headers}).pipe(
      map((res) => {
        console.log('%c response from get all orders', 'color: yellow', res);

        return res;
      })

    );

  }

}

