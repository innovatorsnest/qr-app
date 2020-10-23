import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";

declare var $: any;

@Injectable()
export class ObservablesService {

  cartProducts = [];


  private cartItems = new BehaviorSubject([]);
  cartItemObservable = this.cartItems.asObservable();
  private orderItems = new BehaviorSubject([]);
  orderItemsObservable = this.orderItems.asObservable();
  



  constructor(private router: Router) { 
 
  }




  updateOrders(order) {


    this.cartProducts = JSON.parse(localStorage.getItem('orders'));

    if(this.cartProducts === null) {
      this.cartProducts = [];
      this.cartProducts.push(order);
    } else {
      this.cartProducts.push(order);
    }
    console.log('cart products', this.cartProducts);


    this.cartItems.next(this.cartProducts);
  }

  updateOrderArray(orders) {
    console.log('orders', orders);

    
    this.orderItems.next(orders);
  }

  getCartOrders() {
    const products = localStorage.getItem('orders');
    console.log('products', products);
    return JSON.parse(products);
  }


}
