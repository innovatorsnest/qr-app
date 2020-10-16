import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  constructor() { }

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };


  products = [
    {
      name: 'beverage',
      image: 'beverage.jpg'
    },
    {
      name: 'food',
      image: 'dish.jpg'
    },
    {
      name: 'shopping',
      image: 'dish.jpg'
    },
    {
      name: 'about us',
      image: 'beverage.jpg'
    },
    {
      name: 'activities',
      image: 'dish.jpg'
    },
    {
      name: 'Dish',
      image: 'dish.jpg'
    }
  ];

  ngOnInit() {
  }

}
