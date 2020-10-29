import { ObservablesService } from './../services/observable.services';
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
  allProducts: any;
  cartItems: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private helperService: HelperService,
    private observableService: ObservablesService,
  ) {
    this.route.params.subscribe((params) => {
      console.log('params', params);
      this.getProductsOfSubCategory(params.id);
    });

  }


  ngOnInit() {

  }


  getProductsOfSubCategory(subCategoryId) {
    this.helperService.presentLoader('Fetching Products');
    this.dataService.getAllProductsInsideSubcategory(subCategoryId)
      .subscribe((response) => {
        console.log('response from getting the product', response);
        // this.products = response["data"]["products"];
        this.cartItems = JSON.parse(localStorage.getItem('cartItems'));


        console.log('products fetched from localstorage cart items', this.cartItems);

        // getting the actual count from the local
        if (this.cartItems !== null) {
          this.products = response["data"]["products"].map((item, index) => {
            this.cartItems["products"].forEach((cartItem, cartItemIndex) => {
              if (cartItem.id === item.id) {
                item["count"] = cartItem.count;
              }

            });

            return item;
          });
        } else {
          this.products = response["data"]["products"];
        }




        console.log('cart items products', this.products);
      }, error => {
        this.helperService.presentToast('Error while getting products`')
      });
  }

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };


  productCount(count, product) {
    const cartProducts = JSON.parse(localStorage.getItem('cartItems')) || {};

    const productCount = parseInt(count);

    console.log('cart Products', cartProducts);


    if (cartProducts["products"]) {
      const index = cartProducts.products.findIndex((item, index) => {
        return item.id === product.id;
      });


      console.log('index', index);

      if (index !== -1) {
        console.log('item exist');

        cartProducts["products"].forEach((item, index) => {
          if (product.id === item.id) {
            item.count = productCount;
          };
        })

        console.log('item existed cart Products', cartProducts);

        console.log('%c cart products', 'color: yellow', cartProducts);

      } else {
        console.log('item not existed');
        product["count"] = productCount;
        cartProducts["products"].push(product);

        console.log('item not existed inside cart', cartProducts);
        console.log('products inside the cart', cartProducts["products"]);

      }

      localStorage.setItem('cartItems', JSON.stringify(cartProducts));


    } else {
      console.log('%c NO Products in Cart', 'color: yellow', cartProducts);
      product["count"] = productCount;
      cartProducts["products"] = [];
      cartProducts["products"].push(product);

      localStorage.setItem('cartItems', JSON.stringify(cartProducts));

      console.log('getting items for one product', cartProducts);
    }

    this.updateTotalProductCount();

  }


  updateTotalProductCount() {

    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    console.log('cart items', cartItems);
  
    const total = cartItems["products"].map(item => item.count).reduce((prev, next) => prev + next);
    console.log('update total count', total);
    this.observableService.updateCartItems(total);
  }

}
