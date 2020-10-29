(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppProductsProductsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <app-header [title]=\"'Products'\"></app-header>\n</ion-header>\n\n<ion-content>\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide class=\"slide\">\n      <span class=\"banner\">\n      </span>\n      <img src=\"../../assets/images/homes/home.jpg\" alt=\"\">\n    </ion-slide>\n  </ion-slides>\n\n  <ion-row>\n    <ng-container *ngIf=\"products?.length > 0; else noData\">\n      <ion-col class=\"4\" size=\"4\" *ngFor=\"let product of products\">\n        <ion-card class=\"card\">\n          <span class=\"card-banner\">\n            {{\n              product.name\n            }}\n          </span>\n          <stepper-input [step]=\"1\" [product]=\"product\" [min]=\"0\" [count]=\"product.count\" (countUpdated)=\"productCount($event,product)\" [max]=\"100\" [initialValue]=\"product.count || 0\" symbol=\"%\"\n            ariaLabelLess=\"Less 10\" ariaLabelMore=\"Plus 10\">\n          </stepper-input>\n          <img class=\"card-image\" *ngIf=\"product.images.length > 0; else dummyImage\" src=\"{{product.images[0]}}\">\n          <ng-template #dummyImage>\n            <img class=\"card-image\" src=\"../../assets/images/homes/soup.jpg\">\n          </ng-template>\n        </ion-card>\n      </ion-col>\n    </ng-container>\n\n    <ng-template #noData>\n      <ion-list style=\"    text-align: center;\n    width: 100%;    margin-top: 50px;\n    margin-bottom: 50px;\">\n        <span>No Products</span>\n      </ion-list>\n    </ng-template>\n \n  </ion-row>\n\n\n\n\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/interceptor/stepper/stepper.component.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/interceptor/stepper/stepper.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSharedInterceptorStepperStepperComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"stepper-input stepper__input custom__stepper\">\n    <button class=\"toggle-less\" (click)=\"toggleLess()\">\n      <!-- <img src=\"assets/minus.svg\" [attr.alt]=\"ariaLabelLess\" /> -->\n      <ion-icon name=\"remove-outline\"></ion-icon>\n    </button>\n    <div class=\"stepper-input-field rendered__value\" name=\"range-value\" aria-atomic=\"true\" aria-live=\"polite\" aria-relevant=\"all\">\n        {{renderedValue}}\n    </div>\n    <button class=\"toggle-more\" (click)=\"toggleMore()\">\n        <ion-icon name=\"add-outline\"></ion-icon>\n    </button>\n  </div>";
      /***/
    },

    /***/
    "./src/app/products/products-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/products/products-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: ProductsPageRoutingModule */

    /***/
    function srcAppProductsProductsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsPageRoutingModule", function () {
        return ProductsPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _products_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./products.page */
      "./src/app/products/products.page.ts");

      var routes = [{
        path: '',
        component: _products_page__WEBPACK_IMPORTED_MODULE_3__["ProductsPage"]
      }];

      var ProductsPageRoutingModule = function ProductsPageRoutingModule() {
        _classCallCheck(this, ProductsPageRoutingModule);
      };

      ProductsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProductsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/products/products.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/products/products.module.ts ***!
      \*********************************************/

    /*! exports provided: ProductsPageModule */

    /***/
    function srcAppProductsProductsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function () {
        return ProductsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _shared_header_header_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../shared/header/header.module */
      "./src/app/shared/header/header.module.ts");
      /* harmony import */


      var _services_observable_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../services/observable.services */
      "./src/app/services/observable.services.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _shared_interceptor_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../shared/interceptor/stepper/stepper.component */
      "./src/app/shared/interceptor/stepper/stepper.component.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _products_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./products-routing.module */
      "./src/app/products/products-routing.module.ts");
      /* harmony import */


      var _products_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./products.page */
      "./src/app/products/products.page.ts");

      var ProductsPageModule = function ProductsPageModule() {
        _classCallCheck(this, ProductsPageModule);
      };

      ProductsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_9__["ProductsPageRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _shared_header_header_module__WEBPACK_IMPORTED_MODULE_1__["HeaderPageModule"]],
        declarations: [_products_page__WEBPACK_IMPORTED_MODULE_10__["ProductsPage"], _shared_interceptor_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_4__["StepperInputComponent"]],
        providers: [_services_observable_services__WEBPACK_IMPORTED_MODULE_2__["ObservablesService"]]
      })], ProductsPageModule);
      /***/
    },

    /***/
    "./src/app/products/products.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/products/products.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppProductsProductsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".slide {\n  width: 550px !important;\n}\n\n.cart {\n  font-size: 22px;\n  padding-right: 10px;\n  padding-left: 10px;\n}\n\n.card {\n  height: 150px;\n}\n\n.card-image {\n  height: 100%;\n  width: 100%;\n}\n\n.card-banner {\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  background-color: #3f37376b;\n  color: #fff;\n  bottom: 0px;\n  text-transform: capitalize;\n  padding-top: 3px;\n  padding-bottom: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0FBQ0o7O0FBQ0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUNFO0VBQ0Usa0JBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRU4iLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGUge1xuICAgIHdpZHRoOiA1NTBweCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuY2FydCB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG4gIFxuICAuY2FyZCB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgfVxuICAuY2FyZC1pbWFnZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuY2FyZC1iYW5uZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNmMzczNzZiO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBib3R0b206IDBweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgcGFkZGluZy10b3A6IDNweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIH0iXX0= */";
      /***/
    },

    /***/
    "./src/app/products/products.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/products/products.page.ts ***!
      \*******************************************/

    /*! exports provided: ProductsPage */

    /***/
    function srcAppProductsProductsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsPage", function () {
        return ProductsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_observable_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../services/observable.services */
      "./src/app/services/observable.services.ts");
      /* harmony import */


      var _services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../services/helper.service */
      "./src/app/services/helper.service.ts");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../services/data.service */
      "./src/app/services/data.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var ProductsPage = /*#__PURE__*/function () {
        function ProductsPage(route, dataService, helperService, observableService) {
          var _this = this;

          _classCallCheck(this, ProductsPage);

          this.route = route;
          this.dataService = dataService;
          this.helperService = helperService;
          this.observableService = observableService;
          this.slideOpts = {
            initialSlide: 1,
            speed: 400
          };
          this.route.params.subscribe(function (params) {
            console.log('params', params);

            _this.getProductsOfSubCategory(params.id);
          });
        }

        _createClass(ProductsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getProductsOfSubCategory",
          value: function getProductsOfSubCategory(subCategoryId) {
            var _this2 = this;

            this.helperService.presentLoader('Fetching Products');
            this.dataService.getAllProductsInsideSubcategory(subCategoryId).subscribe(function (response) {
              console.log('response from getting the product', response); // this.products = response["data"]["products"];

              _this2.cartItems = JSON.parse(localStorage.getItem('cartItems'));
              console.log('products fetched from localstorage cart items', _this2.cartItems); // getting the actual count from the local

              if (_this2.cartItems !== null) {
                _this2.products = response["data"]["products"].map(function (item, index) {
                  _this2.cartItems["products"].forEach(function (cartItem, cartItemIndex) {
                    if (cartItem.id === item.id) {
                      item["count"] = cartItem.count;
                    }
                  });

                  return item;
                });
              } else {
                _this2.products = response["data"]["products"];
              }

              console.log('cart items products', _this2.products);
            }, function (error) {
              _this2.helperService.presentToast('Error while getting products`');
            });
          }
        }, {
          key: "productCount",
          value: function productCount(count, product) {
            var cartProducts = JSON.parse(localStorage.getItem('cartItems')) || {};
            var productCount = parseInt(count);
            console.log('cart Products', cartProducts);

            if (cartProducts["products"]) {
              var index = cartProducts.products.findIndex(function (item, index) {
                return item.id === product.id;
              });
              console.log('index', index);

              if (index !== -1) {
                console.log('item exist');
                cartProducts["products"].forEach(function (item, index) {
                  if (product.id === item.id) {
                    item.count = productCount;
                  }

                  ;
                });
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
        }, {
          key: "updateTotalProductCount",
          value: function updateTotalProductCount() {
            var cartItems = JSON.parse(localStorage.getItem('cartItems'));
            console.log('cart items', cartItems);
            var total = cartItems["products"].map(function (item) {
              return item.count;
            }).reduce(function (prev, next) {
              return prev + next;
            });
            console.log('update total count', total);
            this.observableService.updateCartItems(total);
          }
        }]);

        return ProductsPage;
      }();

      ProductsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }, {
          type: _services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"]
        }, {
          type: _services_observable_services__WEBPACK_IMPORTED_MODULE_1__["ObservablesService"]
        }];
      };

      ProductsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-products',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./products.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./products.page.scss */
        "./src/app/products/products.page.scss"))["default"]]
      })], ProductsPage);
      /***/
    },

    /***/
    "./src/app/shared/interceptor/stepper/stepper.component.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/shared/interceptor/stepper/stepper.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSharedInterceptorStepperStepperComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".stepper__input {\n  width: 100%;\n  max-width: 270px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.rendered__value {\n  color: #000;\n  font-weight: 600;\n  font-size: 20px;\n}\n\n.custom__stepper {\n  width: 75%;\n  position: absolute;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  bottom: 50%;\n}\n\n.stepper__input .stepper-input-field {\n  color: #16489d;\n  font-family: Arial, sans-serif;\n  font-size: 20px;\n  font-weight: bolder;\n  padding: 0;\n  background: transparent;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  height: 25px;\n  line-height: 25px;\n  border: none;\n  text-align: center;\n  margin: 0 7px;\n  flex-grow: 1;\n  min-width: calc(100% - 25px - 14px);\n}\n\n.stepper__input button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n  background-color: #16489d;\n  min-width: 25px;\n  height: 25px;\n  line-height: 25px;\n  color: #fff;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2ludGVyY2VwdG9yL3N0ZXBwZXIvc3RlcHBlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUdBLGFBQUE7RUFHQSw4QkFBQTtFQUdBLG1CQUFBO0FBQ0o7O0FBR0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFESjs7QUFJRTtFQUNFLGNBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFFQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFHQSxZQUFBO0VBQ0EsbUNBQUE7QUFESjs7QUFJRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLFlBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9pbnRlcmNlcHRvci9zdGVwcGVyL3N0ZXBwZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RlcHBlcl9faW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMjcwcHg7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIFxuICB9XG5cbiAgLnJlbmRlcmVkX192YWx1ZSB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICAuY3VzdG9tX19zdGVwcGVyIHtcbiAgICB3aWR0aDogNzUlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyBtYXgtd2lkdGg6IDgycHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3R0b206IDUwJTtcbiAgfVxuICBcbiAgLnN0ZXBwZXJfX2lucHV0IC5zdGVwcGVyLWlucHV0LWZpZWxkIHtcbiAgICBjb2xvcjogIzE2NDg5ZDtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGhlaWdodDogMjVweDtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCA3cHg7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgbWluLXdpZHRoOiBjYWxjKDEwMCUgLSAyNXB4IC0gMTRweCk7XG4gIH1cbiAgXG4gIC5zdGVwcGVyX19pbnB1dCBidXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjQ4OWQ7XG4gICAgbWluLXdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH0iXX0= */";
      /***/
    },

    /***/
    "./src/app/shared/interceptor/stepper/stepper.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/shared/interceptor/stepper/stepper.component.ts ***!
      \*****************************************************************/

    /*! exports provided: StepperInputComponent */

    /***/
    function srcAppSharedInterceptorStepperStepperComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StepperInputComponent", function () {
        return StepperInputComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_observable_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../services/observable.services */
      "./src/app/services/observable.services.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var StepperInputComponent = /*#__PURE__*/function () {
        function StepperInputComponent(observableService) {
          var _this3 = this;

          _classCallCheck(this, StepperInputComponent);

          this.observableService = observableService;
          this.title = "Stepper input";
          this.step = 0;
          this.min = 0;
          this.max = 0;
          this.value = 0;
          this.countUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();

          this.toggleMore = function () {
            if (_this3.step + _this3.value <= _this3.max) {
              _this3.value = _this3.value + _this3.step;
              _this3.renderedValue = _this3.value;
              console.log('rendered the value', _this3.renderedValue);

              _this3.countUpdated.emit(_this3.renderedValue);
            }
          };

          this.toggleLess = function () {
            if (_this3.value - _this3.step >= _this3.min) {
              _this3.value = _this3.value - _this3.step;
              _this3.renderedValue = _this3.value;
              console.log('rendered the value', _this3.renderedValue);

              _this3.countUpdated.emit(_this3.renderedValue);
            }
          };
        }

        _createClass(StepperInputComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.value = this.initialValue;
            this.renderedValue = this.value;
          }
        }, {
          key: "trackValue",
          value: function trackValue() {}
        }]);

        return StepperInputComponent;
      }();

      StepperInputComponent.ctorParameters = function () {
        return [{
          type: _services_observable_services__WEBPACK_IMPORTED_MODULE_1__["ObservablesService"]
        }];
      };

      StepperInputComponent.propDecorators = {
        initialValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        step: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        min: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        symbol: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        ariaLabelLess: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        ariaLabelMore: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        count: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        countUpdated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        product: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      StepperInputComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "stepper-input",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./stepper.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/interceptor/stepper/stepper.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./stepper.component.scss */
        "./src/app/shared/interceptor/stepper/stepper.component.scss"))["default"]]
      })], StepperInputComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=products-products-module-es5.js.map