import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";

declare var $: any;

@Injectable()
export class ObservablesService {

  cartProducts = [];


  private cartItems = new BehaviorSubject(0);
  cartItemObservable = this.cartItems.asObservable();
  private orderItems = new BehaviorSubject([]);
  orderItemsObservable = this.orderItems.asObservable();

    



  constructor(private router: Router) { 
 
  }

 
  updateCartItems(cartItems) {
    console.log('cartItems', cartItems);

    
    this.cartItems.next(cartItems);
  }

  getCartOrders() {
    const products = localStorage.getItem('orders');
    console.log('products', products);
    return JSON.parse(products);
  }


}
