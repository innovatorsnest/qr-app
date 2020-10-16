import { throwError as observableThrowError, Observable } from 'rxjs';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpClient,
  HttpEvent,
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class Interceptor implements HttpInterceptor {
  options;
  sessionToken: string;
  newRequest: HttpRequest<any>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url) {
      // console.log('#### YES REQ URL EXISTED');

      console.log('req url', req.url);

    //   this.observableService.updateSpinnerStatus(true);

    //   this.sessionToken = localStorage.getItem(AuthConstants.SessionToken);

    }

    return next.handle(this.newRequest).pipe(
      tap(
        (event) => {
          console.log('event', event);
          if (event['status'] === 200) {
            // this.observableService.updateSpinnerStatus(false);
          }

          console.log('success', event);
        },
        (err) => {
          // console.log("error", err);
          return observableThrowError(err);
        }
      )
    );
  }


}
