import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };


  categories = [
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
}
