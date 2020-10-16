import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";

declare var $: any;

@Injectable()
export class ObservablesService {


  private cartItems = new BehaviorSubject({});
  domainNameObservable = this.cartItems.asObservable();



  constructor(private router: Router) {}



  updateOrders(order) {
    this.cartItems.next(order);
  }


}
