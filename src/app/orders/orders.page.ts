import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

 
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  

  ngOnInit() {
    
  }

}
