import { DataService } from './../services/data.service';
import { HelperService } from './../services/helper.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { domain } from 'process';
import { timeout } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  domainId;

  httpOptions;
  constructor(
    private route: ActivatedRoute,
    private helper: HelperService,
    private dataService: DataService,
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
    

  
    
    this.getOrders();

  }

  getOrders() {
    this.dataService.getOrders().subscribe((response) => {
      console.log('%c response from getting the orders', 'color: yellow', response);
      this.helper.loadingController.dismiss();

    }, error => {
      console.log('%c error while getting orders', 'color: yellow', error);
      this.helper.loadingController.dismiss();

    })
  }

}
