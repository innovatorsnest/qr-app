import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { domain } from 'process';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  domainId;
  constructor(
    private route: ActivatedRoute
  ) {


    this.route.params.subscribe((res) => {
      console.log('res', res);
      this.domainId = res['id'];
    })


    console.log('domain id', this.domainId);
  }


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



  ngOnInit() {

  }



}
