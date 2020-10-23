import { DataService } from './../services/data.service';
import { HelperService } from './../services/helper.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { domain } from 'process';
import { timeout } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  domainId;
  allCategories: any;
  constructor(
    private route: ActivatedRoute,
    private helper: HelperService,
    private dataService: DataService,
    private router: Router,
  ) {


  }


  slideOpts = {
    initialSlide: 1,
    speed: 400
  };


  ngOnInit() {
    
    this.getCategories();
    // this.getOrders();
  }

  // getOrders() {
  //   this.dataService.getOrders().subscribe((response) => {
  //     console.log('%c response from getting the orders', 'color: yellow', response);
  //     this.helper.loadingController.dismiss();

  //   }, error => {
  //     console.log('%c error while getting orders', 'color: yellow', error);
  //     this.helper.loadingController.dismiss();

  //   })
  // }

  getCategories() {
    this.dataService.getAllCategories().subscribe((response) => {
      console.log('%c response while adding the categories', 'color: yellow', response);
      this.allCategories = response["data"]["categories"];
    }, error => {
      console.log('%c error while adding the categories', 'color: yellow', error);
    })
  }



  goToSubcategory(category) {
    if(category.hasSubCategory === true) {
      this.router.navigate([`subcategory/${category.id}`]);
    } else {
      console.log('display snackbar');
      this.helper.presentToast('No SubCategories and Products');
      // display snackbar
    }
   
  }

}
