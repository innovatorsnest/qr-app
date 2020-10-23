import { DataService } from './../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { HelperService } from '../services/helper.service';



@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.page.html',
  styleUrls: ['./subcategory.page.scss'],
})
export class SubcategoryPage implements OnInit {
  subCategories: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService,
    private helperService: HelperService,
  ) { 

    this.route.params.subscribe((params) => {
      console.log('params', params);
      this.getSubCategories(params.id);
    })
    
  }

  ngOnInit() {
    
  }

  getSubCategories(categoryId) {
    this.helperService.presentLoader('Fetching Subcategories');
    this.dataService.getAllSubCategoriesOfCategory(categoryId)
    .subscribe((response) => {
      console.log('response while getting the subcategories', response);
      this.subCategories = response["data"]["subCategories"];
    }, error => {
      console.log('error while getting the subcategories', error);
    });
  }

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };



  goToProduct(subCategory) {
    this.router.navigate([`products/${subCategory.id}`]);
  }
 
  
}
