import { Router } from '@angular/router';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'https://www.smartbeings.ai/v1';
  httpOptions: { headers: any; };

  constructor(
    private _http: HttpClient,
    private router: Router,
  ) {

    const token = localStorage.getItem('token');
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', token);

    this.httpOptions = {
      headers: headers
    }

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

    const token = localStorage.getItem('token');
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', token);

    return this._http.get(this.url + '/fnbOrder/Allorders', { headers: headers }).pipe(
      map((res) => {
        console.log('%c response from get all orders', 'color: yellow', res);
        return res;
      })
    );

  }


  getAllCategories() {
    const token = localStorage.getItem('token');
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', token);
    // header - Authorization
    return this._http.get(this.url + '/fnb/categories', { headers: headers }).pipe(
      map((res) => {
        console.log('%c response from get all categories', 'color: yellow', res);
        return res;
      })
    );
  }


  getAllProductsInsideSubcategory(id) {
    const token = localStorage.getItem('token');
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', token);
    // header  - Authorization
    return this._http.get(this.url + '/fnb/products?subCategoryId=' + id, {headers: headers}).pipe(
      map((res) => {
        console.log('%c response from getting products inside  sub category', 'color: yellow', res);
        return res;
      })
    );
  }

  createOrder(payload) {
    const token = localStorage.getItem('token');
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', token);
    // header - Content-Type , Authorization
    return this._http.post(this.url + '/fnbOrder/order', payload, {headers: headers}).pipe(
      map((res) => {
        console.log('%c response from creating an order', 'color: yellow', res);
        return res;
      })
    );
  }


  getAllSubCategoriesOfCategory(id) {
    const token = localStorage.getItem('token');
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', token);
    // header  - Authorization
    return this._http.get(this.url + '/fnb/subCategories/' + id, { headers: headers }).pipe(
      map((res) => {
        console.log('%c response from getting sub category', 'color: yellow', res);
        return res;
      })
    );
  }
}

