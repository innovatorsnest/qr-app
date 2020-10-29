import { Router } from '@angular/router';
import { ObservablesService } from './../../services/observable.services';
import { DataService } from './../../services/data.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {

  @Input() title;
  @Input() cartCount = 0;
  order: {};
  orders: any[];



  constructor(
    private data: DataService,
    private observableService: ObservablesService,
    private router: Router,
  ) {

      this.updateTotalProductCount();
   }

   updateTotalProductCount() {

    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    console.log('cart items', cartItems);
  
    const total = cartItems["products"].map(item => item.count).reduce((prev, next) => prev + next);
    console.log('update total count', total);
    this.observableService.updateCartItems(total);

  }


  ngOnInit() {
    this.observableService.cartItemObservable.subscribe((count) => {
      console.log('count inside the observable', );
      this.cartCount = count
    })

    



  }



  logout() {
    this.data.logoutSession();
  }

  goToOrders() {
    // this.observableService.updateOrderArray(this.orders);
    console.log('orders', this.orders);
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.length = 0;
    localStorage.setItem('orders', JSON.stringify(this.orders));
    this.router.navigate(['orders']);
  }

}
