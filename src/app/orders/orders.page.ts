import { HelperService } from './../services/helper.service';
import { DataService } from './../services/data.service';
import { ObservablesService } from './../services/observable.services';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  orders: any;

  totalAmount :any;
  orderSummary: { items: any[]; currency: string; amount: number; };

  constructor(
    private route: ActivatedRoute,
    private observableService: ObservablesService,
    private dataService: DataService,
    private helperService: HelperService,
    private router: Router,
  ) { }

 
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  

  ngOnInit() {
     this.orders = JSON.parse(localStorage.getItem('orders'));
     console.log('orders', this.orders);
     console.log(this.orders);
     const payload = {
       items: [],
       currency: '$',
       amount: 0
 
     };
     this.orders.forEach((order,index) => {
       payload.items.push(order.item);
       payload.amount = order.count * order.item.price;
     })

     
     this.orderSummary = payload;
     console.log('payload', payload);
  }


  placeOrder() {
    console.log('order summary', this.orderSummary);
    this.dataService.createOrder(this.orderSummary).subscribe((response) => {
      this.helperService.presentToast('Order Places Successfully');
      localStorage.setItem('orders',JSON.stringify([]));
      this.router.navigate(['home']);
    }, error => {
      this.helperService.presentToast('Error while Placing Order');
      
    })
    
  }
}
