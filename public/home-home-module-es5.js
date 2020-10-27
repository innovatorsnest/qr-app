(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <app-header [title]=\"'Categories'\"></app-header>\n</ion-header>\n\n<ion-content>\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide class=\"slide\">\n      <span class=\"banner\">\n      </span>\n      <img src=\"../../assets/images/homes/home.jpg\" alt=\"\">\n    </ion-slide>\n  </ion-slides>\n\n  <ion-row>\n    <ion-col class=\"4\" size=\"4\" *ngFor=\"let category of allCategories\">\n      <ion-card class=\"card\" (click)=\"goToSubcategory(category)\">\n        <span class=\"card-banner\">\n          {{\n            category.name\n          }}\n        </span>\n        <img class=\"card-image\" *ngIf=\"category.images?.length > 0; else dummyImage\" src=\"{{category.images[0]}}\">\n        <ng-template #dummyImage>\n          <img class=\"card-image\"  src=\"../../assets/images/homes/dish.jpg\">\n        </ng-template>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/home/home-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
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


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }, {
        path: ':id',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/home/home.module.ts":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./home-routing.module */
      "./src/app/home/home-routing.module.ts");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_9__["HomePageRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _shared_header_header_module__WEBPACK_IMPORTED_MODULE_1__["HeaderPageModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_8__["HomePage"]],
        exports: [],
        providers: [_services_observable_services__WEBPACK_IMPORTED_MODULE_2__["ObservablesService"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "./src/app/home/home.page.scss":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".slide {\n  width: 550px !important;\n}\n\n.cart {\n  font-size: 22px;\n  padding-right: 10px;\n  padding-left: 10px;\n}\n\n.card {\n  height: 150px;\n}\n\n.card-image {\n  height: 100%;\n  width: 100%;\n}\n\n.card-banner {\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  background-color: #3f37376b;\n  color: #fff;\n  bottom: 0px;\n  text-transform: capitalize;\n  padding-top: 3px;\n  padding-bottom: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFFRjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZSB7XG4gIHdpZHRoOiA1NTBweCAhaW1wb3J0YW50O1xufVxuXG4uY2FydCB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uY2FyZCB7XG4gIGhlaWdodDogMTUwcHg7XG59XG4uY2FyZC1pbWFnZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cblxuXG5cbi5jYXJkLWJhbm5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmMzczNzZiO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/home/home.page.ts":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../services/data.service */
      "./src/app/services/data.service.ts");
      /* harmony import */


      var _services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../services/helper.service */
      "./src/app/services/helper.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(route, helper, dataService, router) {
          _classCallCheck(this, HomePage);

          this.route = route;
          this.helper = helper;
          this.dataService = dataService;
          this.router = router;
          this.slideOpts = {
            initialSlide: 1,
            speed: 400
          };
        }

        _createClass(HomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getCategories(); // this.getOrders();
          } // getOrders() {
          //   this.dataService.getOrders().subscribe((response) => {
          //     console.log('%c response from getting the orders', 'color: yellow', response);
          //     this.helper.loadingController.dismiss();
          //   }, error => {
          //     console.log('%c error while getting orders', 'color: yellow', error);
          //     this.helper.loadingController.dismiss();
          //   })
          // }

        }, {
          key: "getCategories",
          value: function getCategories() {
            var _this = this;

            this.dataService.getAllCategories().subscribe(function (response) {
              console.log('%c response while adding the categories', 'color: yellow', response);
              _this.allCategories = response["data"]["categories"];
            }, function (error) {
              console.log('%c error while adding the categories', 'color: yellow', error);
            });
          }
        }, {
          key: "goToSubcategory",
          value: function goToSubcategory(category) {
            if (category.hasSubCategory === true) {
              this.router.navigate(["subcategory/".concat(category.id)]);
            } else {
              console.log('display snackbar');
              this.helper.presentToast('No SubCategories and Products'); // display snackbar
            }
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/home/home.page.scss"))["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map