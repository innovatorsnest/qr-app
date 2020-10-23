import { HelperService } from './../services/helper.service';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private helperService: HelperService,
  ) {

    this.route.params.subscribe((params) => {
      console.log('params', params);
      this.getProductsOfSubCategory(params.id);
    })
  }


  ngOnInit() {

  }


  getProductsOfSubCategory(subCategoryId) {
    this.helperService.presentLoader('Fetching Products');
    this.dataService.getAllProductsInsideSubcategory(subCategoryId)
      .subscribe((response) => {
        console.log('response from getting the product', response);
        this.products = response["data"]["products"];
      }, error => {
        this.helperService.presentToast('Error while getting products`')

      })
  }

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };



}
