import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";

declare var $: any;

@Injectable()
export class ObservablesService {

  cartProducts = [];

  private cartItems = new BehaviorSubject({});
  cartItemObservable = this.cartItems.asObservable();



  constructor(private router: Router) {}



  updateOrders(order) {
    this.cartItems.next(order);
  }

  getCartOrders() {
    const products = localStorage.getItem('orders');
    console.log('products', products);
    return JSON.parse(products);
  }


}
